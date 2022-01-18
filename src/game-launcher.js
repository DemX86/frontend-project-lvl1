import runGame from './game-base.js';

import { subjectCalc, generateTaskCalc } from './games/calc.js';
import { subjectEven, generateTaskEven } from './games/even.js';
import { subjectGCD, generateTaskGCD } from './games/gcd.js';
import { subjectPrime, generateTaskPrime } from './games/prime.js';
import { subjectProgression, generateTaskProgression } from './games/progression.js';

const assets = {
  calc: [subjectCalc, generateTaskCalc],
  even: [subjectEven, generateTaskEven],
  gcd: [subjectGCD, generateTaskGCD],
  prime: [subjectPrime, generateTaskPrime],
  progression: [subjectProgression, generateTaskProgression],
};

const launchGame = (gameName) => {
  const [subject, generateTask] = assets[gameName];
  runGame(subject, generateTask);
};

export default launchGame;
