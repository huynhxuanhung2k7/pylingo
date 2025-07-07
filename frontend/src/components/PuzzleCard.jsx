import Editor from './Editor';

export default function PuzzleCard({ puzzle, testFn }) {
  return (
    <div className="mb-3 border rounded shadow p-2">
      <h4 className="font-semibold mb-1">Puzzle {puzzle.id}</h4>
      <p className="mb-2 whitespace-pre-wrap">{puzzle.task}</p>
      <Editor testFn={testFn} />
    </div>
  );
}
