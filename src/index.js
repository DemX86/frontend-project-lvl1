import readline from 'readline-sync';
import { welcome, askUsername, greetUser } from './cli.js';

const ROUNDS_COUNT = 3;

const runGameEngine = (subject, generateRound) => {
  welcome();
  const username = askUsername();
  greetUser(username);

  console.log(`${subject}`);
  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const [question, answerCorrect] = generateRound();
    console.log(`Question: ${question}`);
    const answerUser = readline.question('Your answer: ');
    if (answerUser !== answerCorrect) {
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${answerCorrect}".`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${username}!`);
};

export default runGameEngine;
