"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var gulp_1 = tslib_1.__importDefault(require("gulp"));
require("../tasks");
var util = require('util');
var exec = util.promisify(require('child_process').exec);
if (!process.env.target) {
    process.env.target = 'es';
}
gulp_1.default.on('error', function (e) { return console.log('error', e); });
function default_1() {
    var result = gulp_1.default.task('dev')(function (err) { console.log(err); });
    console.log('result', result);
}
exports.default = default_1;
