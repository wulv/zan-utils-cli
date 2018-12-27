import gulp from "gulp";
import { createProject } from "gulp-typescript";
import babel from "gulp-babel";
import gulpIf from "gulp-if";
import path from "path";
import newer from "gulp-newer";
import config from "../config";
import logger from 'gulp-logger';

gulp.task("build", () => {
  // console.log(config.target.js.tsconfigFile, config.target.js.tsconfig)

  const tsProject = createProject({
    ...config.target.tsconfig,
  });
  const tsResult = gulp
    .src('src/**/**/*',  { base: path.join(config.base.distCwd, "src") })
    .pipe(logger({
      before: 'Starting Build...',
      showChange: true
    }))
    .pipe(
      gulpIf(
        !config.env.prod,
        newer({
          dest: config.base.dist,
          ext: ".js"
        })
      )
    )
    .pipe(tsProject());
  return tsResult.js
    .pipe(gulp.dest(config.base.esTemp))
    .pipe(gulpIf(config.target.babel, babel(config.target.babel)))
    .pipe(gulp.dest(config.base.dist));
});
