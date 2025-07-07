import { useState } from 'react';
import { buildFeedback } from '../utils/feedback';

export default function useRunner() {
  const [output, setOutput] = useState('');
  const [feedback, setFeedback] = useState(null);

  const run = (code, testFn) => {
    try {
      // Simple eval placeholder
      // eslint-disable-next-line no-eval
      const result = eval(code);
      setOutput(String(result ?? ''));
      const pass = testFn(String(result ?? ''));
      setFeedback(buildFeedback(pass));
    } catch (e) {
      setOutput(String(e));
      setFeedback(buildFeedback(false));
    }
  };

  return { output, feedback, run };
}
