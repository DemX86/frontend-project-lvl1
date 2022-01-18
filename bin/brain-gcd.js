#!/usr/bin/env node

import { subject, generateTask } from '../src/games/gcd.js';
import runGame from '../src/game-base.js';

runGame(subject, generateTask);
