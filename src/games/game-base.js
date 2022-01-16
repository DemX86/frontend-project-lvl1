import readline from 'readline-sync';
import ROUNDS from '../const.js';

const runGame = (name, subject, questions, answers) => {
  console.log(`${subject}`);
  for (let i = 0; i < ROUNDS; i += 1) {
    console.log(`Question: ${questions[i]}`);
    const input = readline.question('Your answer: ');
    const answer = answers[i];
    if (input === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${input}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
