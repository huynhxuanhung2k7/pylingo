const levels = [];
const tracks = [
  'Basics','Data Types','Control Flow','Functions','OOP','Advanced','Algorithms'
];
let id = 1;
for (let t = 0; t < tracks.length; t++) {
  for (let i = 0; i < 5 && id <= 30; i++, id++) {
    const track = tracks[t];
    levels.push({
      id,
      track,
      title: `Level ${id}`,
      main: {
        task: `// TODO main task for level ${id}`,
        hints: [],
        solution: ''
      },
      puzzles: [
        { id: 'A', task: `// TODO puzzle A`, hints: [], solution: '' },
        { id: 'B', task: `// TODO puzzle B`, hints: [], solution: '' },
        { id: 'C', task: `// TODO puzzle C`, hints: [], solution: '' }
      ],
      tests: {
        main: () => true,
        A: () => true,
        B: () => true,
        C: () => true
      }
    });
  }
}
export default levels;
