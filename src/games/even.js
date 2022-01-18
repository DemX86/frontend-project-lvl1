import getRandomInt from '../utils.js';
import runGameEngine from '../game-base.js';

const subject = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => n % 2 === 0;

const generateRound = () => {
  const number = getRandomInt();
  const answer = isEven(number) ? 'yes' : 'no';
  return [`${number}`, `${answer}`];
};

const runGame = () => {
  runGameEngine(subject, generateRound);
};

export default runGame;
