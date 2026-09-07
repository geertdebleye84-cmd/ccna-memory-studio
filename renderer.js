const CHAPTERS = {
  'Network Fundamentals': 'Chapter 1 · Network Fundamentals',
  'Network Access': 'Chapter 2 · Network Access',
  'IP Connectivity': 'Chapter 3 · IP Connectivity',
  'IP Services': 'Chapter 4 · IP Services',
  'Security Fundamentals': 'Chapter 5 · Security Fundamentals',
  'Automation & Programmability': 'Chapter 6 · Automation & Programmability'
};
const AUTOMATION = [
  ['auto-json', 'API data format', 'JSON uses key-value pairs and is a common, human-readable format for API exchange.'],
  ['auto-put', 'REST API methods', 'PUT is commonly used to fully update an existing REST resource.'],
  ['auto-controller', 'Controller-based networking', 'Policy and automation can be deployed centrally and more consistently.'],
  ['auto-declarative', 'Declarative automation', 'The desired end state is described; the platform determines how that state is reached.']
].map(([id, title, statement]) => ({ id, domain: 'Automation & Programmability', title, statement }));

const $ = (selector) => document.querySelector(selector);
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const shuffled = (items) => [...items].sort(() => Math.random() - 0.5);
const clone = (value) => value ? JSON.parse(JSON.stringify(value)) : null;
function colourLuminance(hex) {
  const value = String(hex || '').replace('#', '');
  if (!/^[0-9a-f]{6}$/i.test(value)) return 0;
  const channels = [0, 2, 4].map((index) => parseInt(value.slice(index, index + 2), 16) / 255).map((channel) => channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4);
  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
}
function contrastRatio(first, second) {
  const a = colourLuminance(first), b = colourLuminance(second);
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}

let store = { notes: {}, progress: {}, history: [], settings: {} };
let cards = [], selectedChapters = new Set(Object.keys(CHAPTERS)), bundle = 'all';
let mode = 'learn', learnQueue = [], learnIndex = 0, session = makeSession(), test = null;
let audio = new Audio(), speechToken = 0, reading = { active: false, paused: false, token: 0, waitCancel: null };
let jeremyCatalog = { videos: [] }, bookCatalog = { chapters: [] }, currentJeremyVideo = null, videoDrag = null;
let courseId = 'ccna1-itn', courseModuleId = 1, courseSearch = '', courseQuiz = null, courseFlash = null, courseView = 'course', courseLibraryType = 'knowledge', courseLibraryFilter = 'all';
let cliState = { profile: 'cisco', topics: new Set(), exercise: null, session: null, lines: [], history: [], historyIndex: 0, feedback: null, repeats: [] };
let diagramPdfs = [], diagramState = { view: 'trainer', diagramId: 'arp-request', page: 1, promptIndex: 0, revealed: false, pdfVisible: true, test: null };

