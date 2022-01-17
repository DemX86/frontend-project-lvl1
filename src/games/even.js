import { getRandomInt } from '../utils.js';
import ROUNDS_COUNT from '../const.js';

const isEven = (n) => n % 2 === 0;

const generateTasks = () => {
  const questions = [];
  const answers = [];

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const number = getRandomInt();
    const answer = isEven(number) ? 'yes' : 'no';

    questions.push(`${number}`);
    answers.push(`${answer}`);
  }

  return [questions, answers];
};

export default generateTasks;
