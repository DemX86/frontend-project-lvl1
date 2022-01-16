#!/usr/bin/env node

import generateTasks from '../src/games/even.js';
import runGame from '../src/games/game-base.js';
import welcome from '../src/cli.js';

const name = welcome();
const subject = 'Answer "yes" if the number is even, otherwise answer "no".';
const [questions, answers] = generateTasks();

runGame(name, subject, questions, answers);
