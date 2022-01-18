#!/usr/bin/env node

import { subject, generateRound } from '../src/games/calc.js';
import runGame from '../src/game-base.js';

runGame(subject, generateRound);
