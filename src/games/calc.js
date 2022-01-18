import getRandomInt from '../utils.js';

const subjectCalc = 'What is the result of the expression?';

const OPERATIONS = ['+', '-', '*'];

const getRandomArrayItem = (items) => items[Math.floor(Math.random() * items.length)];

const generateTaskCalc = () => {
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

  return [`${a} ${operator} ${b}`, `${answer}`];
};

export { subjectCalc, generateTaskCalc };
