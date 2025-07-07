import levels from '../data/levels';
import PuzzleCard from './PuzzleCard';
import Editor from './Editor';

export default function LevelPanel({ id }) {
  const level = levels.find(l => l.id === id) || levels[0];
  return (
    <div className="p-4 flex-1 overflow-auto">
      <h2 className="text-xl font-bold mb-2">{level.title}</h2>
      <div className="mb-4">
        <h3 className="font-semibold">Main Task</h3>
        <p className="mb-2 whitespace-pre-wrap">{level.main.task}</p>
        <Editor testFn={level.tests.main} />
      </div>
      <div>
        {level.puzzles.map(p => (
          <PuzzleCard key={p.id} puzzle={p} testFn={level.tests[p.id]} />
        ))}
      </div>
    </div>
  );
}
