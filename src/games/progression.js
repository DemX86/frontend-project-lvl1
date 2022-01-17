import { getRandomInt } from '../utils.js';
import ROUNDS_COUNT from '../const.js';

const generateProgression = (start, length, diff) => {
  const progression = [];
  for (let i = 1; i <= length; i += 1) {
    progression.push(start + (i - 1) * diff);
  }
  return progression;
};

const generateTasks = () => {
  const questions = [];
  const answers = [];

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    // создаём арифметическую прогрессию
    const start = getRandomInt();
    const length = getRandomInt(5, 10);
    const diff = getRandomInt(1, 10);
    const progression = generateProgression(start, length, diff);

    // выбираем элемент для скрытия
    const hiddenIndex = getRandomInt(0, length - 1);
    const answer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';

    questions.push(progression.join(' '));
    answers.push(`${answer}`);
  }

  return [questions, answers];
};

export default generateTasks;
