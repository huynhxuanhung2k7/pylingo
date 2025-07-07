export function buildFeedback(result) {
  return result ? { success: true, msg: 'All tests passed' } : { success: false, msg: 'Tests failed' };
}
