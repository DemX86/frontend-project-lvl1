import getRandomInt from '../utils.js';
import runGameEngine from '../index.js';

const rule = 'What is the result of the expression?';

const OPERATIONS = ['+', '-', '*'];

const getRandomListItem = (items) => items[Math.floor(Math.random() * items.length)];

const generateRound = () => {
  const a = getRandomInt();
  const b = getRandomInt();
  const operator = getRandomListItem(OPERATIONS);

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

const runGame = () => {
  runGameEngine(rule, generateRound);
};

export default runGame;
