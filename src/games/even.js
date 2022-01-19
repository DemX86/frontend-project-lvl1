import genRandomInt from '../utils.js';
import runGameEngine from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => n % 2 === 0;

const generateRound = () => {
  const number = genRandomInt();
  const answer = isEven(number) ? 'yes' : 'no';
  return [`${number}`, `${answer}`];
};

const runGame = () => {
  runGameEngine(rule, generateRound);
};

export default runGame;
