import gulp from 'gulp';
import ghPages from 'gulp-gh-pages';
import merge from 'merge2';
import jsonEditor from 'gulp-json-editor';
import config from '../config';

function publishGit() {
  return merge(
    gulp.src('package.json').pipe(jsonEditor((json) => {
      return Object.assign({}, json, config.target.packageRewrite)
    })),
    gulp.src([config.base.dist + '/**', ...config.base.static]),
  ).pipe(
    ghPages({
      branch: config.target.branch,
      cacheDir: config.base.publishCache,
      push: false,
    }),
  );
}

gulp.task('publish', gulp.series('clean', 'build', 'typing', publishGit));
