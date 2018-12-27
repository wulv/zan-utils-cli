import gulp from 'gulp';
import ESDoc from 'esdoc';
import config from '../config';

gulp.task('doc', (done) => {
  console.log('start doc', config.esdoc)
  ESDoc.generate(config.esdoc);
  done();
});
