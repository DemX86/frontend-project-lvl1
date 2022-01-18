import getRandomInt from '../utils.js';

const subject = 'What number is missing in the progression?';

const generateProgression = (start, length, diff) => {
  const progression = [];
  for (let i = 1; i <= length; i += 1) {
    progression.push(start + (i - 1) * diff);
  }
  return progression;
};

const generateRound = () => {
  const start = getRandomInt();
  const length = getRandomInt(5, 10);
  const diff = getRandomInt(1, 10);
  const progression = generateProgression(start, length, diff);

  const hiddenIndex = getRandomInt(0, length - 1);
  const answer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  return [progression.join(' '), `${answer}`];
};

export { subject, generateRound };
