import { getRandomInt, getRandomArrayItem } from '../utils.js';
import ROUNDS from '../const.js';

const OPERATIONS = ['+', '-', '*'];

const generateTasks = () => {
  const questions = [];
  const answers = [];

  for (let i = 0; i < ROUNDS; i += 1) {
    const a = getRandomInt();
    const b = getRandomInt();
    const operator = getRandomArrayItem(OPERATIONS);

    let answer;
    switch (operator) {
      case '+':
        answer = a + b;
        break;
      case '-':
        answer = a - b;
        break;
      case '*':
        answer = a * b;
        break;
      // no default
    }

    questions.push(`${a} ${operator} ${b}`);
    answers.push(`${answer}`);
  }

  return [questions, answers];
};

export default generateTasks;
