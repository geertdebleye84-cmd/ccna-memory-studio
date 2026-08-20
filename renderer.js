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

function makeSession() { return { id: crypto.randomUUID(), total: 0, correct: 0 }; }
function makeCards(rows) {
  const base = rows.map((row) => ({ id: `concept-${row.source_number}`, domain: CHAPTERS[row.domain] ? row.domain : 'Network Fundamentals', title: row.concepts?.[0] || 'CCNA concept', statement: row.answer_hints?.[0] || 'Review the core principle.' }));
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
    $('#content .statement').textContent = card.title;
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
  if (store.settings.answerFlow === 'reveal') return readParts([card.prompt, `Answer: ${card.title}`]);
  return readParts([learnShowingAnswer() ? `Answer: ${card.title}` : card.prompt]);
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
    if (!(await readParts([`Answer: ${card.title}`], token))) break;
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
    `Expected topic: ${card.title}`,
    `Study clue: ${card.statement}`,
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
function render() { renderSelection(); if (mode === 'learn') renderLearn(); else if (mode === 'test') renderTestSetup(); else renderPalace(); updateGlobalNext(); }
async function init() {
  store = { ...store, ...(await window.studio.load()) }; store.notes ||= {}; store.progress ||= {}; store.history ||= []; store.settings ||= {}; store.settings.theme ||= {};
  if (store.settings.theme.text && store.settings.theme.card && contrastRatio(store.settings.theme.text, store.settings.theme.card) < 3) {
    store.settings.theme = { text: '#f4f1ea', background: '#0a0a0a', card: '#121212' };
    await save();
  }
  const [catalogRows, videoCatalog, referenceChapters] = await Promise.all([window.studio.loadCatalog(), window.studio.loadJeremyVideos(), window.studio.loadReferenceChapters()]);
  cards = [...makeCards(catalogRows), ...AUTOMATION]; jeremyCatalog = videoCatalog || { videos: [] }; bookCatalog = referenceChapters || { chapters: [] }; learnQueue = activeCards();
  $('#resource-card-count').textContent = cards.length;
  $('#library-status').textContent = `${cards.length} CARDS · ${bookCatalog.chapters.length} BOOK CHAPTERS · ${jeremyCatalog.videos.length} VIDEO LESSONS`;
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
  $('#import-session').addEventListener('click', async () => { try { const result = await window.studio.importSession(); if (result.canceled) return; store = { ...store, ...result.store }; store.notes ||= {}; store.progress ||= {}; store.history ||= []; await save(); $('#file-status').textContent = `Loaded: ${result.filePath}`; render(); } catch { $('#file-status').textContent = 'Invalid session file.'; } });
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
