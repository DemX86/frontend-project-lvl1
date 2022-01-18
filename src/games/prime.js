import getRandomInt from '../utils.js';

const subject = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const generateTask = () => {
  const number = getRandomInt(1, 100);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [`${number}`, `${answer}`];
};

export { subject, generateTask };
