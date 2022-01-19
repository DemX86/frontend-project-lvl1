import genRandomNum from '../utils.js';
import runGameEngine from '../game-engine.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
};

const generateRound = () => {
  const a = genRandomNum(1, 100);
  const b = genRandomNum(1, 100);
  return [`${a} ${b}`, String(getGcd(a, b))];
};

export default () => {
  runGameEngine(rule, generateRound);
};
