import readline from 'readline-sync';
import welcome from './cli.js';

const ROUNDS_COUNT = 3;

const runGameEngine = (subject, generateRound) => {
  const username = welcome();
  console.log(`${subject}`);
  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    const input = readline.question('Your answer: ');
    if (input === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${input}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
};

export default runGameEngine;
