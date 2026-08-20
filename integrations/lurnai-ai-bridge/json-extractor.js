'use strict';

function candidateSlices(rawText) {
  const text = String(rawText || '').trim();
  const candidates = [];
  const fencePattern = /```(?:json)?\s*([\s\S]*?)```/gi;
  let fence;
  while ((fence = fencePattern.exec(text))) candidates.push(fence[1].trim());
  candidates.push(text);

  for (let start = 0; start < text.length; start += 1) {
    const opening = text[start];
    if (opening !== '{' && opening !== '[') continue;
    const closing = opening === '{' ? '}' : ']';
    let depth = 0, inString = false, escaped = false;
    for (let index = start; index < text.length; index += 1) {
      const character = text[index];
      if (inString) {
        if (escaped) escaped = false;
        else if (character === '\\') escaped = true;
        else if (character === '"') inString = false;
        continue;
      }
      if (character === '"') { inString = true; continue; }
      if (character === opening) depth += 1;
      else if (character === closing) depth -= 1;
      if (depth === 0) { candidates.push(text.slice(start, index + 1)); break; }
    }
  }
  return [...new Set(candidates.filter(Boolean))];
}

function extractJson(rawText) {
  for (const candidate of candidateSlices(rawText)) {
    try { return { value: JSON.parse(candidate), text: candidate }; } catch {}
  }
  throw new Error('No valid JSON object or array was found in the AI response.');
}

module.exports = { extractJson };