function makeSession() { return { id: crypto.randomUUID(), total: 0, correct: 0 }; }
function makeCards(rows) {
  const base = rows.map((row) => {
    const title = row.concepts?.[0] || 'CCNA concept';
    const statement = row.answer_hints?.[0] || 'Review the core principle.';
    return {
      id: `concept-${row.source_number}`,
      domain: CHAPTERS[row.domain] ? row.domain : 'Network Fundamentals',
      title,
      statement,
      // Keep a complete, speakable answer with each card. The prompt is an
      // original contextual checkpoint; this text is the learning answer.
      answerText: `${title}. ${statement}`
    };
  });
  return base.map((card, index) => {
    const nearby = base.filter((item) => item.id !== card.id && item.domain === card.domain).map((item) => item.title);
    const pool = nearby.length >= 3 ? nearby : base.filter((item) => item.id !== card.id).map((item) => item.title);
    const distractors = [];
    for (let step = 0; step < pool.length && distractors.length < 3; step += 1) {
      const candidate = pool[(index * 17 + step * 29 + card.title.length) % pool.length];
      if (candidate !== card.title && !distractors.includes(candidate)) distractors.push(candidate);
    }
    return { ...card, prompt: contextualPromptV2(card, index), correct: card.title, options: shuffled([card.title, ...distractors]) };
  });
}
function contextualPrompt(card, index) {
  const statement = card.statement.replace(/[.\s]+$/, '');
  const templates = {
    'Network Fundamentals': [
      `While documenting how traffic is prepared for transmission, an engineer writes: “${statement}.” Which concept is being described?`,
      `A junior technician finds this note in a network design: “${statement}.” What topic should they review?`
    ],
    'Network Access': [
      `During a campus-switch troubleshooting session, the team observes that “${statement}.” Which switching or access concept is relevant?`,
      `A network access design includes the following behaviour: “${statement}.” Which topic explains it?`
    ],
    'IP Connectivity': [
      `While verifying reachability between networks, an engineer records: “${statement}.” Which routing or IP connectivity concept applies?`,
      `A router report includes this finding: “${statement}.” Which area should be investigated?`
    ],
    'IP Services': [
      `A service validation note says: “${statement}.” Which IP service concept is being used?`,
      `During an infrastructure review, an administrator notes: “${statement}.” Which service topic explains this?`
    ],
    'Security Fundamentals': [
      `During a security review, the team identifies that “${statement}.” Which security concept is involved?`,
      `A security policy discussion includes this observation: “${statement}.” What topic should the team study?`
    ],
    'Automation & Programmability': [
      `An automation engineer records: “${statement}.” Which automation concept is relevant?`,
      `In a controller-based network, the team observes: “${statement}.” Which topic explains this behaviour?`
    ]
  };
  const options = templates[card.domain] || templates['Network Fundamentals'];
  return options[index % options.length];
}
function escapeRegExp(value) { return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function removeAnswerLabel(statement, title) {
  const label = String(title || '').trim();
  if (!label || label.length < 3) return statement;
  const lower = statement.toLowerCase(), labelLower = label.toLowerCase();
  if (lower.includes(labelLower)) return statement.replace(new RegExp(escapeRegExp(label), 'ig'), 'the relevant mechanism');
  // A short answer such as "TCP" may be written as part of a longer label.
  // Redact only explicit acronyms, never generic words such as "network".
  const tokens = label.match(/\b[A-Z0-9]{2,8}\b/g) || [];
  return tokens.reduce((result, token) => result.replace(new RegExp(`\\b${escapeRegExp(token)}\\b`, 'g'), 'the protocol'), statement);
}
function contextualPromptV2(card, index) {
  // Keep an exact answer label out of the question while retaining the useful clue.
  const statement = removeAnswerLabel(card.statement.replace(/[.\s]+$/, ''), card.title);
  const templates = {
    'Network Fundamentals': [
      `A technician is tracing what happens to user data before it leaves a host. Their capture notes that ${statement}. Which underlying networking concept best explains that observation?`,
      `While preparing a design review, an engineer writes that ${statement}. Which fundamental concept should a new team member use to interpret this correctly?`
    ],
    'Network Access': [
      `Users on the same campus LAN report an access-layer behaviour: ${statement}. Which switching or network-access concept should the engineer investigate?`,
      `During a switch deployment, the design notes that ${statement}. Which network-access topic accounts for that behaviour?`
    ],
    'IP Connectivity': [
      `A user cannot reach a remote subnet, and the router investigation finds that ${statement}. Which IP-connectivity concept should guide the next troubleshooting step?`,
      `While validating communication between two networks, an engineer observes that ${statement}. Which routing or IP concept explains the result?`
    ],
    'IP Services': [
      `During a routine service check, an administrator verifies that ${statement}. Which IP-service concept is being applied?`,
      `An infrastructure runbook records that ${statement}. Which service topic would help an engineer maintain this behaviour?`
    ],
    'Security Fundamentals': [
      `A security review identifies the following condition: ${statement}. Which security concept is most relevant to the team's response?`,
      `While checking a network policy, an engineer observes that ${statement}. Which security topic explains why this matters?`
    ],
    'Automation & Programmability': [
      `A network automation workflow depends on the fact that ${statement}. Which automation or programmability concept is being used?`,
      `During a controller-based deployment, an engineer observes that ${statement}. Which automation topic best explains the design choice?`
    ]
  };
  const options = templates[card.domain] || templates['Network Fundamentals'];
  return options[index % options.length];
}
function progress(id) { return store.progress[id] || { status: 'unseen', priority: 'none', attempts: 0, ease: 2.5, interval: 0, repetitions: 0, box: 1, dueAt: 0 }; }
function activeCards() {
  return cards.filter((card) => {
    if (!selectedChapters.has(card.domain)) return false;
    const p = progress(card.id);
    if (bundle === 'important') return p.priority === 'important' || p.status === 'wrong';
    if (bundle === 'review') return p.dueAt && p.dueAt <= Date.now();
    if (bundle === 'wrong') return p.status === 'wrong';
    if (bundle === 'known') return p.status === 'correct' || p.priority === 'known';
    return true;
  });
}
function currentCard() { return learnQueue[learnIndex] || null; }
function save() { return window.studio.save(store); }
function status(text) { $('#header-status').textContent = text; }
function noteToHtml(value) {
  const note = String(value || '');
  return /<\/?[a-z][^>]*>/i.test(note) ? note : escapeHtml(note).replace(/\r?\n/g, '<br>');
}
function setNote(card) {
  $('#note').innerHTML = card ? noteToHtml(store.notes[card.id]) : '';
  $('#note-status').textContent = card ? 'Local to this card.' : 'Choose a card first.';
}
function updateCounts() { const due = cards.filter((card) => progress(card.id).dueAt && progress(card.id).dueAt <= Date.now()).length; $('#selection-summary').textContent = `${activeCards().length} card(s) selected · ${due} due for review`; }

function renderSelection() {
  $('#bundle').value = bundle;
  $('#chapter-list').innerHTML = Object.keys(CHAPTERS).map((name) => `<label><input class="chapter-toggle" type="checkbox" value="${escapeHtml(name)}" ${selectedChapters.has(name) ? 'checked' : ''} /> <span>${escapeHtml(name)}</span><small>${cards.filter((card) => card.domain === name).length}</small></label>`).join('');
  document.querySelectorAll('.chapter-toggle').forEach((input) => input.addEventListener('change', () => { if (input.checked) selectedChapters.add(input.value); else selectedChapters.delete(input.value); updateCounts(); }));
  updateCounts();
}
function showEmpty(message) { $('#content').innerHTML = `<article class="learn-card"><p class="label">STUDY SET</p><h2 class="statement">${escapeHtml(message)}</h2><p class="quiet">Choose another bundle or include more chapters, then start the set again.</p></article>`; setNote(null); }
function buildCard(templateId, card, counter) {
  const view = $(templateId).content.cloneNode(true);
  view.querySelector('.chapter').textContent = CHAPTERS[card.domain];
  view.querySelector('.counter').textContent = counter;
  view.querySelector('.statement').textContent = card.prompt;
  view.querySelector('.topic').textContent = card.title;
  const detail = view.querySelector('.answer-detail');
  if (detail) detail.textContent = card.statement;
  return view;
}
function videoScore(card, video) {
  const text = `${card.title} ${card.statement} ${card.prompt || ''}`.toLowerCase();
  const title = String(card.title || '').toLowerCase();
  const keywordScore = (video.keywords || []).reduce((score, keyword) => {
    const term = String(keyword).toLowerCase();
    if (!term || !text.includes(term)) return score;
    return score + (title.includes(term) ? 12 : Math.min(8, 2 + term.length / 4));
  }, 0);
  const titleWords = String(video.title || '').toLowerCase().split(/\W+/).filter((word) => word.length > 3);
  const titleScore = titleWords.reduce((score, word) => score + (text.includes(word) ? 1 : 0), 0);
  return keywordScore + titleScore + (video.domain === card.domain ? 1 : 0);
}
function lessonForCard(card) {
  if (!card || !jeremyCatalog.videos?.length) return null;
  return [...jeremyCatalog.videos].sort((a, b) => videoScore(card, b) - videoScore(card, a) || a.day - b.day)[0] || null;
}
function lessonEmbedUrl(video) {
  const captions = $('#captions')?.checked ? '&cc_load_policy=1&cc_lang_pref=en' : '';
  return `https://www.youtube.com/embed/${encodeURIComponent(video.id)}?rel=0${captions}`;
}
function setJeremyLesson(video, contextCard = null) {
  if (!video) return;
  currentJeremyVideo = video;
  const player = $('#jeremy-player');
  const nextSrc = lessonEmbedUrl(video);
  if (player.dataset.videoId !== video.id || player.dataset.captions !== String($('#captions')?.checked)) {
    player.src = nextSrc; player.dataset.videoId = video.id; player.dataset.captions = String($('#captions')?.checked);
  }
  $('#jeremy-topic').value = video.id;
  const matching = contextCard ? `Matched to “${contextCard.title}”` : 'Selected lesson';
  $('#jeremy-match').textContent = `${matching} · Day ${video.day}: ${video.title}`;
}
function updateLessonForCurrentCard() {
  const card = mode === 'learn' ? currentCard() : test?.cards?.[test.index];
  const video = lessonForCard(card);
  if (!video) return;
  if (!currentJeremyVideo) { setJeremyLesson(video, card); return; }
  $('#jeremy-match').textContent = `Suggested for “${card.title}” · Day ${video.day}: ${video.title}`;
}
function setWorkbenchLayout(layout) {
  const target = ['focus', 'split', 'studio'].includes(layout) ? layout : 'split';
  $('.layout').dataset.layout = target;
  document.querySelectorAll('.layout-choice').forEach((button) => button.classList.toggle('active', button.dataset.layout === target));
  store.settings.layout = target; save();
}
function openRelatedLesson(card) {
  const video = lessonForCard(card);
  if (!video) { $('#jeremy-match').textContent = 'The lesson catalogue is still loading.'; return; }
  $('#video-panel').open = true;
  setWorkbenchLayout('studio');
  setJeremyLesson(video, card);
}
function bookScore(card, chapter) {
  const text = `${card.title} ${card.statement} ${card.prompt || ''}`.toLowerCase();
  const title = String(card.title || '').toLowerCase();
  const keywordScore = (chapter.keywords || []).reduce((score, keyword) => {
    const term = String(keyword).toLowerCase();
    if (!term || !text.includes(term)) return score;
    return score + (title.includes(term) ? 14 : Math.min(9, 2 + term.length / 4));
  }, 0);
  return keywordScore + ((chapter.domains || []).includes(card.domain) ? 0.75 : 0);
}
function chapterForCard(card) {
  if (!card || !bookCatalog.chapters?.length) return null;
  const ranked = [...bookCatalog.chapters].map((chapter) => ({ chapter, score: bookScore(card, chapter) })).sort((a, b) => b.score - a.score || a.chapter.number - b.chapter.number);
  return ranked[0]?.score > 1 ? ranked[0].chapter : null;
}
function referenceUrl(filePath, pdfPage = null) {
  const location = `file:///${encodeURI(String(filePath || '').replace(/\\/g, '/'))}`;
  return pdfPage ? `${location}#page=${encodeURIComponent(pdfPage)}` : location;
}
function currentBookChapter() {
  return bookCatalog.chapters?.find((chapter) => String(chapter.number) === $('#book-chapter')?.value) || null;
}
function updateBookForCurrentCard() {
  const card = mode === 'learn' ? currentCard() : test?.cards?.[test.index];
  const chapter = chapterForCard(card);
  if (!chapter) { $('#reference-status').textContent = store.settings.referenceBook ? 'No precise Volume 1 chapter match for this card.' : 'Choose the supplied Volume 1 PDF to enable chapter jumps.'; return; }
  $('#book-chapter').value = String(chapter.number);
  $('#reference-status').textContent = `Suggested: Chapter ${chapter.number} · ${chapter.title} · PDF page ${chapter.pdfPage}.`;
}
function showReference() {
  const filePath = store.settings.referenceBook;
  if (!filePath) { $('#reference-status').textContent = 'Choose a local PDF first.'; return; }
  const chapter = currentBookChapter();
  $('#reference-panel').open = true;
  $('#reference-viewer-wrap').hidden = false;
  $('#reference-viewer').src = referenceUrl(filePath, chapter?.pdfPage);
  $('#reference-status').textContent = chapter ? `Opened Chapter ${chapter.number}: ${chapter.title} (PDF page ${chapter.pdfPage}).` : 'Local reference open. Search it, then paste your own text or images into the note.';
}
function setPanelFloating(panelId, floating) {
  const panel = $(`#${panelId}`); if (!panel) return;
  panel.classList.toggle('is-floating', floating);
  const floatButton = panel.querySelector('[data-panel-action="float"]');
  const dockButton = panel.querySelector('[data-panel-action="dock"]');
  if (floatButton) floatButton.hidden = floating;
  if (dockButton) dockButton.hidden = !floating;
  store.settings.floatingPanels ||= {};
  store.settings.panelPositions ||= {};
  if (!floating) { panel.style.left = ''; panel.style.top = ''; panel.style.right = ''; }
  else {
    panel.open = true;
    const rect = panel.getBoundingClientRect(), saved = store.settings.panelPositions[panelId] || {};
    const preferredLeft = Number(saved.left) || Math.max(12, window.innerWidth - Math.min(480, window.innerWidth - 36) - 20);
    const preferredTop = Number(saved.top) || Math.max(18, rect.top);
    panel.style.left = `${Math.max(12, Math.min(window.innerWidth - panel.offsetWidth - 12, preferredLeft))}px`;
    panel.style.top = `${Math.max(18, Math.min(window.innerHeight - 90, preferredTop))}px`; panel.style.right = 'auto';
  }
  store.settings.floatingPanels[panelId] = floating;
  save();
}
function startPanelDrag(event) {
  const panel = event.currentTarget.closest('.floatable-panel');
  if (!panel?.classList.contains('is-floating') || event.target.closest('button, input, select')) return;
  const rect = panel.getBoundingClientRect();
  videoDrag = { panelId: panel.id, x: event.clientX, y: event.clientY, left: rect.left, top: rect.top };
  panel.setPointerCapture?.(event.pointerId); event.preventDefault();
}
function dragPanel(event) {
  if (!videoDrag) return;
  const panel = $(`#${videoDrag.panelId}`); if (!panel) return;
  const maxLeft = Math.max(12, window.innerWidth - panel.offsetWidth - 12);
  const maxTop = Math.max(18, window.innerHeight - panel.offsetHeight - 12);
  panel.style.left = `${Math.max(12, Math.min(maxLeft, videoDrag.left + event.clientX - videoDrag.x))}px`;
  panel.style.top = `${Math.max(18, Math.min(maxTop, videoDrag.top + event.clientY - videoDrag.y))}px`;
}
function stopPanelDrag() {
  if (videoDrag) { const panel = $(`#${videoDrag.panelId}`); store.settings.panelPositions ||= {}; store.settings.panelPositions[videoDrag.panelId] = { left: parseInt(panel.style.left, 10), top: parseInt(panel.style.top, 10) }; save(); }
  videoDrag = null;
}
function populateJeremyLessons() {
  const select = $('#jeremy-topic');
  const videos = jeremyCatalog.videos || [];
  select.innerHTML = videos.map((video) => `<option value="${escapeHtml(video.id)}">DAY ${String(video.day).padStart(2, '0')} · ${escapeHtml(video.title)}</option>`).join('');
  if (!videos.length) { $('#jeremy-match').textContent = 'No local video catalogue was found.'; return; }
  const matching = lessonForCard(currentCard()) || videos[0];
  setJeremyLesson(matching, currentCard());
}
function populateBookChapters() {
  const select = $('#book-chapter');
  const chapters = bookCatalog.chapters || [];
  select.innerHTML = chapters.map((chapter) => `<option value="${chapter.number}">CH. ${String(chapter.number).padStart(2, '0')} · ${escapeHtml(chapter.title)}</option>`).join('');
  updateBookForCurrentCard();
}
function installReference(result, { open = true } = {}) {
  if (result.canceled) { if (result.reason) $('#reference-status').textContent = result.reason; return; }
  store.settings.referenceBook = result.filePath; save();
  $('#reference-status').textContent = `Local reference selected: ${result.filePath.split(/[/\\]/).pop()}`;
  $('#library-status').textContent = `${cards.length} CARDS · VOLUME 1 LOADED`;
  if (open) showReference(); else updateBookForCurrentCard();
}
function saveCurrentNote() {
  const card = mode === 'learn' ? currentCard() : test?.cards?.[test.index];
  if (!card) return false;
  store.notes[card.id] = $('#note').innerHTML;
  save(); $('#note-status').textContent = 'Saved locally.'; return true;
}
function pasteImageIntoNote(event) {
  const item = [...(event.clipboardData?.items || [])].find((entry) => entry.kind === 'file' && entry.type.startsWith('image/'));
  if (!item) return;
  event.preventDefault();
  const reader = new FileReader();
  reader.onload = () => document.execCommand('insertImage', false, reader.result);
  reader.readAsDataURL(item.getAsFile());
}
function renderLearn() {
  if (!learnQueue.length) { learnQueue = activeCards(); learnIndex = 0; }
  const card = currentCard(); if (!card) return showEmpty('No cards match this study set.');
  const view = buildCard('#learn-template', card, `Card ${learnIndex + 1} of ${learnQueue.length}`);
  const reveal = store.settings.answerFlow === 'reveal';
  view.querySelector('.answer').classList.toggle('hidden', !reveal);
  view.querySelector('.override').textContent = reveal ? 'Next card' : 'Show answer';
  view.querySelector('.read-question').addEventListener('click', () => readVisibleLearnSide());
  view.querySelector('.study-topic').addEventListener('click', () => openRelatedLesson(card));
  view.querySelector('.open-reference').addEventListener('click', showReference);
  view.querySelector('.override').addEventListener('click', flipOrAdvance);
  view.querySelector('.previous').addEventListener('click', () => goTo(learnIndex - 1));
  view.querySelector('.know').addEventListener('click', () => markLearn(card, true));
  view.querySelector('.practice').addEventListener('click', () => markLearn(card, false));
  $('#content').replaceChildren(view); setNote(card); updateLessonForCurrentCard(); updateBookForCurrentCard(); status(`Learn · ${learnQueue.length} selected cards`);
}
function overrideLearn(card) {
  const answer = $('#content .answer'); const button = $('#content .override');
  if (store.settings.answerFlow === 'reveal') { goTo(learnIndex + 1); return; }
  if (button.dataset.side !== 'answer') {
    // Flashcard mode: exchange the entire prompt for the answer. The answer is
    // not appended below the question, so the user sees only one side at once.
    $('#content .statement').textContent = card.answerText;
    $('#content .learn-card > .label').textContent = 'ANSWER';
    button.dataset.side = 'answer'; button.textContent = 'Next card';
    $('#content .card-status').textContent = 'Answer revealed. Choose OK or Attention, or use Next to keep moving.';
  } else { goTo(learnIndex + 1); }
}
function flipOrAdvance({ fromContinuous = false } = {}) {
  if (mode !== 'learn') return;
  if (!fromContinuous) stopReading();
  const card = currentCard();
  if (!card) return;
  const override = $('#content .override');
  if (store.settings.answerFlow === 'reveal' || override?.dataset.side === 'answer') goTo(learnIndex + 1);
  else overrideLearn(card);
}
function learnShowingAnswer() { return Boolean($('#content .override')?.dataset.side === 'answer'); }
function readVisibleLearnSide() {
  const card = currentCard(); if (!card) return;
  if (store.settings.answerFlow === 'reveal') return readParts([card.prompt, `Answer: ${card.answerText}`]);
  return readParts([learnShowingAnswer() ? `Answer: ${card.answerText}` : card.prompt]);
}
function goTo(index, { fromContinuous = false } = {}) { if (!fromContinuous) stopReading(); if (!learnQueue.length) return; learnIndex = (index + learnQueue.length) % learnQueue.length; renderLearn(); }
function markLearn(card, known) {
  const before = clone(progress(card.id));
  const after = { ...before, attempts: before.attempts + 1, priority: known ? 'known' : 'important', status: known ? 'correct' : 'important', dueAt: Date.now() + (known ? 10 : 1) * 86400000 };
  recordEvent(card.id, before, after); session.total += 1; if (known) session.correct += 1;
  status(known ? 'Marked known — it will appear less often.' : 'Marked for practice — it will appear more often.');
  goTo(learnIndex + 1);
}
function recordEvent(cardId, before, after) { store.progress[cardId] = after; store.history.push({ id: crypto.randomUUID(), at: Date.now(), sessionId: session.id, cardId, before, after }); store.history = store.history.slice(-3000); save(); }

function schedule(before, correct) {
  const next = { ...before, attempts: before.attempts + 1, priority: correct ? 'known' : 'important' };
  if (correct) { next.repetitions = before.repetitions + 1; next.ease = Math.max(1.3, before.ease + 0.08); next.interval = next.repetitions === 1 ? 2 : next.repetitions === 2 ? 7 : Math.round(Math.max(1, before.interval) * next.ease); next.status = 'correct'; }
  else { next.repetitions = 0; next.interval = 1; next.ease = Math.max(1.3, before.ease - 0.2); next.status = 'wrong'; }
  next.dueAt = Date.now() + next.interval * 86400000; return next;
}
function renderTestSetup() {
  test = null;
  const selected = activeCards();
  $('#content').innerHTML = `<article class="learn-card"><p class="label">TEST MODE</p><h2 class="statement">Build a focused practice test</h2><p class="quiet">Your study set is used as the pool: ${selected.length} cards. Multiple choice appears only in this mode.</p><label class="field">Questions <input id="test-count" type="number" min="5" max="100" value="20" /></label><button id="start-test" class="primary">Start test</button></article>`;
  $('#start-test').addEventListener('click', () => { const count = Math.min(Math.max(1, Number($('#test-count').value || 20)), selected.length); if (!count) return showEmpty('No cards are available for this test.'); test = { cards: shuffled(selected).slice(0, count), index: 0, correct: 0, answered: false }; session = makeSession(); renderTestQuestion(); });
  setNote(null); status('Test setup');
}
function renderTestQuestion() {
  const card = test.cards[test.index]; const view = buildCard('#test-template', card, `Question ${test.index + 1} of ${test.cards.length}`);
  const answers = view.querySelector('.answers');
  card.options.forEach((option, index) => { const button = document.createElement('button'); button.className = 'answer-choice'; button.innerHTML = `<b>${'ABCD'[index]}</b><span>${escapeHtml(option)}</span>`; button.addEventListener('click', () => answerTest(card, option, button)); answers.append(button); });
  view.querySelector('.read-question').addEventListener('click', () => readParts([card.prompt]));
  view.querySelector('.study-topic').addEventListener('click', () => openRelatedLesson(card));
  view.querySelector('.open-reference').addEventListener('click', showReference);
  $('#content').replaceChildren(view); setNote(card); updateLessonForCurrentCard(); updateBookForCurrentCard(); status(`Test · ${test.index + 1} of ${test.cards.length}`); updateGlobalNext();
}
function answerTest(card, selected, button) {
  if (test.answered) return; test.answered = true; const correct = selected === card.correct; const before = clone(progress(card.id)), after = schedule(before, correct); recordEvent(card.id, before, after); session.total += 1; if (correct) { session.correct += 1; test.correct += 1; }
  document.querySelectorAll('.answer-choice').forEach((choice) => { choice.disabled = true; if (choice.textContent.includes(card.correct)) choice.classList.add('correct'); }); if (!correct) button.classList.add('wrong');
  $('#content .answer').classList.remove('hidden'); $('#content .card-status').textContent = correct ? 'Correct — scheduled less frequently.' : 'Incorrect — returned to the practice queue.'; updateGlobalNext();
}
function nextTest() { if (test.index + 1 >= test.cards.length) return renderTestResult(); test.index += 1; test.answered = false; renderTestQuestion(); }
function renderTestResult() { const missed = test.cards.length - test.correct; $('#content').innerHTML = `<article class="learn-card"><p class="label">TEST RESULT</p><h2 class="statement">${test.correct} / ${test.cards.length}</h2><p class="quiet">${missed ? `${missed} card(s) will reappear sooner in your practice bundle.` : 'All cards were correct. Their next review is delayed.'}</p><button id="learn-errors" class="primary">Learn incorrect cards</button><button id="new-test">New test</button></article>`; $('#learn-errors').addEventListener('click', () => { bundle = 'wrong'; learnQueue = activeCards(); learnIndex = 0; mode = 'learn'; render(); }); $('#new-test').addEventListener('click', () => renderTestSetup()); test = null; setNote(null); status('Test complete'); updateGlobalNext(); }
function renderPalace() {
  const rooms = Object.entries(CHAPTERS).map(([domain, label], index) => {
    const roomCards = cards.filter((card) => card.domain === domain); const attention = roomCards.filter((card) => progress(card.id).priority === 'important' || progress(card.id).status === 'wrong').length; const known = roomCards.filter((card) => progress(card.id).priority === 'known' || progress(card.id).status === 'correct').length;
    return `<button class="palace-room" data-palace-domain="${escapeHtml(domain)}"><span class="room-number">${index + 1}</span><b>${escapeHtml(label)}</b><small>${roomCards.length} cards · ${attention} attention · ${known} known</small></button>`;
  }).join('');
  $('#content').innerHTML = `<article class="palace"><div class="card-top"><span>MEMORY PALACE</span><span>Visual study map</span></div><h2 class="statement">Place each CCNA chapter in a distinct room.</h2><p class="quiet">Choose a room to make it your active study set. Attention counts show where to revisit more often.</p><div class="palace-grid">${rooms}</div><button id="return-learn" class="primary">Return to Learn</button></article>`;
  document.querySelectorAll('[data-palace-domain]').forEach((button) => button.addEventListener('click', () => { selectedChapters = new Set([button.dataset.palaceDomain]); bundle = 'all'; learnQueue = activeCards(); learnIndex = 0; mode = 'learn'; render(); }));
  $('#return-learn').addEventListener('click', () => { mode = 'learn'; render(); }); setNote(null); status('Memory Palace');
}

function availableCourses() { return [window.CCNA1_COURSE, window.CCNA2_COURSE, window.CCNA3_COURSE].filter(Boolean); }
function activeCourse() { return availableCourses().find((course) => course.id === courseId) || availableCourses()[0]; }
function qaLibrary() {
  if (activeCourse()?.id === 'ccna1-itn') return window.CCNA1_QA_LIBRARY;
  if (activeCourse()?.id === 'ccna2-srwe') return window.CCNA2_QA_LIBRARY;
  if (activeCourse()?.id === 'ccna3-ensa') return window.CCNA3_QA_LIBRARY;
  return null;
}
function qaModuleId(module) { return Number(module?.id ?? module?.module?.id); }
function qaModuleTitle(module) { return module?.title || module?.module?.title || ''; }
function qaModuleCards(module) {
  if (!module) return [];
  if (module.cards) return module.cards;
  const moduleId = qaModuleId(module), moduleTitle = qaModuleTitle(module);
  return [
    ...(module.multipleChoice || []).map((item) => ({ ...item, courseId:qaLibrary().courseId, moduleId, moduleTitle, type:'knowledge', prompt:item.prompt })),
    ...(module.diagnostic || []).map((item) => ({ ...item, courseId:qaLibrary().courseId, moduleId, moduleTitle, type:'diagnosis', prompt:item.prompt })),
    ...(module.flashcards || []).map((item) => ({ ...item, courseId:qaLibrary().courseId, moduleId, moduleTitle, type:'flashcard' }))
  ];
}
function qaModuleCounts(module) {
  if (module?.counts?.knowledge != null) return module.counts;
  return { knowledge:module?.counts?.multipleChoice || 0, diagnosis:module?.counts?.diagnostic || 0, flashcards:module?.counts?.flashcards || 0 };
}
function qaMasteryRuleText() {
  const rule = qaLibrary()?.masteryRule;
  if (typeof rule === 'string') return rule;
  return `Alleen multiple choice en diagnose tellen als bewijs. Een item is beheerst na ${rule?.requiredCorrect || 2} correcte antwoorden met minstens ${Math.round((rule?.minimumAccuracy || .6) * 100)}% nauwkeurigheid; flashcards veranderen het lampje niet.`;
}
function qaModule(moduleId) { return qaLibrary()?.modules.find((module) => qaModuleId(module) === Number(moduleId)); }
function qaTestableCards(moduleId, sectionId = null) { return qaModuleCards(qaModule(moduleId)).filter((card) => (card.type === 'knowledge' || card.type === 'diagnosis') && (!sectionId || card.sectionId === sectionId)); }
function qaProgress(cardId) { return store.qaMastery?.[cardId] || { attempts:0, correct:0, streak:0 }; }
function qaCardScore(cardId) {
  const progress = qaProgress(cardId); if (!progress.attempts) return 0;
  const evidence = Math.min(1, progress.correct / 2), accuracy = progress.correct / progress.attempts;
  return evidence * (0.5 + 0.5 * accuracy);
}
function qaModuleScore(moduleId, sectionId = null) {
  const cards = qaTestableCards(moduleId, sectionId); return cards.length ? cards.reduce((sum, card) => sum + qaCardScore(card.id), 0) / cards.length : 0;
}
function qaMasteryLevel(score) { return score >= .85 ? 'green' : score >= .6 ? 'lime' : score >= .35 ? 'yellow' : score > 0 ? 'orange' : 'red'; }
function qaMasteryLamp(moduleId, sectionId = null) {
  const score = qaModuleScore(moduleId, sectionId), percent = Math.round(score * 100), level = qaMasteryLevel(score);
  return `<span class="mastery-lamp is-${level}" title="Bewezen kennis: ${percent}%" aria-label="Bewezen kennis ${percent}%"></span>`;
}
function normaliseCourseQuestion(question) {
  if (question.type === 'knowledge' || question.type === 'diagnosis') return { id:question.id, type:question.type, moduleId:question.moduleId, sectionId:question.sectionId, q:question.prompt, o:question.choices, a:question.correctIndex, e:question.explanation };
  return question;
}
function recordQaEvidence(question, correct) {
  if (!question.id || !qaLibrary()?.modules.some((module) => qaModuleCards(module).some((card) => card.id === question.id && card.type !== 'flashcard'))) return;
  store.qaMastery ||= {};
  const previous = qaProgress(question.id);
  store.qaMastery[question.id] = { attempts:previous.attempts + 1, correct:previous.correct + (correct ? 1 : 0), streak:correct ? previous.streak + 1 : 0, lastAt:Date.now(), lastCorrect:correct };
  save();
}
function courseModules() { return [...(activeCourse()?.modules || [])].sort((a, b) => a.id - b.id); }
function courseModule(id = courseModuleId) { return courseModules().find((item) => item.id === Number(id)) || courseModules()[0]; }
function courseCheckpoint(moduleId) {
  const groups = activeCourse()?.id === 'ccna1-itn' ? [
    { from:1, to:3, title:'Basic Network Connectivity & Communications' },
    { from:4, to:7, title:'Ethernet Concepts' },
    { from:8, to:10, title:'Communicating Between Networks' },
    { from:11, to:13, title:'IP Addressing' },
    { from:14, to:15, title:'Network Application Communications' },
    { from:16, to:17, title:'Building & Securing a Small Network' }
  ] : activeCourse()?.id === 'ccna3-ensa' ? [
    { from:1, to:2, title:'OSPF Concepts & Configuration' },
    { from:3, to:5, title:'Network Security & ACLs' },
    { from:6, to:8, title:'NAT, WAN & VPN' },
    { from:9, to:12, title:'Optimize, Manage, Design & Troubleshoot' },
    { from:13, to:14, title:'Virtualization & Automation' }
  ] : [
    { from:1, to:4, title:'Switching, VLANs & Inter-VLAN Routing' },
    { from:5, to:6, title:'Redundant Networks' },
    { from:7, to:9, title:'Available & Reliable Networks' },
    { from:10, to:13, title:'Layer 2 Security & WLANs' },
    { from:14, to:16, title:'Routing Concepts & Configuration' }
  ];
  return groups.find((checkpoint) => moduleId >= checkpoint.from && moduleId <= checkpoint.to);
}
function startCourseQuiz(title, questions, key) {
  courseFlash = null;
  courseQuiz = { title, key, questions: shuffled(questions.map(normaliseCourseQuestion)), index: 0, score: 0, answered: false, selected: null, saved: false };
  renderCourse();
}
function startCourseFlashcards(title, cards) {
  courseQuiz = null;
  courseFlash = { title, cards: shuffled(cards), index: 0, revealed: false };
  renderCourse();
}
function courseDiagram(module) {
  const nodes = module.diagram?.nodes || [];
  const links = module.diagram?.links || [];
  const width = 760, height = 245, margin = 72;
  const points = nodes.map((label, index) => ({ label, x: margin + index * ((width - margin * 2) / Math.max(1, nodes.length - 1)), y: 112 + (index % 2 ? 34 : -24) }));
  const edges = links.map(([from, to, label]) => {
    const a = points[from], b = points[to]; if (!a || !b) return '';
    const tx = (a.x + b.x) / 2, ty = (a.y + b.y) / 2 - 9;
    return `<g><line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" marker-end="url(#course-arrow)"/><text x="${tx}" y="${ty}">${escapeHtml(label)}</text></g>`;
  }).join('');
  const boxes = points.map((point, index) => `<g><rect x="${point.x - 55}" y="${point.y - 25}" width="110" height="50" rx="5" style="--node-accent:${module.color}"/><text class="node-index" x="${point.x}" y="${point.y - 3}">${index + 1}</text><text class="node-label" x="${point.x}" y="${point.y + 13}">${escapeHtml(point.label)}</text></g>`).join('');
  return `<svg class="course-diagram" viewBox="0 0 ${width} ${height}" role="img" aria-label="Origineel netwerkdiagram voor module ${module.id}: ${escapeHtml(module.title)}"><defs><marker id="course-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" /></marker></defs>${edges}${boxes}</svg>`;
}
function courseSectionHtml(section, open = false, moduleId = courseModuleId) {
  const points = section.points.map((point) => `<li>${escapeHtml(point)}</li>`).join('');
  const verify = (section.verify || []).map((item) => `<li><code>${escapeHtml(item)}</code></li>`).join('');
  const lamp = qaLibrary() ? qaMasteryLamp(moduleId, section.id) : '';
  return `<details class="course-section" data-course-section="${escapeHtml(section.id)}" ${open ? 'open' : ''}><summary>${lamp}<span>${escapeHtml(section.id)}</span><b>${escapeHtml(section.title)}</b></summary><div class="course-section-body"><h4>Uitleg</h4><ul>${points}</ul>${section.commands ? `<h4>Configuratie / diagnose</h4><pre><code>${escapeHtml(section.commands)}</code></pre>` : ''}${verify ? `<h4>Controleer</h4><ul class="verify-list">${verify}</ul>` : ''}</div></details>`;
}
function courseQuizHtml() {
  const quiz = courseQuiz;
  if (!quiz) return '';
  if (quiz.index >= quiz.questions.length) return `<section class="course-quiz"><p class="label">OEFENTOETS VOLTOOID</p><h2>${quiz.score} / ${quiz.questions.length}</h2><p>Dit zijn originele oefenvragen; gebruik de uitleg om zwakke leerblokken opnieuw te openen.</p><div class="course-actions"><button data-course-retry class="primary">OPNIEUW</button><button data-course-close-quiz>TERUG NAAR CURSUS</button></div></section>`;
  const question = quiz.questions[quiz.index];
  const options = question.o.map((option, index) => {
    const state = quiz.answered ? (index === question.a ? ' correct' : index === quiz.selected ? ' wrong' : '') : '';
    return `<button class="course-answer${state}" data-course-answer="${index}" ${quiz.answered ? 'disabled' : ''}><b>${String.fromCharCode(65 + index)}</b><span>${escapeHtml(option)}</span></button>`;
  }).join('');
  return `<section class="course-quiz"><div class="card-top"><span>${escapeHtml(quiz.title)}</span><span>${quiz.index + 1} / ${quiz.questions.length}</span></div><button class="course-quiz-back" data-course-close-quiz>← TERUG NAAR CURSUS</button><p class="label">ORIGINELE OEFENVRAAG</p><h2>${escapeHtml(question.q)}</h2><div class="course-answers">${options}</div>${quiz.answered ? `<div class="course-explanation"><b>${quiz.selected === question.a ? 'Correct' : 'Niet correct'}</b><p>${escapeHtml(question.e)}</p></div><button data-course-next class="primary">${quiz.index + 1 === quiz.questions.length ? 'RESULTAAT' : 'VOLGENDE VRAAG'} →</button>` : ''}</section>`;
}
function renderCourseFlashcards() {
  const session = courseFlash, card = session.cards[session.index];
  $('#content').innerHTML = `<article class="course-flash-session"><div class="card-top"><span>${escapeHtml(session.title)}</span><span>${session.index + 1} / ${session.cards.length}</span></div><button class="course-quiz-back" data-flash-close>← TERUG NAAR LIBRARY</button><section class="course-flash-card ${session.revealed ? 'is-revealed' : ''}"><p class="label">${session.revealed ? 'ANTWOORD' : `FLASHCARD · ${escapeHtml(card.sectionId)}`}</p><h2>${escapeHtml(session.revealed ? card.back : card.front)}</h2></section><p class="qa-study-note">Flashcards zijn herhaling. Alleen correcte multiple-choice- en diagnoseantwoorden kleuren de kennislampjes.</p><div class="course-actions"><button data-flash-prev ${session.index === 0 ? 'disabled' : ''}>← VORIGE</button><button data-flash-reveal class="primary">${session.revealed ? 'TOON VRAAG' : 'TOON ANTWOORD'}</button><button data-flash-next>${session.index + 1 === session.cards.length ? 'OPNIEUW SCHUDDEN' : 'VOLGENDE →'}</button></div></article>`;
  $('[data-flash-close]').addEventListener('click', () => { courseFlash = null; renderCourse(); });
  $('[data-flash-prev]').addEventListener('click', () => { courseFlash.index = Math.max(0, courseFlash.index - 1); courseFlash.revealed = false; renderCourseFlashcards(); });
  $('[data-flash-reveal]').addEventListener('click', () => { courseFlash.revealed = !courseFlash.revealed; renderCourseFlashcards(); });
  $('[data-flash-next]').addEventListener('click', () => {
    if (courseFlash.index + 1 >= courseFlash.cards.length) { courseFlash.cards = shuffled(courseFlash.cards); courseFlash.index = 0; }
    else courseFlash.index += 1;
    courseFlash.revealed = false; renderCourseFlashcards();
  });
  setNote(null); status(`${session.title} · flashcard ${session.index + 1}`);
}
function qaLibraryCardHtml(card) {
  if (card.type === 'flashcard') return `<details class="qa-card qa-flashcard"><summary><span>${escapeHtml(card.sectionId)}</span><b>${escapeHtml(card.front)}</b><small>FLASHCARD</small></summary><div class="qa-card-body"><p>${escapeHtml(card.back)}</p>${card.commands ? `<h4>Commando’s</h4><pre><code>${escapeHtml(card.commands)}</code></pre>` : ''}${card.verify?.length ? `<h4>Controle</h4><ul>${card.verify.map((item) => `<li><code>${escapeHtml(item)}</code></li>`).join('')}</ul>` : ''}<p class="qa-study-note">Bekijken is studeren; alleen correcte toetsantwoorden kleuren het mastery-lampje.</p></div></details>`;
  const progress = qaProgress(card.id), score = Math.round(qaCardScore(card.id) * 100);
  return `<details class="qa-card"><summary>${qaMasteryLamp(card.moduleId)}<span>${escapeHtml(card.sectionId)}</span><b>${escapeHtml(card.prompt)}</b><small>${card.type === 'diagnosis' ? 'DIAGNOSE' : 'MULTIPLE CHOICE'} · ${score}%</small></summary><div class="qa-card-body"><ol class="qa-library-options">${card.choices.map((choice, index) => `<li class="${index === card.correctIndex ? 'is-answer' : ''}">${String.fromCharCode(65 + index)} · ${escapeHtml(choice)}</li>`).join('')}</ol><div class="qa-library-answer"><b>Antwoord: ${escapeHtml(card.answer)}</b><p>${escapeHtml(card.explanation)}</p></div><small>${progress.correct} correct van ${progress.attempts} poging(en) · twee correcte antwoorden leveren volledig bewijs voor deze kaart.</small></div></details>`;
}
function renderQaLibrary() {
  const library = qaLibrary();
  if (!library) { courseView = 'course'; renderCourse(); return; }
  const modules = library.modules;
  const module = qaModule(courseModuleId) || modules[0], moduleId = qaModuleId(module), moduleTitle = qaModuleTitle(module), cards = qaModuleCards(module); courseModuleId = moduleId;
  const typed = cards.filter((card) => card.type === courseLibraryType);
  const query = courseSearch.trim().toLowerCase();
  const visible = typed.filter((card) => {
    if (query && !`${card.prompt || ''} ${card.front || ''} ${card.answer || ''} ${card.back || ''} ${card.sectionTitle} ${(card.tags || []).join(' ')}`.toLowerCase().includes(query)) return false;
    if (card.type === 'flashcard' || courseLibraryFilter === 'all') return true;
    const score = qaCardScore(card.id), attempts = qaProgress(card.id).attempts;
    if (courseLibraryFilter === 'unseen') return attempts === 0;
    if (courseLibraryFilter === 'practice') return attempts > 0 && score < .85;
    if (courseLibraryFilter === 'mastered') return score >= .85;
    return true;
  });
  const moduleNav = modules.map((item) => { const id = qaModuleId(item); return `<button class="course-module-link ${id === moduleId ? 'active' : ''}" data-qa-module="${id}">${qaMasteryLamp(id)}<span>${String(id).padStart(2,'0')}</span><b>${escapeHtml(qaModuleTitle(item))}</b><small>${Math.round(qaModuleScore(id) * 100)}%</small></button>`; }).join('');
  const typeCounts = qaModuleCounts(module), course = activeCourse();
  $('#content').innerHTML = `<article class="course-browser qa-library"><div class="course-view-switch"><button data-course-view="course">CURSUS</button><button data-course-view="library" class="active">V&A LIBRARY</button></div><header class="course-header"><div><p class="label">${escapeHtml(course.title)} · GECATALOGISEERDE LEERLIBRARY</p><h1>${qaMasteryLamp(moduleId)} Module ${moduleId} · ${escapeHtml(moduleTitle)}</h1><p>${escapeHtml(qaMasteryRuleText())}</p></div><label class="course-search"><span>Zoeken in deze module</span><input id="course-search" type="search" value="${escapeHtml(courseSearch)}" placeholder="begrip, storing, commando…" /></label></header><nav class="course-module-nav qa-module-nav" aria-label="${escapeHtml(course.title)} library modules">${moduleNav}</nav><section class="qa-toolbar"><div class="qa-type-switch"><button data-qa-type="knowledge" class="${courseLibraryType === 'knowledge' ? 'active' : ''}">MULTIPLE CHOICE <small>${typeCounts.knowledge}</small></button><button data-qa-type="diagnosis" class="${courseLibraryType === 'diagnosis' ? 'active' : ''}">DIAGNOSE <small>${typeCounts.diagnosis}</small></button><button data-qa-type="flashcard" class="${courseLibraryType === 'flashcard' ? 'active' : ''}">FLASHCARDS <small>${typeCounts.flashcards}</small></button></div><div class="qa-filter-switch" ${courseLibraryType === 'flashcard' ? 'hidden' : ''}><button data-qa-filter="all" class="${courseLibraryFilter === 'all' ? 'active' : ''}">ALLE</button><button data-qa-filter="unseen" class="${courseLibraryFilter === 'unseen' ? 'active' : ''}">ONGEZIEN</button><button data-qa-filter="practice" class="${courseLibraryFilter === 'practice' ? 'active' : ''}">OEFENEN</button><button data-qa-filter="mastered" class="${courseLibraryFilter === 'mastered' ? 'active' : ''}">BEHEERST</button></div><div class="course-actions"><button data-qa-test-knowledge class="primary">TEST MULTIPLE CHOICE</button><button data-qa-test-diagnosis>TEST DIAGNOSE</button><button data-qa-start-flashcards>START FLASHCARDS</button></div></section><section class="qa-list">${visible.length ? visible.map(qaLibraryCardHtml).join('') : '<div class="qa-empty">Geen kaarten voor dit filter.</div>'}</section></article>`;
  document.querySelectorAll('[data-course-view]').forEach((button) => button.addEventListener('click', () => { courseView = button.dataset.courseView; courseSearch = ''; renderCourse(); }));
  document.querySelectorAll('[data-qa-module]').forEach((button) => button.addEventListener('click', () => { courseModuleId = Number(button.dataset.qaModule); courseSearch = ''; renderQaLibrary(); $('.workspace').scrollTo({top:0,behavior:'smooth'}); }));
  document.querySelectorAll('[data-qa-type]').forEach((button) => button.addEventListener('click', () => { courseLibraryType = button.dataset.qaType; courseLibraryFilter = 'all'; renderQaLibrary(); }));
  document.querySelectorAll('[data-qa-filter]').forEach((button) => button.addEventListener('click', () => { courseLibraryFilter = button.dataset.qaFilter; renderQaLibrary(); }));
  $('#course-search').addEventListener('input', (event) => { courseSearch = event.target.value; renderQaLibrary(); requestAnimationFrame(() => { const input = $('#course-search'); input?.focus(); input?.setSelectionRange(courseSearch.length, courseSearch.length); }); });
  $('[data-qa-test-knowledge]').addEventListener('click', () => startCourseQuiz(`Module ${moduleId} · Multiple choice`, cards.filter((card) => card.type === 'knowledge'), `${library.courseId}-library:module-${moduleId}:knowledge`));
  $('[data-qa-test-diagnosis]').addEventListener('click', () => startCourseQuiz(`Module ${moduleId} · Diagnose`, cards.filter((card) => card.type === 'diagnosis'), `${library.courseId}-library:module-${moduleId}:diagnosis`));
  $('[data-qa-start-flashcards]').addEventListener('click', () => startCourseFlashcards(`Module ${moduleId} · Flashcards`, cards.filter((card) => card.type === 'flashcard')));
  setNote(null); status(`${course.title} Library · Module ${moduleId} · ${Math.round(qaModuleScore(moduleId) * 100)}% bewezen kennis`);
}
function renderCourse() {
  const course = activeCourse();
  const allModules = courseModules();
  if (!course || !allModules.length) { showEmpty('De cursusdata kon niet worden geladen.'); return; }
  document.body.classList.add('course-mode');
  if (courseFlash) { renderCourseFlashcards(); return; }
  if (courseQuiz) {
    if (courseQuiz.index >= courseQuiz.questions.length && !courseQuiz.saved) {
      store.courseProgress ||= {};
      const previous = store.courseProgress[courseQuiz.key] || { best: 0, total: courseQuiz.questions.length };
      store.courseProgress[courseQuiz.key] = { best: Math.max(previous.best || 0, courseQuiz.score), total: courseQuiz.questions.length, latest: courseQuiz.score, at: Date.now() };
      courseQuiz.saved = true; save();
    }
    $('#content').innerHTML = courseQuizHtml();
    document.querySelectorAll('[data-course-answer]').forEach((button) => button.addEventListener('click', () => {
      if (courseQuiz.answered) return;
      courseQuiz.selected = Number(button.dataset.courseAnswer); courseQuiz.answered = true;
      const question = courseQuiz.questions[courseQuiz.index], correct = courseQuiz.selected === question.a;
      if (correct) courseQuiz.score += 1;
      recordQaEvidence(question, correct);
      renderCourse();
    }));
    $('[data-course-next]')?.addEventListener('click', () => { courseQuiz.index += 1; courseQuiz.answered = false; courseQuiz.selected = null; renderCourse(); });
    $('[data-course-retry]')?.addEventListener('click', () => { courseQuiz.index = 0; courseQuiz.score = 0; courseQuiz.answered = false; courseQuiz.selected = null; courseQuiz.saved = false; courseQuiz.questions = shuffled(courseQuiz.questions); renderCourse(); });
    $('[data-course-close-quiz]')?.addEventListener('click', () => { courseQuiz = null; renderCourse(); });
    setNote(null); status(`${course.title} · oefentoets`); return;
  }
  if (courseView === 'library' && qaLibrary()) { renderQaLibrary(); return; }
  const query = courseSearch.trim().toLowerCase();
  const matches = query ? allModules.filter((module) => `${module.id} ${module.title} ${module.summary} ${module.sections.map((section) => `${section.id} ${section.title} ${section.points.join(' ')} ${section.commands || ''} ${(section.verify || []).join(' ')}`).join(' ')}`.toLowerCase().includes(query)) : allModules;
  if (query && !matches.some((module) => module.id === courseModuleId)) courseModuleId = matches[0]?.id || courseModuleId;
  const module = courseModule();
  const checkpoint = courseCheckpoint(module.id);
  const moduleNav = allModules.map((item) => { const result = store.courseProgress?.[`${course.id}:module-${item.id}`], lamp = qaLibrary() ? qaMasteryLamp(item.id) : ''; return `<button class="course-module-link ${item.id === module.id ? 'active' : ''} ${query && !matches.includes(item) ? 'search-hidden' : ''}" data-course-module="${item.id}">${lamp}<span>${String(item.id).padStart(2, '0')}</span><b>${escapeHtml(item.title)}</b>${qaLibrary() ? `<small>${Math.round(qaModuleScore(item.id) * 100)}%</small>` : result ? `<small>${result.best}/${result.total}</small>` : ''}</button>`; }).join('');
  const sections = module.sections.map((section, index) => courseSectionHtml(section, index === 0)).join('');
  const pitfalls = module.pitfalls.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
  const labSteps = module.lab.success.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
  const courseOptions = availableCourses().map((item) => `<option value="${escapeHtml(item.id)}" ${item.id === course.id ? 'selected' : ''}>${escapeHtml(item.title)}</option>`).join('');
  const viewSwitch = qaLibrary() ? '<div class="course-view-switch"><button data-course-view="course" class="active">CURSUS</button><button data-course-view="library">V&A LIBRARY</button></div>' : '';
  const assessedCount = qaLibrary() ? qaLibrary().modules.flatMap((item) => qaModuleCards(item).filter((card) => card.type !== 'flashcard')).length : allModules.flatMap((item) => item.questions).length;
  $('#content').innerHTML = `<article class="course-browser">${viewSwitch}<header class="course-header"><div><p class="label">VOLLEDIGE CURSUS · INTRODUCTIES OVERGESLAGEN</p><h1>${escapeHtml(course.title)}</h1><p>${escapeHtml(course.note)}</p></div><div><label class="course-search"><span>Cursus</span><select id="course-catalog">${courseOptions}</select></label><label class="course-search"><span>Zoeken in alle modules</span><input id="course-search" type="search" value="${escapeHtml(courseSearch)}" placeholder="IP, Ethernet, VLAN, show command…" /></label></div></header><nav class="course-module-nav" aria-label="${escapeHtml(course.title)} modules">${moduleNav}</nav><section class="course-module-hero" style="--module-accent:${module.color}"><div><p class="label">MODULE ${module.id}</p><h2>${qaLibrary() ? qaMasteryLamp(module.id) : ''}${escapeHtml(module.title)}</h2><p>${escapeHtml(module.summary)}</p><div class="course-actions"><button data-course-module-quiz class="primary">MODULETOETS · ${qaLibrary() ? qaModuleCounts(qaModule(module.id)).knowledge : module.questions.length} VRAGEN</button><button data-course-checkpoint-quiz>CHECKPOINT · ${escapeHtml(checkpoint.title)}</button><button data-course-final-quiz>GEMENGDE EINDTOETS · ${Math.min(32, assessedCount)} VRAGEN</button>${qaLibrary() ? '<button data-open-qa-library>OPEN V&A LIBRARY</button>' : ''}</div></div>${courseDiagram(module)}</section><div class="course-reading"><section><h3>Leerblokken</h3>${sections}</section><aside><section class="course-side-card"><p class="label">PACKET TRACER LAB</p><h3>${escapeHtml(module.lab.title)}</h3><p>${escapeHtml(module.lab.task)}</p><h4>Geslaagd wanneer</h4><ul>${labSteps}</ul></section><section class="course-side-card warning"><p class="label">VEELGEMAAKTE FOUTEN</p><ul>${pitfalls}</ul></section><section class="course-side-card"><p class="label">DEKKING</p><p>${module.sections.length} inhoudelijke leerblokken · ${module.questions.length} oefenvragen · 1 origineel netwerkdiagram · commando’s en verificatie per onderwerp.</p></section></aside></div></article>`;
  $('#course-catalog').addEventListener('change', (event) => { courseId = event.target.value; courseModuleId = 1; courseSearch = ''; courseQuiz = null; courseFlash = null; courseView = 'course'; renderCourse(); });
  document.querySelectorAll('[data-course-view]').forEach((button) => button.addEventListener('click', () => { courseView = button.dataset.courseView; courseSearch = ''; renderCourse(); }));
  $('[data-open-qa-library]')?.addEventListener('click', () => { courseView = 'library'; courseSearch = ''; renderCourse(); });
  document.querySelectorAll('[data-course-module]').forEach((button) => button.addEventListener('click', () => { courseModuleId = Number(button.dataset.courseModule); courseSearch = ''; renderCourse(); $('.workspace').scrollTo({top:0,behavior:'smooth'}); }));
  $('#course-search').addEventListener('input', (event) => { courseSearch = event.target.value; renderCourse(); requestAnimationFrame(() => { const input = $('#course-search'); input?.focus(); input?.setSelectionRange(courseSearch.length, courseSearch.length); }); });
  $('[data-course-module-quiz]').addEventListener('click', () => { const questions = qaLibrary() ? qaModuleCards(qaModule(module.id)).filter((card) => card.type === 'knowledge') : module.questions; startCourseQuiz(`Module ${module.id} · ${module.title}`, questions, `${course.id}:module-${module.id}`); });
  $('[data-course-checkpoint-quiz]').addEventListener('click', () => { const questions = qaLibrary() ? allModules.filter((item) => item.id >= checkpoint.from && item.id <= checkpoint.to).flatMap((item) => qaTestableCards(item.id)) : allModules.filter((item) => item.id >= checkpoint.from && item.id <= checkpoint.to).flatMap((item) => item.questions); startCourseQuiz(`Checkpoint · ${checkpoint.title}`, shuffled(questions).slice(0, Math.min(12, questions.length)), `${course.id}:checkpoint-${checkpoint.from}-${checkpoint.to}`); });
  $('[data-course-final-quiz]').addEventListener('click', () => { const questions = qaLibrary() ? allModules.flatMap((item) => qaTestableCards(item.id)) : allModules.flatMap((item) => item.questions); startCourseQuiz(`${course.title} · gemengde eindtoets`, shuffled(questions).slice(0,32), `${course.id}:final-32`); });
  setNote(null); status(`${course.title} · Module ${module.id} van ${allModules.length}`);
}

function cliProfileLabel(profile) { return ({ cisco: 'Cisco IOS', powershell: 'PowerShell', cmd: 'Windows CMD' })[profile]; }
function cliTopics() { return window.CLI_TRAINER.TOPICS.filter((topic) => topic.profile === cliState.profile); }
function cliEligibleExercises() {
  return window.CLI_TRAINER.EXERCISES.filter((exercise) => exercise.profile === cliState.profile && cliState.topics.has(exercise.topic));
}
function resetCliSession(exercise = cliState.exercise) {
  cliState.session = window.CLI_TRAINER.createSession(cliState.profile, exercise?.startMode);
  cliState.lines = [{ type: 'system', text: cliState.profile === 'cisco' ? 'Cisco IOS Software, Virtual Training Image\nType ? for context-sensitive help. No configuration leaves this simulator.' : `${cliProfileLabel(cliState.profile)} virtual lab — commands never touch this computer.` }];
  cliState.historyIndex = cliState.history.length;
}
function chooseCliExercise({ first = false } = {}) {
  const eligible = cliEligibleExercises();
  if (!eligible.length) { cliState.exercise = null; resetCliSession(null); return; }
  cliState.repeats = cliState.repeats.map((item) => ({ ...item, remaining: Math.max(0, item.remaining - (first ? 0 : 1)) }));
  const repeat = cliState.repeats.find((item) => item.remaining === 0 && eligible.some((exercise) => exercise.id === item.id));
  const due = eligible.filter((exercise) => (store.cliTrainer?.[exercise.id]?.dueAt || Infinity) <= Date.now());
  const pool = repeat ? eligible.filter((exercise) => exercise.id === repeat.id) : (due.length ? due : eligible.filter((exercise) => exercise.id !== cliState.exercise?.id));
  cliState.exercise = pool[Math.floor(Math.random() * pool.length)] || eligible[0];
  if (repeat) cliState.repeats = cliState.repeats.filter((item) => item !== repeat);
  cliState.feedback = null; resetCliSession();
}
function cliTopicHtml() {
  const groups = {};
  cliTopics().forEach((topic) => { (groups[topic.course] ||= []).push(topic); });
  return Object.entries(groups).map(([course, topics]) => `<fieldset class="cli-topic-group"><legend>${escapeHtml(course)}</legend>${topics.map((topic) => `<label><input type="checkbox" data-cli-topic="${topic.id}" ${cliState.topics.has(topic.id) ? 'checked' : ''} /><span>${escapeHtml(topic.label)}</span></label>`).join('')}</fieldset>`).join('');
}
function cliTerminalHtml() {
  return cliState.lines.map((line) => line.type === 'command'
    ? `<div class="terminal-command"><span>${escapeHtml(line.prompt)}</span>${escapeHtml(line.text)}</div>`
    : `<pre class="terminal-${line.type}">${escapeHtml(line.text)}</pre>`).join('');
}
function cliFeedbackHtml() {
  if (!cliState.feedback) return '<div class="cli-coach-idle"><span>COACH</span><p>Typ het commando zoals op een echte prompt. Afkortingen tellen mee wanneer ze uniek zijn.</p><kbd>↑ ↓</kbd> history <kbd>Tab</kbd> aanvullen <kbd>?</kbd> hulp</div>';
  const feedback = cliState.feedback;
  return `<div class="cli-feedback ${feedback.ok ? 'is-correct' : 'is-wrong'}"><span>${feedback.ok ? 'CORRECT' : 'NOG NIET'}</span><h3>${feedback.ok ? 'Juist uitgevoerd' : escapeHtml(feedback.errorLabel || 'Controleer de syntaxis')}</h3><p>${escapeHtml(feedback.explanation || '')}</p>${feedback.ok ? `<button data-cli-next class="primary">VOLGENDE OPDRACHT →</button>` : `<div class="cli-answer"><small>VOORBEELD</small><code>${escapeHtml(cliState.exercise?.answer || '')}</code></div><button data-cli-repeat>↻ SNELLER HERHALEN</button><button data-cli-reset>OPNIEUW PROBEREN</button>`}</div>`;
}
function persistCliResult(exercise, correct) {
  store.cliTrainer ||= {}; const previous = store.cliTrainer[exercise.id] || { attempts: 0, correct: 0, interval: 0 };
  const interval = correct ? Math.min(30, Math.max(1, (previous.interval || 1) * 2)) : 0;
  store.cliTrainer[exercise.id] = { attempts: previous.attempts + 1, correct: previous.correct + (correct ? 1 : 0), interval, dueAt: Date.now() + (correct ? interval * 86400000 : 120000), lastAt: Date.now() };
  save();
}
function normaliseCliArgument(value) {
  return String(value).toLowerCase().replace(/\s+/g, '').replace(/^g(?:i(?:g(?:a(?:b(?:i(?:t(?:e(?:t(?:h(?:e(?:r(?:n(?:e(?:t)?)?)?)?)?)?)?)?)?)?)?)?)?)(?=\d)/, 'gigabitethernet').replace(/^f(?:a(?:s(?:t(?:e(?:t(?:h(?:e(?:r(?:n(?:e(?:t)?)?)?)?)?)?)?)?)?)?)(?=\d)/, 'fastethernet');
}
function runCliCommand(raw) {
  const line = raw.trim(); if (!line) return;
  const beforePrompt = window.CLI_TRAINER.prompt(cliState.session); cliState.history.push(line); cliState.historyIndex = cliState.history.length;
  const result = window.CLI_TRAINER.execute(cliState.session, line);
  cliState.lines.push({ type: 'command', prompt: beforePrompt, text: line }); if (result.output) cliState.lines.push({ type: result.ok ? 'output' : 'error', text: result.output });
  const exercise = cliState.exercise;
  const expected = exercise ? window.CLI_TRAINER.execute(window.CLI_TRAINER.createSession(exercise.profile, exercise.startMode), exercise.answer) : null;
  const sameArgs = JSON.stringify((result.args || []).map(normaliseCliArgument)) === JSON.stringify((expected?.args || []).map(normaliseCliArgument));
  const solved = result.ok && exercise?.accept.includes(result.commandId) && sameArgs;
  if (solved) { cliState.feedback = { ok: true, explanation: exercise.explanation }; persistCliResult(exercise, true); }
  else if (!result.ok) { cliState.feedback = { ok: false, errorLabel: ({ ambiguous: 'Afkorting is niet uniek', incomplete: 'Commando is onvolledig', 'not-found': 'Commando niet gevonden', invalid: 'Ongeldige invoer' })[result.error], explanation: result.explanation || exercise?.explanation }; persistCliResult(exercise, false); }
  else if (!['help','empty'].includes(result.commandId)) cliState.feedback = { ok: false, errorLabel: 'Geldig commando, andere opdracht', explanation: `Dit commando is geldig, maar voert de huidige opdracht niet uit. ${exercise?.explanation || ''}` };
  renderCli();
}
function bindCliEvents() {
  document.querySelectorAll('[data-cli-profile]').forEach((button) => button.addEventListener('click', () => { cliState.profile = button.dataset.cliProfile; cliState.topics = new Set(window.CLI_TRAINER.TOPICS.filter((topic) => topic.profile === cliState.profile).map((topic) => topic.id)); cliState.exercise = null; chooseCliExercise({ first: true }); renderCli(); }));
  document.querySelectorAll('[data-cli-topic]').forEach((input) => input.addEventListener('change', () => { input.checked ? cliState.topics.add(input.dataset.cliTopic) : cliState.topics.delete(input.dataset.cliTopic); cliState.exercise = null; renderCli(); }));
  $('[data-cli-toggle-all]')?.addEventListener('click', () => { const topics = cliTopics(); cliState.topics = cliState.topics.size === topics.length ? new Set() : new Set(topics.map((topic) => topic.id)); cliState.exercise = null; renderCli(); });
  $('[data-cli-clear]')?.addEventListener('click', () => { resetCliSession(); renderCli(); });
  $('[data-cli-next]')?.addEventListener('click', () => { chooseCliExercise(); renderCli(); });
  $('[data-cli-reset]')?.addEventListener('click', () => { resetCliSession(); cliState.feedback = null; renderCli(); });
  $('[data-cli-repeat]')?.addEventListener('click', () => { const id = cliState.exercise?.id; if (id && !cliState.repeats.some((item) => item.id === id)) cliState.repeats.push({ id, remaining: 2 }); if (id) { store.cliTrainer ||= {}; store.cliTrainer[id] = { ...(store.cliTrainer[id] || {}), dueAt: Date.now() + 120000 }; save(); } chooseCliExercise(); renderCli(); });
  const input = $('[data-cli-input]'); input?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { event.preventDefault(); runCliCommand(input.value); }
    else if (event.key === 'Tab') { event.preventDefault(); input.value = window.CLI_TRAINER.complete(cliState.session, input.value); }
    else if (event.key === 'ArrowUp' || event.key === 'ArrowDown') { event.preventDefault(); cliState.historyIndex = Math.max(0, Math.min(cliState.history.length, cliState.historyIndex + (event.key === 'ArrowUp' ? -1 : 1))); input.value = cliState.history[cliState.historyIndex] || ''; requestAnimationFrame(() => input.setSelectionRange(input.value.length, input.value.length)); }
  });
}
function renderCli() {
  document.body.classList.add('cli-mode');
  if (!cliState.session && !cliState.topics.size) cliTopics().forEach((topic) => cliState.topics.add(topic.id));
  if (!cliState.exercise || cliState.exercise.profile !== cliState.profile || !cliState.topics.has(cliState.exercise.topic)) chooseCliExercise({ first: true });
  const exercise = cliState.exercise;
  $('#content').innerHTML = `<article class="cli-lab"><header class="cli-header"><div><p class="label">VEILIGE COMMAND TRAINER</p><h1>CLI Practice Lab</h1><p>Realistische invoer en feedback, zonder commando’s op je computer of netwerk uit te voeren.</p></div><div class="cli-profile-switch" role="tablist">${['cisco','powershell','cmd'].map((profile) => `<button data-cli-profile="${profile}" class="${cliState.profile === profile ? 'active' : ''}">${cliProfileLabel(profile)}</button>`).join('')}</div></header><div class="cli-grid"><aside class="cli-syllabus"><div class="cli-side-title"><span>LEERBLOKKEN</span><button data-cli-toggle-all>ALL / NONE</button></div>${cliTopicHtml()}<p>${cliEligibleExercises().length} opdrachten actief</p></aside><section class="cli-practice"><div class="cli-mission"><div><span>OPDRACHT · ${escapeHtml(cliProfileLabel(cliState.profile))}</span><h2>${escapeHtml(exercise?.prompt || 'Selecteer minstens één leerblok.')}</h2></div><code>${escapeHtml(window.CLI_TRAINER.prompt(cliState.session))}</code></div><div class="cli-terminal"><div class="terminal-toolbar"><span></span><span></span><span></span><b>${escapeHtml(cliProfileLabel(cliState.profile))} · VIRTUAL / NO SIDE EFFECTS</b><button data-cli-clear>CLEAR</button></div><div class="terminal-output" aria-live="polite">${cliTerminalHtml()}</div><label class="terminal-input-row"><span>${escapeHtml(window.CLI_TRAINER.prompt(cliState.session))}</span><input data-cli-input autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="CLI command" /></label></div></section><aside class="cli-coach">${cliFeedbackHtml()}<section class="cli-safety"><b>SIMULATIEGRENS</b><p>Geen enkel commando wordt doorgegeven aan IOS, PowerShell, CMD, het bestandssysteem of het netwerk.</p></section></aside></div></article>`;
  bindCliEvents(); status(`CLI Lab · ${cliProfileLabel(cliState.profile)} · ${cliEligibleExercises().length} opdrachten`); updateGlobalNext(); requestAnimationFrame(() => $('[data-cli-input]')?.focus());
}

