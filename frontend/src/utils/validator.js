export function equalsIgnoreWhitespace(a, b) {
  return a.replace(/\s+/g, '') === b.replace(/\s+/g, '');
}

export function intentMatch(output, expected) {
  return output.toLowerCase().includes(expected.toLowerCase());
}
