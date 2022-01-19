import getRandomInt from '../utils.js';
import runGameEngine from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  if (!b) {
    return a;
  }
  return getGCD(b, a % b);
};

const generateRound = () => {
  const a = getRandomInt(1, 100);
  const b = getRandomInt(1, 100);
  return [`${a} ${b}`, `${getGCD(a, b)}`];
};

const runGame = () => {
  runGameEngine(rule, generateRound);
};

export default runGame;
