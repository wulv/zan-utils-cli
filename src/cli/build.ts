import gulp from 'gulp';
import '../tasks';
const util = require('util');



gulp.on('error', e => console.log('error', e));

export default function() {
  gulp.task('build')((err) => {console.log(err)});
}