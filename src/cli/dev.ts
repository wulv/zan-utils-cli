import shelljs from 'shelljs';
import gulp from 'gulp';
import '../tasks';
const util = require('util');
const exec = util.promisify(require('child_process').exec);


if (!process.env.target) {
  process.env.target = 'es';
}


gulp.on('error', e => console.log('error', e));

export default function() {

  const result = gulp.task('dev')((err) => {console.log(err)});
  console.log('result', result);
}