function diagramCatalog() { return window.DIAGRAM_TRAINER?.DIAGRAMS || []; }
function activeDiagram() { return diagramCatalog().find((diagram) => diagram.id === diagramState.diagramId) || diagramCatalog()[0]; }
function diagramPdf(diagram) { return diagramPdfs.find((pdf) => pdf.name.toLowerCase() === diagram.file.toLowerCase()); }
function diagramPromptProgress(diagramId, promptId) { return store.diagramProgress?.[diagramId]?.[promptId] || { attempts: 0, correct: 0 }; }
function diagramScore(diagram) {
  if (!diagram?.prompts?.length) return 0;
  return diagram.prompts.reduce((sum, prompt) => sum + Math.min(2, diagramPromptProgress(diagram.id, prompt.id).correct || 0), 0) / (diagram.prompts.length * 2);
}
function diagramLamp(diagram) {
  const score = diagramScore(diagram), state = score >= 1 ? 'green' : score >= .7 ? 'lime' : score >= .4 ? 'yellow' : score > 0 ? 'orange' : 'red';
  return `<span class="mastery-lamp is-${state}" aria-label="${Math.round(score * 100)} procent diagrambeheersing"></span>`;
}
function diagramNavigation() {
  const groups = {};
  diagramCatalog().forEach((diagram) => { (groups[diagram.category] ||= []).push(diagram); });
  return Object.entries(groups).map(([category, diagrams]) => `<section class="diagram-nav-group"><h3>${escapeHtml(category)}</h3>${diagrams.map((diagram) => `<button data-diagram-id="${escapeHtml(diagram.id)}" class="diagram-nav-item ${diagram.id === activeDiagram()?.id ? 'active' : ''}">${diagramLamp(diagram)}<span><b>${escapeHtml(diagram.title)}</b><small>${Math.round(diagramScore(diagram) * 100)}% · ${diagram.prompts.length} checks</small></span></button>`).join('')}</section>`).join('');
}
function renderDiagramTrainer(diagram) {
  const prompt = diagram.prompts[diagramState.promptIndex % diagram.prompts.length], source = diagramPdf(diagram);
  const pageButtons = Array.from({ length: diagram.pages }, (_, index) => `<button data-diagram-page="${index + 1}" class="${diagramState.page === index + 1 ? 'active' : ''}">P${index + 1}</button>`).join('');
  const visual = source?.pageUrls?.[diagramState.page - 1]
    ? `<img src="${escapeHtml(source.pageUrls[diagramState.page - 1])}" alt="${escapeHtml(diagram.title)} - pagina ${diagramState.page}" />`
    : source ? `<iframe title="${escapeHtml(diagram.title)} referentiediagram" src="${escapeHtml(source.url)}#page=${diagramState.page}&toolbar=0&navpanes=0"></iframe>` : '';
  const pdf = source
    ? `<div class="diagram-pdf ${diagramState.pdfVisible ? '' : 'is-hidden'}">${visual}<div class="diagram-memory-cover"><span>DIAGRAM VERBORGEN</span><p>Teken of benoem het uit je hoofd en toon daarna de referentie.</p></div></div>`
    : '<div class="diagram-missing"><b>PDF ontbreekt</b><p>Importeer de lokale diagram-PDF’s om de visuele referentie te tonen. De recall-vragen blijven bruikbaar.</p></div>';
  return `<div class="diagram-trainer-grid"><section class="diagram-reference"><div class="diagram-reference-bar"><div><b>${escapeHtml(diagram.title)}</b><small>${escapeHtml(diagram.summary)}</small></div><div class="diagram-page-switch">${pageButtons}</div><button data-diagram-toggle-pdf>${diagramState.pdfVisible ? 'VERBERG DIAGRAM' : 'TOON DIAGRAM'}</button></div>${pdf}</section><section class="diagram-recall"><div class="card-top"><span>TRAINER · ACTIVE RECALL</span><span>${diagramState.promptIndex + 1} / ${diagram.prompts.length}</span></div><p class="label">ZONDER KIJKEN</p><h2>${escapeHtml(prompt.question)}</h2>${diagramState.revealed ? `<div class="diagram-recall-answer"><span>ANTWOORD</span><strong>${escapeHtml(prompt.answer)}</strong></div><div class="diagram-recall-actions"><button data-diagram-repeat>NOG OEFENEN</button><button data-diagram-knew class="primary">IK WIST HET →</button></div>` : '<p class="diagram-recall-hint">Zeg het antwoord hardop of teken de velden/volgorde. Controleer pas daarna.</p><button data-diagram-reveal class="primary">TOON ANTWOORD</button>'}</section></div>`;
}
function diagramTestPool(scope) {
  const diagrams = scope === 'all' ? diagramCatalog() : [activeDiagram()];
  return diagrams.flatMap((diagram) => diagram.prompts.map((prompt) => ({ ...prompt, diagramId: diagram.id, diagramTitle: diagram.title, options: shuffled(prompt.options) })));
}
function startDiagramTest(scope, requested = 20) {
  const pool = shuffled(diagramTestPool(scope)), count = Math.min(Number(requested) || 20, pool.length);
  diagramState.test = { scope, questions: pool.slice(0, count), index: 0, score: 0, answered: false, selected: null, saved: false };
  renderDiagram();
}
function recordDiagramAnswer(question, correct) {
  store.diagramProgress ||= {}; store.diagramProgress[question.diagramId] ||= {};
  const previous = diagramPromptProgress(question.diagramId, question.id);
  store.diagramProgress[question.diagramId][question.id] = { attempts: previous.attempts + 1, correct: previous.correct + (correct ? 1 : 0), lastCorrect: correct, at: Date.now() };
  save();
}
function renderDiagramTester(diagram) {
  const testState = diagramState.test;
  if (!testState) {
    const total = window.DIAGRAM_TRAINER?.questionCount || 0;
    return `<section class="diagram-test-setup"><p class="label">DIAGRAM TESTER</p><h2>Test wat je zonder het diagram kunt reconstrueren.</h2><p>Objectieve antwoorden bepalen de rode-tot-groene beheersingslampjes. De gewone STUDY- en TEST-resultaten blijven onaangeraakt.</p><div class="diagram-test-options"><button data-diagram-start="current" class="primary">TEST ${escapeHtml(diagram.title.toUpperCase())} · ${diagram.prompts.length}</button><button data-diagram-start="all">GEMENGDE TEST · 20 VAN ${total}</button><button data-diagram-start="all-full">VOLLEDIGE TEST · ${total}</button></div></section>`;
  }
  if (testState.index >= testState.questions.length) {
    return `<section class="diagram-test-setup diagram-test-result"><p class="label">TEST VOLTOOID</p><h2>${testState.score} / ${testState.questions.length}</h2><p>${testState.score === testState.questions.length ? 'Alles correct. Herhaal later om de groene beheersing te bewijzen.' : 'Foute items blijven lager in beheersing en komen bij een nieuwe gemengde test opnieuw in aanmerking.'}</p><div class="diagram-test-options"><button data-diagram-retest class="primary">OPNIEUW</button><button data-diagram-close-test>TERUG NAAR TRAINER</button></div></section>`;
  }
  const question = testState.questions[testState.index];
  const options = question.options.map((option, index) => {
    const isCorrect = option === question.answer, isSelected = index === testState.selected;
    const state = testState.answered ? (isCorrect ? ' correct' : isSelected ? ' wrong' : '') : '';
    return `<button data-diagram-answer="${index}" class="diagram-test-answer${state}" ${testState.answered ? 'disabled' : ''}><b>${String.fromCharCode(65 + index)}</b><span>${escapeHtml(option)}</span></button>`;
  }).join('');
  return `<section class="diagram-test-card"><div class="card-top"><span>${escapeHtml(question.diagramTitle)} · DIAGRAM TEST</span><span>${testState.index + 1} / ${testState.questions.length}</span></div><p class="label">RECONSTRUEER UIT JE HOOFD</p><h2>${escapeHtml(question.question)}</h2><div class="diagram-test-answers">${options}</div>${testState.answered ? `<div class="diagram-test-feedback"><b>${question.options[testState.selected] === question.answer ? 'Correct' : 'Niet correct'}</b><p>${escapeHtml(question.answer)}</p></div><button data-diagram-test-next class="primary">${testState.index + 1 === testState.questions.length ? 'RESULTAAT' : 'VOLGENDE VRAAG'} →</button>` : ''}</section>`;
}
function bindDiagramEvents(diagram) {
  document.querySelectorAll('[data-diagram-view]').forEach((button) => button.addEventListener('click', () => { diagramState.view = button.dataset.diagramView; diagramState.test = null; renderDiagram(); }));
  document.querySelectorAll('[data-diagram-id]').forEach((button) => button.addEventListener('click', () => { diagramState.diagramId = button.dataset.diagramId; diagramState.page = 1; diagramState.promptIndex = 0; diagramState.revealed = false; diagramState.test = null; renderDiagram(); }));
  document.querySelectorAll('[data-diagram-page]').forEach((button) => button.addEventListener('click', () => { diagramState.page = Number(button.dataset.diagramPage); renderDiagram(); }));
  $('[data-diagram-toggle-pdf]')?.addEventListener('click', () => { diagramState.pdfVisible = !diagramState.pdfVisible; renderDiagram(); });
  $('[data-diagram-reveal]')?.addEventListener('click', () => { diagramState.revealed = true; renderDiagram(); });
  const nextTrainerPrompt = (repeat) => { if (repeat) { store.diagramTrainer ||= {}; store.diagramTrainer[diagram.prompts[diagramState.promptIndex].id] = { dueAt: Date.now() + 120000 }; diagramState.revealed = false; diagramState.pdfVisible = false; save(); renderDiagram(); return; } diagramState.promptIndex = (diagramState.promptIndex + 1) % diagram.prompts.length; diagramState.revealed = false; renderDiagram(); };
  $('[data-diagram-repeat]')?.addEventListener('click', () => nextTrainerPrompt(true));
  $('[data-diagram-knew]')?.addEventListener('click', () => nextTrainerPrompt(false));
  document.querySelectorAll('[data-diagram-start]').forEach((button) => button.addEventListener('click', () => startDiagramTest(button.dataset.diagramStart === 'current' ? 'current' : 'all', button.dataset.diagramStart === 'all-full' ? window.DIAGRAM_TRAINER.questionCount : button.dataset.diagramStart === 'current' ? diagram.prompts.length : 20)));
  document.querySelectorAll('[data-diagram-answer]').forEach((button) => button.addEventListener('click', () => {
    if (!diagramState.test || diagramState.test.answered) return;
    const question = diagramState.test.questions[diagramState.test.index]; diagramState.test.selected = Number(button.dataset.diagramAnswer); diagramState.test.answered = true;
    const correct = question.options[diagramState.test.selected] === question.answer; if (correct) diagramState.test.score += 1; recordDiagramAnswer(question, correct); renderDiagram();
  }));
  $('[data-diagram-test-next]')?.addEventListener('click', () => { diagramState.test.index += 1; diagramState.test.answered = false; diagramState.test.selected = null; renderDiagram(); });
  $('[data-diagram-retest]')?.addEventListener('click', () => startDiagramTest(diagramState.test.scope, diagramState.test.questions.length));
  $('[data-diagram-close-test]')?.addEventListener('click', () => { diagramState.test = null; diagramState.view = 'trainer'; renderDiagram(); });
  $('[data-diagram-import]')?.addEventListener('click', async () => { const result = await window.studio.importDiagramPdfs(); if (!result.canceled) diagramPdfs = result.diagrams || await window.studio.loadDiagramPdfs(); renderDiagram(); });
}
function renderDiagram() {
  const diagram = activeDiagram();
  if (!diagram) { showEmpty('De diagramtrainer-data kon niet worden geladen.'); return; }
  document.body.classList.add('diagram-mode');
  $('#content').innerHTML = `<article class="diagram-lab"><header class="diagram-header"><div><p class="label">APART LEERONDERDEEL</p><h1>Diagram Trainer</h1><p>Leer headers, flows, ranges, poorten en pinouts visueel uit het hoofd.</p></div><div class="diagram-view-switch"><button data-diagram-view="trainer" class="${diagramState.view === 'trainer' ? 'active' : ''}">TRAINER</button><button data-diagram-view="tester" class="${diagramState.view === 'tester' ? 'active' : ''}">TESTER</button><button data-diagram-import>PDF’S IMPORTEREN</button></div></header><div class="diagram-layout"><aside class="diagram-navigation">${diagramNavigation()}<p>${diagramPdfs.length} / ${diagramCatalog().length} lokale PDF’s gekoppeld</p></aside><main class="diagram-stage">${diagramState.view === 'tester' ? renderDiagramTester(diagram) : renderDiagramTrainer(diagram)}</main></div></article>`;
  bindDiagramEvents(diagram); status(`Diagrammen · ${diagramState.view === 'tester' ? 'Tester' : 'Trainer'} · ${diagram.title}`); updateGlobalNext();
}

