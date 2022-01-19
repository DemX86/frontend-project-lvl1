import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

const askUsername = () => {
  const username = readlineSync.question('May I have your name? ');
  return username;
};

const greetUser = (name) => {
  console.log(`Hello, ${name}!`);
};

export { welcome, askUsername, greetUser };
