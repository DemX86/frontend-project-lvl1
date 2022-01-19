import genRandomInt from '../utils.js';
import runGameEngine from '../index.js';

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
  const number = genRandomInt(1, 100);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [String(number), String(answer)];
};

const runGame = () => {
  runGameEngine(rule, generateRound);
};

export default runGame;