function wait(ms, token) {
  return new Promise((resolve) => {
    const started = Date.now(); let pausedFor = 0; let pauseStarted = null;
    const timer = setInterval(() => {
      if (!reading.active || reading.token !== token) return finish(false);
      if (reading.paused) { if (!pauseStarted) pauseStarted = Date.now(); return; }
      if (pauseStarted) { pausedFor += Date.now() - pauseStarted; pauseStarted = null; }
      if (Date.now() - started - pausedFor >= ms) finish(true);
    }, 80);
    const finish = (value) => { clearInterval(timer); if (reading.waitCancel === cancel) reading.waitCancel = null; resolve(value); };
    const cancel = () => finish(false); reading.waitCancel = cancel;
  });
}
function waitForAudioPermission(token) {
  return new Promise((resolve) => {
    const check = () => {
      if (token !== speechToken) return resolve(false);
      if (!reading.active || !reading.paused) return resolve(true);
      setTimeout(check, 75);
    };
    check();
  });
}
function systemSpeech(text) { return new Promise((resolve) => { speechSynthesis.cancel(); const utterance = new SpeechSynthesisUtterance(text); utterance.lang = 'en-US'; utterance.rate = Number($('#speed').value); utterance.onend = () => resolve(true); utterance.onerror = () => resolve(false); speechSynthesis.speak(utterance); }); }
async function neuralSpeech(text, language, token) {
  const file = await window.studio.synthesize({ text, language, speed: Number($('#speed').value) });
  if (!(await waitForAudioPermission(token))) return false;
  audio.pause(); audio.src = file; await audio.play();
  return new Promise((resolve) => { audio.onended = () => resolve(true); audio.onerror = () => resolve(false); });
}
async function readParts(parts, expectedToken = null) {
  const token = ++speechToken, engine = $('#voice-engine').value, language = engine === 'piper-nl' ? 'nl-BE' : 'en-US';
  try {
    for (const part of parts) {
      if (token !== speechToken || (expectedToken !== null && expectedToken !== reading.token)) return false;
      const spoken = engine.startsWith('piper') ? await neuralSpeech(part, language, token) : await systemSpeech(part);
      if (!spoken || token !== speechToken) return false;
    }
    return true;
  } catch { $('#tts-status').textContent = 'Local neural playback failed; use the browser voice for this card.'; return false; }
}
async function runContinuous() {
  if (mode !== 'learn' || !learnQueue.length) { $('#tts-status').textContent = 'Choose a non-empty Learn set first.'; return; }
  stopReading(); reading.active = true; reading.paused = false; reading.token += 1;
  const token = reading.token, continueSet = $('#continuous').checked;
  $('#tts-status').textContent = continueSet ? 'Continuous reading is running.' : 'Reading the current card.';
  while (reading.active && token === reading.token) {
    const card = currentCard(); renderLearn(); status(`Reading question ${learnIndex + 1} of ${learnQueue.length}`);
    if (!(await readParts([card.prompt], token))) break;
    if (!(await wait(Number($('#qa-pause').value || 0) * 1000, token))) break;
    if (store.settings.answerFlow === 'flip') flipOrAdvance({ fromContinuous: true });
    status(`Reading answer ${learnIndex + 1} of ${learnQueue.length}`);
    if (!(await readParts([`Answer: ${card.answerText}`], token))) break;
    if (!continueSet || !(await wait(Number($('#card-pause').value || 0) * 1000, token))) break;
    learnIndex = (learnIndex + 1) % learnQueue.length;
  }
  if (token === reading.token) { reading.active = false; $('#tts-status').textContent = continueSet ? 'Continuous reading stopped.' : 'Current card finished.'; }
}
function pauseReading() { if (!reading.active) return; reading.paused = !reading.paused; if ($('#voice-engine').value === 'system') reading.paused ? speechSynthesis.pause() : speechSynthesis.resume(); else if (reading.paused) audio.pause(); else audio.play().catch(() => {}); $('#reading-pause').textContent = reading.paused ? 'Resume' : 'Pause'; }
function stopReading() { reading.active = false; reading.paused = false; reading.token += 1; reading.waitCancel?.(); reading.waitCancel = null; speechToken += 1; speechSynthesis.cancel(); audio.pause(); audio.currentTime = 0; $('#reading-pause').textContent = 'Pause'; }

