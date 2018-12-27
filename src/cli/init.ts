import fs  from 'fs';
import path from 'path';
import shelljs from 'shelljs';
import * as memFs from 'mem-fs';
import * as editor from 'mem-fs-editor';

import base from '../config/base';

export default async function(projectName: string) {
  // is folder exist
  const distPath = path.join(base.distCwd, projectName);
  if (fs.existsSync(distPath)) {
    console.error(new Error(`${projectName} folder is exist`));
    return false;
  }
  // mkdir 
  fs.mkdirSync(distPath);

  const store = memFs.create();
  const fsEditor = editor.create(store);

  // copy package.json
  const pkgFrom = path.resolve(base.scaffold, base.pkg);
  const pkgTo = path.resolve(distPath, base.pkg);
  fsEditor.copyTpl(pkgFrom, pkgTo, { projectName });
  // copy src, test file

  // const mainFrom = path.resolve();
  fsEditor.copy(base.typescript, distPath, {
    globOptions: {
      dot: true
    }
  });
  fsEditor.commit(res => {

    console.log('enter project');
    shelljs.cd(projectName);
    // shelljs.exec(`cd ${projectName}`);
  
    shelljs.exec('git init');
    // done
    console.log('done');
  });

}