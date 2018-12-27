const jest = require('jest');
import path from 'path';
import base from '../config/base';
const jestConfig = require('../config/jest.config.js');


export default function() {
  let argv = process.argv.slice(2);
  const preset = path.join(base.curCwd, 'node_modules/ts-jest/');
  console.log(path.join(base.curCwd, 'config/jest.config.js'))
  argv.push(
    '--config',
    JSON.stringify({ ...jestConfig, rootDir: base.distCwd, preset: preset, transform: {
      '^.+\\.tsx?$': preset,
    }, })
  );
  jest.run(argv);
}