import getRandomInt from '../utils.js';

const subjectGCD = 'Find the greatest common divisor of given numbers.';

const getDivisors = (n) => {
  const divisors = [1];
  for (let i = 2; i <= n; i += 1) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
};

const getGCD = (a, b) => {
  const divisorsA = getDivisors(a);
  const divisorsB = getDivisors(b);

  const common = [];
  let i = 0;
  let j = 0;
  while (i < divisorsA.length && j < divisorsB.length) {
    const divA = divisorsA[i];
    const divB = divisorsB[j];
    if (divA === divB && divA !== common[common.length - 1]) {
      common.push(divA);
      i += 1;
      j += 1;
    } else if (divA > divB) {
      j += 1;
    } else {
      i += 1;
    }
  }

  return Math.max(...common);
};

const generateTaskGCD = () => {
  const a = getRandomInt(1, 100);
  const b = getRandomInt(1, 100);
  return [`${a} ${b}`, `${getGCD(a, b)}`];
};

export { subjectGCD, generateTaskGCD };
