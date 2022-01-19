import genRandomNum from '../utils.js';
import runGameEngine from '../game-engine.js';

const rule = 'What is the result of the expression?';

const OPERATIONS = ['+', '-', '*'];

const getRandomListItem = (items) => items[Math.floor(Math.random() * items.length)];

const generateRound = () => {
  const a = genRandomNum();
  const b = genRandomNum();
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

  return [`${a} ${operator} ${b}`, String(answer)];
};

export default () => {
  runGameEngine(rule, generateRound);
};
