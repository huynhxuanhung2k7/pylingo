import levels from '../data/levels';

export default function Sidebar({ current, setCurrent }) {
  return (
    <aside className="w-48 bg-blue-100 h-screen overflow-auto p-2">
      {levels.map(l => (
        <button
          key={l.id}
          onClick={() => setCurrent(l.id)}
          className={`block w-full text-left my-1 p-2 rounded ${current===l.id?'bg-blue-500 text-white':'bg-white'}`}
        >
          {l.id}. {l.title}
        </button>
      ))}
    </aside>
  );
}
