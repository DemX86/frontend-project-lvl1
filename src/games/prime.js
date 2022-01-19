import genRandomNum from '../utils.js';
import runGameEngine from '../game-engine.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const number = genRandomNum(1, 100);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [String(number), String(answer)];
};

export default () => {
  runGameEngine(rule, generateRound);
};
