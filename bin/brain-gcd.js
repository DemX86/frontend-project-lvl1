#!/usr/bin/env node

import { subject, generateRound } from '../src/games/gcd.js';
import runGame from '../src/game-base.js';

runGame(subject, generateRound);
