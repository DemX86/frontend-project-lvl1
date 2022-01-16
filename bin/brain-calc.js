#!/usr/bin/env node

import generateTasks from '../src/games/calc.js';
import runGame from '../src/games/game-base.js';
import welcome from '../src/cli.js';

const name = welcome();
const subject = 'What is the result of the expression?';
const [questions, answers] = generateTasks();

runGame(name, subject, questions, answers);
