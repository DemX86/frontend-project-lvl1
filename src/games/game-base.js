import readline from 'readline-sync';
import ROUNDS from '../const.js';

const runGame = (name, subject, questions, answers) => {
  if (questions.length !== ROUNDS || answers.length !== ROUNDS) {
    throw new Error(`Invalid arguments for runGame function: expected array of length ${ROUNDS}`);
  }
  console.log(`${subject}\n`);
  for (let i = 0; i < ROUNDS; i += 1) {
    console.log(`Question ${i + 1}/${ROUNDS}: ${questions[i]}`);
    const input = readline.question('Your answer: ');
    const answer = answers[i];
    if (input === answer) {
      console.log('Correct!\n');
    } else {
      console.log(`"${input}" is wrong answer ;( Correct was "${answer}"`);
      console.log(`\nLet's try again, ${name}!\n`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
