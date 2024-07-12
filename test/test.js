#!/usr/bin/env node

var file = 'test.json';

import fs from 'node:fs';
import path from 'node:path';
import JSON from '../js/json.js';

file = path.join(import.meta.dirname, file);
const json = fs.readFileSync(file, { encoding: 'utf8' });
const filtered = JSON.filter(json);
const parsed = JSON.parse(filtered);

console.log('\n' + json + '\n');
console.log('\n' + filtered + '\n');
console.dir(parsed);

