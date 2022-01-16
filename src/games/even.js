import { getRandomNumber } from '../utils.js';
import ROUNDS from '../const.js';

const isEven = (n) => n % 2 === 0;

const generateTasks = () => {
  const questions = [];
  const answers = [];

  for (let i = 0; i < ROUNDS; i += 1) {
    const number = getRandomNumber();
    const answer = isEven(number) ? 'yes' : 'no';

    questions.push(`${number}`);
    answers.push(`${answer}`);
  }

  return [questions, answers];
};

export default generateTasks;
