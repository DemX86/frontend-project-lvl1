import readline from 'readline-sync';

const RANDOM_MAX = 100;
const QUESTION_NUM = 3;

const isNumberEven = (n) => n % 2 === 0;

const runGameEven = (name) => {
  console.log('Answer "yes" if the number is even, otherwise type "no"\n');

  for (let i = 1; i <= QUESTION_NUM; i += 1) {
    const number = Math.floor(Math.random() * RANDOM_MAX);
    const answer = readline.question(`Question ${i}/${QUESTION_NUM}: ${number}\nYour answer: `);
    const isEven = isNumberEven(number);
    if ((answer === 'yes' && isEven) || (answer === 'no' && !isEven)) {
      console.log('Correct!\n');
    } else {
      const correct = isEven ? 'yes' : 'no';
      console.log(`"${answer}" is wrong answer ;( Correct was "${correct}"\nLet's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGameEven;
