import genRandomNum from '../utils.js';
import runGameEngine from '../game-engine.js';

const rule = 'What number is missing in the progression?';

const generateProgression = (start, length, diff) => {
  const progression = [];
  for (let i = 1; i <= length; i += 1) {
    progression.push(start + (i - 1) * diff);
  }
  return progression;
};

const generateRound = () => {
  const start = genRandomNum();
  const length = genRandomNum(5, 10);
  const diff = genRandomNum(1, 10);
  const progression = generateProgression(start, length, diff);

  const hiddenIndex = genRandomNum(0, length - 1);
  const answer = progression[hiddenIndex];
  const part1 = progression.slice(0, hiddenIndex);
  const part2 = progression.slice(hiddenIndex + 1);
  const question = `${part1.join(' ')} .. ${part2.join(' ')}`.trim();

  return [question, String(answer)];
};

export default () => {
  runGameEngine(rule, generateRound);
};
