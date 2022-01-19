#!/usr/bin/env node

import { welcome, askUsername, greetUser } from '../src/cli.js';

welcome();
const username = askUsername();
greetUser(username);
