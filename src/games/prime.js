import { getRandomInt } from '../utils.js';
import ROUNDS from '../const.js';

const isPrime = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const generateTasks = () => {
  const questions = [];
  const answers = [];

  for (let i = 0; i < ROUNDS; i += 1) {
    const number = getRandomInt(1, 100);
    const answer = isPrime(number) ? 'yes' : 'no';

    questions.push(`${number}`);
    answers.push(`${answer}`);
  }

  return [questions, answers];
};

export default generateTasks;