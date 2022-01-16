#!/usr/bin/env node

import generateTasks from '../src/games/gcd.js';
import runGame from '../src/games/game-base.js';
import welcome from '../src/cli.js';

const name = welcome();
const subject = 'Find the greatest common divisor of given numbers';
const [questions, answers] = generateTasks();

runGame(name, subject, questions, answers);
