import { useState } from 'react';
import Sidebar from './components/Sidebar';
import LevelPanel from './components/LevelPanel';
import './index.css';

export default function App() {
  const [current, setCurrent] = useState(1);
  return (
    <div className="flex h-screen">
      <Sidebar current={current} setCurrent={setCurrent} />
      <LevelPanel id={current} />
    </div>
  );
}
