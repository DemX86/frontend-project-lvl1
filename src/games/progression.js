import genRandomNum from '../utils.js';
import runGameEngine from '../game-engine.js';

const rule = 'What number is missing in the progression?';

const PROGRESSION_LENGTH_MIN = 5;

const generateQuestion = (start, length, diff, hiddenIndex) => {
  const items = [];
  for (let i = 0; i < length; i += 1) {
    if (i === hiddenIndex) {
      items.push('..');
    } else {
      items.push(start + i * diff);
    }
  }
  return items.join(' ');
};

const generateRound = () => {
  const start = genRandomNum();
  const length = genRandomNum(PROGRESSION_LENGTH_MIN, 10);
  const diff = genRandomNum(1, 10);
  const hiddenIndex = genRandomNum(0, length - 1);

  const question = generateQuestion(start, length, diff, hiddenIndex);
  const answer = start + hiddenIndex * diff;

  return [question, String(answer)];
};

export default () => {
  runGameEngine(rule, generateRound);
};
