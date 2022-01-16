#!/usr/bin/env node

import generateTasks from '../src/games/prime.js';
import runGame from '../src/games/game-base.js';
import welcome from '../src/cli.js';

const name = welcome();
const subject = 'Answer "yes" if given number is prime. Otherwise type "no"';
const [questions, answers] = generateTasks();

runGame(name, subject, questions, answers);
