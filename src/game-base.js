import readline from 'readline-sync';
import ROUNDS_COUNT from './const.js';

const runGame = (name, subject, generateTask) => {
  console.log(`${subject}`);
  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const [question, answer] = generateTask();
    console.log(`Question: ${question}`);
    const input = readline.question('Your answer: ');
    if (input === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${input}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