function displayedCard() { return mode === 'learn' ? currentCard() : test?.cards?.[test.index] || null; }
function cardAiPrompt(card) {
  if (!card) throw new Error('Choose a study card first.');
  return [
    'Act as a precise CCNA tutor.',
    `Question: ${card.prompt}`,
    `Answer: ${card.answerText}`,
    'Explain the reasoning in clear English, add one practical example, and identify one common misconception. Do not rewrite this as an exam dump.'
  ].join('\n\n');
}
function setAiStatus(message, state = '') { const element = $('#ai-status'); element.textContent = message; element.dataset.state = state; }
function appendAiNote(text, source) {
  const card = displayedCard(); if (!card) throw new Error('Choose a study card first.');
  const heading = document.createElement('p'); heading.innerHTML = `<strong>${escapeHtml(source)}</strong>`;
  const body = document.createElement('p'); body.textContent = String(text || '').trim();
  $('#note').append(heading, body); saveCurrentNote();
}
async function refreshAiStatus() {
  setAiStatus('Checking AI bridge…');
  const result = await window.studio.ai.status();
  const select = $('#ai-ollama-model');
  select.innerHTML = result.ollama.models.length
    ? result.ollama.models.map((model) => `<option value="${escapeHtml(model)}">${escapeHtml(model)}</option>`).join('')
    : '<option value="">No local model detected</option>';
  setAiStatus(result.ollama.available ? `Bridge ready · Ollama online · ${result.ollama.models.length} model(s)` : 'Bridge ready · Ollama offline · web providers available', result.ollama.available ? 'ready' : 'manual');
  return result;
}

