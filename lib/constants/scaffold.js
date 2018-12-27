"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var path_1 = tslib_1.__importDefault(require("path"));
var cwd = process.cwd();
console.log('__dirname', __dirname);
console.log('cwd', cwd);
exports.default = {
    distCwd: cwd,
    curCwd: path_1.default.resolve(__dirname, '../../'),
    utilsConfig: 'utils.config.json',
    scaffold: path_1.default.resolve(__dirname, '../../scaffold'),
    common: path_1.default.resolve(__dirname, '../../scaffold/common'),
    ts: path_1.default.resolve(__dirname, '../../scaffold/ts'),
    js: path_1.default.resolve(__dirname, '../../scaffold/js'),
    pkg: 'package.json',
};
