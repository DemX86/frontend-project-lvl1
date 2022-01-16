import { getRandomNumber } from '../utils.js';
import ROUNDS from '../const.js';

const getDivisors = (n) => {
  const divisors = [1];
  for (let i = 2; i <= n; i += 1) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
};

const getGCD = (a, b) => {
  // находим делители чисел
  const divisorsA = getDivisors(a);
  const divisorsB = getDivisors(b);

  // ищем общие делители
  const common = [];
  let i = 0;
  let j = 0;
  while (i < divisorsA.length && j < divisorsB.length) {
    const divA = divisorsA[i];
    const divB = divisorsB[j];
    if (divA === divB && divA !== common.at(-1)) {
      common.push(divA);
      i += 1;
      j += 1;
    } else if (divA > divB) {
      j += 1;
    } else {
      i += 1;
    }
  }

  // выбираем максимальный
  return Math.max(...common);
};

const generateTasks = () => {
  const questions = [];
  const answers = [];

  for (let i = 0; i < ROUNDS; i += 1) {
    const a = getRandomNumber();
    const b = getRandomNumber();

    questions.push(`${a} ${b}`);
    answers.push(`${getGCD(a, b)}`);
  }

  return [questions, answers];
};

export default generateTasks;