function undoOne() { const event = store.history.pop(); if (!event) return; store.progress[event.cardId] = event.before; save(); status('Last result undone.'); render(); }
function undoSession() { const events = store.history.filter((event) => event.sessionId === session.id); if (!events.length) return; events.sort((a, b) => b.at - a.at).forEach((event) => { store.progress[event.cardId] = event.before; }); store.history = store.history.filter((event) => event.sessionId !== session.id); save(); session = makeSession(); test = null; status('Current session undone.'); render(); }
function updateGlobalNext() {
  const controls = $('#fixed-controls'), button = $('#global-next');
  const visible = mode === 'learn' || (mode === 'test' && test);
  controls.hidden = !visible;
  button.disabled = mode === 'test' && test && !test.answered;
  button.textContent = mode === 'test' ? 'Next question →' : 'Next →';
  const learnOnly = mode === 'learn';
  $('#fixed-play').hidden = !learnOnly; $('#fixed-stop').hidden = !learnOnly;
  $('#fixed-ok').hidden = !learnOnly; $('#fixed-attention').hidden = !learnOnly;
}
function nextFromFixedControl() {
  if (mode === 'learn') flipOrAdvance();
  else if (mode === 'test' && test?.answered) nextTest();
}
function render() {
  document.body.classList.toggle('course-mode', mode === 'course');
  document.body.classList.toggle('cli-mode', mode === 'cli');
  document.body.classList.toggle('diagram-mode', mode === 'diagram');
  renderSelection();
  if (mode === 'learn') renderLearn();
  else if (mode === 'test') renderTestSetup();
  else if (mode === 'course') renderCourse();
  else if (mode === 'cli') renderCli();
  else if (mode === 'diagram') renderDiagram();
  else renderPalace();
  updateGlobalNext();
}
async function init() {
  store = { ...store, ...(await window.studio.load()) }; store.notes ||= {}; store.progress ||= {}; store.courseProgress ||= {}; store.qaMastery ||= {}; store.diagramProgress ||= {}; store.history ||= []; store.settings ||= {}; store.settings.theme ||= {};
  if (store.settings.theme.text && store.settings.theme.card && contrastRatio(store.settings.theme.text, store.settings.theme.card) < 3) {
    store.settings.theme = { text: '#f4f1ea', background: '#0a0a0a', card: '#121212' };
    await save();
  }
  const [catalogRows, videoCatalog, referenceChapters, loadedDiagramPdfs] = await Promise.all([window.studio.loadCatalog(), window.studio.loadJeremyVideos(), window.studio.loadReferenceChapters(), window.studio.loadDiagramPdfs ? window.studio.loadDiagramPdfs() : Promise.resolve([])]);
  cards = [...makeCards(catalogRows), ...AUTOMATION]; jeremyCatalog = videoCatalog || { videos: [] }; bookCatalog = referenceChapters || { chapters: [] }; diagramPdfs = loadedDiagramPdfs || []; learnQueue = activeCards();
  $('#resource-card-count').textContent = cards.length;
  $('#library-status').textContent = `${cards.length} CARDS · ${availableCourses().length} COURSES · ${diagramCatalog().length} DIAGRAMS · ${bookCatalog.chapters.length} BOOK CHAPTERS · ${jeremyCatalog.videos.length} VIDEO LESSONS`;
  if ((store.settings.voiceProfileVersion || 0) < 2) { store.settings.speed = 1.15; store.settings.voiceProfileVersion = 2; save(); }
  $('#voice-engine').value = store.settings.voiceEngine || 'piper-en'; $('#speed').value = store.settings.speed || 1.15; $('#qa-pause').value = store.settings.qaPause ?? 2; $('#card-pause').value = store.settings.cardPause ?? 4; $('#continuous').checked = Boolean(store.settings.continuous); $('#answer-flow').value = store.settings.answerFlow || 'flip';
  $('#text-colour').value = store.settings.theme.text || '#f4f1ea'; $('#background-colour').value = store.settings.theme.background || '#0a0a0a'; $('#card-colour').value = store.settings.theme.card || '#121212'; applyTheme();
  setWorkbenchLayout(store.settings.layout || 'split'); populateJeremyLessons(); populateBookChapters();
  const legacyFloating = store.settings.videoFloating ? { 'video-panel': true } : {};
  Object.entries({ ...legacyFloating, ...(store.settings.floatingPanels || {}) }).forEach(([panelId, floating]) => { if (floating) setPanelFloating(panelId, true); });
  if (store.settings.referenceBook) $('#reference-status').textContent = `Local reference selected: ${store.settings.referenceBook.split(/[/\\]/).pop()}`;
  else installReference(await window.studio.useProvidedVolumeOne(), { open: false });
  const tts = await window.studio.ttsStatus(); $('#tts-status').textContent = tts.piper && tts.english && tts.dutch ? 'Local English and Dutch neural voices are installed.' : 'A local neural voice is unavailable; the browser voice remains available.';
  refreshAiStatus().catch((error) => setAiStatus(`Bridge check failed: ${error.message}`, 'error'));
  document.querySelectorAll('.mode').forEach((button) => button.addEventListener('click', () => { stopReading(); mode = button.dataset.mode; document.querySelectorAll('.mode').forEach((item) => item.classList.toggle('active', item === button)); render(); }));
  $('#resource-cards').addEventListener('click', () => document.querySelector('[data-mode="learn"]').click());
  $('#resource-book').addEventListener('click', () => { setWorkbenchLayout('split'); $('#reference-panel').open = true; showReference(); });
  $('#resource-video').addEventListener('click', () => { setWorkbenchLayout('studio'); $('#video-panel').open = true; $('#video-panel').scrollIntoView({ block: 'start', behavior: 'smooth' }); });
  document.querySelectorAll('.layout-choice').forEach((button) => button.addEventListener('click', () => setWorkbenchLayout(button.dataset.layout)));
  $('#jeremy-topic').addEventListener('change', () => setJeremyLesson(jeremyCatalog.videos.find((video) => video.id === $('#jeremy-topic').value)));
  $('#study-topic').addEventListener('click', () => openRelatedLesson(mode === 'learn' ? currentCard() : test?.cards?.[test.index]));
  $('#open-youtube').addEventListener('click', () => { if (currentJeremyVideo) window.studio.openLink(`https://www.youtube.com/watch?v=${encodeURIComponent(currentJeremyVideo.id)}`); });
  $('#captions').addEventListener('change', () => { if (currentJeremyVideo) { $('#jeremy-player').dataset.captions = ''; setJeremyLesson(currentJeremyVideo); } });
  document.querySelectorAll('[data-panel-action]').forEach((button) => button.addEventListener('click', (event) => {
    event.preventDefault(); event.stopPropagation();
    const panel = button.closest('.floatable-panel'); if (panel) setPanelFloating(panel.id, button.dataset.panelAction === 'float');
  }));
  document.querySelectorAll('.floatable-panel > summary').forEach((summary) => {
    summary.addEventListener('pointerdown', startPanelDrag); summary.addEventListener('pointermove', dragPanel); summary.addEventListener('pointerup', stopPanelDrag); summary.addEventListener('pointercancel', stopPanelDrag);
  });
  $('#book-chapter').addEventListener('change', () => { const chapter = currentBookChapter(); if (chapter) $('#reference-status').textContent = `Selected: Chapter ${chapter.number} · ${chapter.title} · PDF page ${chapter.pdfPage}.`; });
  $('#use-provided-volume').addEventListener('click', async () => installReference(await window.studio.useProvidedVolumeOne()));
  $('#choose-reference').addEventListener('click', async () => installReference(await window.studio.chooseReference()));
  $('#open-reference').addEventListener('click', showReference);
  $('#apply-selection').addEventListener('click', () => { bundle = $('#bundle').value; learnQueue = activeCards(); learnIndex = 0; mode = 'learn'; document.querySelector('[data-mode=learn]').click(); });
  $('#open-palace').addEventListener('click', () => { stopReading(); mode = 'palace'; render(); });
  $('#global-next').addEventListener('click', nextFromFixedControl);
  $('#fixed-play').addEventListener('click', () => $('#continuous').checked ? runContinuous() : readVisibleLearnSide());
  $('#fixed-stop').addEventListener('click', stopReading);
  $('#fixed-ok').addEventListener('click', () => { const card = currentCard(); if (card) markLearn(card, true); });
  $('#fixed-attention').addEventListener('click', () => { const card = currentCard(); if (card) markLearn(card, false); });
  document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() !== 'n' || ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName) || document.activeElement?.isContentEditable) return;
    event.preventDefault(); nextFromFixedControl();
  });
  $('#toggle-chapters').addEventListener('click', () => { selectedChapters = selectedChapters.size === Object.keys(CHAPTERS).length ? new Set() : new Set(Object.keys(CHAPTERS)); renderSelection(); });
  $('#save-note').addEventListener('click', saveCurrentNote);
  $('#clear-note').addEventListener('click', () => { $('#note').innerHTML = ''; saveCurrentNote(); $('#note-status').textContent = 'Note cleared locally.'; });
  $('#note').addEventListener('paste', pasteImageIntoNote);
  $('#voice-test').addEventListener('click', () => readParts([$('#voice-engine').value === 'piper-nl' ? 'Dit is een test van de lokale Nederlandse neurale stem.' : 'This is a test of the local English neural voice.']));
  $('#voice-stop').addEventListener('click', stopReading); $('#reading-start').addEventListener('click', runContinuous); $('#reading-pause').addEventListener('click', pauseReading); $('#reading-stop').addEventListener('click', stopReading);
  ['voice-engine', 'speed', 'qa-pause', 'card-pause', 'continuous', 'answer-flow'].forEach((id) => $('#'+id).addEventListener('change', () => { store.settings = { ...store.settings, voiceEngine: $('#voice-engine').value, speed: Number($('#speed').value), qaPause: Number($('#qa-pause').value), cardPause: Number($('#card-pause').value), continuous: $('#continuous').checked, questionSize: store.settings.questionSize || 42, answerSize: store.settings.answerSize || 30, answerFlow: $('#answer-flow').value, voiceProfileVersion: 2 }; applyTheme(); save(); if (id === 'answer-flow') render(); }));
  const adjustTextSize = (key, delta, min, max, output) => { store.settings[key] = Math.max(min, Math.min(max, Number(store.settings[key] || (key === 'questionSize' ? 42 : 30)) + delta)); $(output).value = store.settings[key]; applyTheme(); save(); };
  $('#question-smaller').addEventListener('click', () => adjustTextSize('questionSize', -2, 22, 60, '#question-size-value'));
  $('#question-larger').addEventListener('click', () => adjustTextSize('questionSize', 2, 22, 60, '#question-size-value'));
  $('#answer-smaller').addEventListener('click', () => adjustTextSize('answerSize', -2, 16, 52, '#answer-size-value'));
  $('#answer-larger').addEventListener('click', () => adjustTextSize('answerSize', 2, 16, 52, '#answer-size-value'));
  $('#question-size-value').value = store.settings.questionSize || 42; $('#answer-size-value').value = store.settings.answerSize || 30;
  ['text-colour', 'background-colour', 'card-colour'].forEach((id) => $('#'+id).addEventListener('input', () => { store.settings.theme = { text: $('#text-colour').value, background: $('#background-colour').value, card: $('#card-colour').value }; applyTheme(); save(); }));
  $('#reset-theme').addEventListener('click', () => { store.settings.theme = { text: '#f4f1ea', background: '#0a0a0a', card: '#121212' }; $('#text-colour').value = '#f4f1ea'; $('#background-colour').value = '#0a0a0a'; $('#card-colour').value = '#121212'; applyTheme(); save(); });
  $('#undo-one').addEventListener('click', undoOne); $('#undo-session').addEventListener('click', undoSession);
  $('#ai-check').addEventListener('click', () => refreshAiStatus().catch((error) => setAiStatus(error.message, 'error')));
  $('#ai-open-web').addEventListener('click', async () => { try { const provider = $('#ai-web-provider').value; await window.studio.ai.openWebProvider({ provider, customUrl: $('#ai-custom-url').value }); setAiStatus(`${provider} opened in a persistent visible session.`, 'ready'); } catch (error) { setAiStatus(error.message, 'error'); } });
  $('#ai-close-web').addEventListener('click', async () => { await window.studio.ai.closeWebProvider(); setAiStatus('Web AI window closed.', 'manual'); });
  $('#ai-send-card').addEventListener('click', async () => { try { const result = await window.studio.ai.sendWebPrompt({ prompt: cardAiPrompt(displayedCard()) }); setAiStatus(result.submitted ? 'Prompt inserted and submitted.' : result.clipboardFallback ? 'Prompt copied to the clipboard; paste it into the visible AI window.' : result.reason, result.submitted ? 'ready' : 'manual'); } catch (error) { setAiStatus(error.message, 'error'); } });
  $('#ai-capture-note').addEventListener('click', async () => { try { const result = await window.studio.ai.captureWebResponse(); if (!result.captured) throw new Error('No visible AI answer could be captured yet.'); appendAiNote(result.text, 'AI web explanation'); setAiStatus('Latest visible AI answer added to this card note.', 'ready'); } catch (error) { setAiStatus(error.message, 'error'); } });
  $('#ai-explain-card').addEventListener('click', async () => { try { const model = $('#ai-ollama-model').value; if (!model) throw new Error('No local Ollama model is selected.'); setAiStatus(`Generating locally with ${model}…`); const result = await window.studio.ai.generateWithOllama({ model, prompt: cardAiPrompt(displayedCard()) }); appendAiNote(result.text, `Ollama · ${model}`); setAiStatus('Local explanation added to this card note.', 'ready'); } catch (error) { setAiStatus(error.message, 'error'); } });
  $('#export-session').addEventListener('click', async () => { const result = await window.studio.exportSession(store); $('#file-status').textContent = result.canceled ? 'Save cancelled.' : `Saved: ${result.filePath}`; });
  $('#import-session').addEventListener('click', async () => { try { const result = await window.studio.importSession(); if (result.canceled) return; store = { ...store, ...result.store }; store.notes ||= {}; store.progress ||= {}; store.courseProgress ||= {}; store.qaMastery ||= {}; store.diagramProgress ||= {}; store.history ||= []; await save(); $('#file-status').textContent = `Loaded: ${result.filePath}`; render(); } catch { $('#file-status').textContent = 'Invalid session file.'; } });
  render();
}
function applyTheme() { const theme = store.settings.theme || {}; document.documentElement.style.setProperty('--ink', theme.text || '#f4f1ea'); document.documentElement.style.setProperty('--paper', theme.background || '#0a0a0a'); document.documentElement.style.setProperty('--card', theme.card || '#121212'); document.documentElement.style.setProperty('--question-size', store.settings.questionSize || 42); document.documentElement.style.setProperty('--answer-size', store.settings.answerSize || 30); }
function showStartupError(error) {
  const message = !window.studio
    ? 'This HTML page is only a preview. Open CCNA Memory Studio as the Electron program to load cards, PDF, progress, sessions and AI speech.'
    : `The study library could not start: ${error?.message || error}`;
  const content = $('#content');
  if (content) content.innerHTML = `<article class="learn-card startup-error"><p class="label">PROGRAM NOT CONNECTED</p><h2 class="statement">${escapeHtml(message)}</h2><p class="quiet">Electron project: M:\\CCNA Memory Studio\\CCNA-Memory-Studio-v3-Focused</p></article>`;
  const controls = $('#fixed-controls'); if (controls) controls.hidden = true;
  console.error(error);
}
window.addEventListener('unhandledrejection', (event) => showStartupError(event.reason));
init().catch(showStartupError);
