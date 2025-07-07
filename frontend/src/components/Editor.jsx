import { useState } from 'react';
import useRunner from '../hooks/useRunner';

export default function Editor({ testFn }) {
  const [code, setCode] = useState('');
  const { output, feedback, run } = useRunner();

  return (
    <div className="mb-2">
      <textarea
        className="w-full h-24 border p-1 font-mono text-sm mb-1"
        value={code}
        onChange={e => setCode(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-2 py-1 rounded"
        onClick={() => run(code, testFn)}
      >
        Run
      </button>
      {feedback && (
        <div className="mt-1 text-sm">
          {feedback.success ? '✅' : '❌'} {feedback.msg}
        </div>
      )}
      {output && (
        <pre className="bg-gray-100 p-1 mt-1 whitespace-pre-wrap">{output}</pre>
      )}
    </div>
  );
}
