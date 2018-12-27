"use strict";
var path = require('path');
var distCwd = process.cwd();
module.exports = {
    distCwd: distCwd,
    scaffold: path.resolve(__dirname, '../../scaffold'),
    typescript: path.resolve(__dirname, '../../scaffold/typescript'),
    pkg: 'package.json',
    curCwd: path.resolve(__dirname, '../../'),
    src: path.join(distCwd, 'src'),
    config: path.join(__dirname, '../config'),
    template: path.join(__dirname, '../template'),
    esTemp: path.join(distCwd, 'es_temp'),
    dist: path.join(distCwd, 'dist'),
    publishCache: path.join(distCwd, '.publish'),
    static: ['README.md'],
};
