#!/usr/bin/env node

import welcome from '../src/cli.js';
import runGameEven from '../src/games/even.js';

console.log('Welcome to the Brain Games!\n');

const name = welcome();

runGameEven(name);
