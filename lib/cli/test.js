"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jest = require('jest');
var path_1 = tslib_1.__importDefault(require("path"));
var base_1 = tslib_1.__importDefault(require("../config/base"));
var jestConfig = require('../config/jest.config.js');
function default_1() {
    var argv = process.argv.slice(2);
    var preset = path_1.default.join(base_1.default.curCwd, 'node_modules/ts-jest/');
    console.log(path_1.default.join(base_1.default.curCwd, 'config/jest.config.js'));
    argv.push('--config', JSON.stringify(tslib_1.__assign({}, jestConfig, { rootDir: base_1.default.distCwd, preset: preset, transform: {
            '^.+\\.tsx?$': preset,
        } })));
    jest.run(argv);
}
exports.default = default_1;
