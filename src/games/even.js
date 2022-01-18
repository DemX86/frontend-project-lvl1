import getRandomInt from '../utils.js';

const subject = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => n % 2 === 0;

const generateRound = () => {
  const number = getRandomInt();
  const answer = isEven(number) ? 'yes' : 'no';
  return [`${number}`, `${answer}`];
};

export { subject, generateRound };
