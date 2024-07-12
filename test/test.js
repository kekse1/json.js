#!/usr/bin/env node

import fs from 'node:fs';
import JSON from '../js/json.js';

const json = fs.readFileSync('./test.json', { encoding: 'utf8' });
const filtered = JSON.filter(json);
const parsed = JSON.parse(filtered);

console.log('\n' + json + '\n');
console.log('\n' + filtered + '\n');
console.dir(parsed);

