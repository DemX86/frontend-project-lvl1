#!/usr/bin/env node

import { subject, generateTask } from '../src/games/calc.js';
import runGame from '../src/game-base.js';

runGame(subject, generateTask);
