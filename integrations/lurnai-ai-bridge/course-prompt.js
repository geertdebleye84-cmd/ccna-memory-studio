'use strict';

function clean(value, limit) { return String(value || '').trim().slice(0, limit); }

function buildCoursePrompt(payload = {}) {
  const title = clean(payload.courseTitle, 300) || 'Imported course';
  const language = clean(payload.language, 80) || 'English';
  const sourceText = clean(payload.sourceText, 500000);
  const extra = clean(payload.extraInstructions, 4000);
  if (!sourceText) throw new Error('Course source text is required.');

  return [
    'You are building a private study course from user-supplied source material.',
    `Course title: ${title}`,
    `Output language: ${language}`,
    'Return strict JSON only. Do not wrap it in Markdown.',
    'Do not invent facts. Every generated item must retain a sourceExcerpt and sourceLocation when available.',
    'Create contextual questions that do not reveal the answer in the question.',
    'For multiple-choice cards, supply exactly four distinct options and identify correctOptionIndex.',
    'Use this schema:',
    JSON.stringify({
      courseTitle: 'string',
      chapters: [{
        title: 'string',
        summary: 'string',
        cards: [{
          type: 'flashcard | multiple_choice | open_question',
          question: 'string',
          answer: 'string',
          explanation: 'string',
          options: ['string'],
          correctOptionIndex: 0,
          difficulty: 'easy | medium | hard',
          tags: ['string'],
          sourceExcerpt: 'string',
          sourceLocation: 'string'
        }]
      }]
    }, null, 2),
    extra ? `Additional user instructions:\n${extra}` : '',
    `SOURCE MATERIAL START\n${sourceText}\nSOURCE MATERIAL END`
  ].filter(Boolean).join('\n\n');
}

module.exports = { buildCoursePrompt };
