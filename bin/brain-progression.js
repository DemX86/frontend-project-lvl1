#!/usr/bin/env node

import generateTasks from '../src/games/progression.js';
import runGame from '../src/games/game-base.js';
import welcome from '../src/cli.js';

const name = welcome();
const subject = 'What number is missing in the progression?';
const [questions, answers] = generateTasks();

runGame(name, subject, questions, answers);
