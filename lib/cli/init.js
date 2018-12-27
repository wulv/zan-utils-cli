"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs_1 = tslib_1.__importDefault(require("fs"));
var path_1 = tslib_1.__importDefault(require("path"));
var shelljs_1 = tslib_1.__importDefault(require("shelljs"));
var memFs = tslib_1.__importStar(require("mem-fs"));
var editor = tslib_1.__importStar(require("mem-fs-editor"));
var base_1 = tslib_1.__importDefault(require("../config/base"));
function default_1(projectName) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var distPath, store, fsEditor, pkgFrom, pkgTo;
        return tslib_1.__generator(this, function (_a) {
            distPath = path_1.default.join(base_1.default.distCwd, projectName);
            if (fs_1.default.existsSync(distPath)) {
                console.error(new Error(projectName + " folder is exist"));
                return [2 /*return*/, false];
            }
            // mkdir 
            fs_1.default.mkdirSync(distPath);
            store = memFs.create();
            fsEditor = editor.create(store);
            pkgFrom = path_1.default.resolve(base_1.default.scaffold, base_1.default.pkg);
            pkgTo = path_1.default.resolve(distPath, base_1.default.pkg);
            fsEditor.copyTpl(pkgFrom, pkgTo, { projectName: projectName });
            // copy src, test file
            // const mainFrom = path.resolve();
            fsEditor.copy(base_1.default.typescript, distPath);
            fsEditor.commit(function (res) {
                console.log('enter project');
                shelljs_1.default.cd(projectName);
                // shelljs.exec(`cd ${projectName}`);
                // install
                console.log(shelljs_1.default.pwd());
                console.log('npm install');
                shelljs_1.default.exec('npm install');
                shelljs_1.default.exec('git init');
                // done
                console.log('done');
            });
            return [2 /*return*/];
        });
    });
}
exports.default = default_1;
