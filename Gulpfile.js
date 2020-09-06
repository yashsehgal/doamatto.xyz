'use strict';

const {src, parallel, series, dest, task, watch} = require('gulp');
const eslint = require('gulp-eslint'),
  sassLint = require('gulp-sass-lint'),
  htmlLint = require('gulp-html-lint'),
  run = require('gulp-run'),
  lec = require('gulp-line-ending-corrector'),
  sass = require('gulp-dart-sass'),
  sourcemaps = require('gulp-sourcemaps');

exports.lint = lint;
exports.sasslint = sasslint;
exports.sass = sasscompile;
exports.htmllint = htmllint;
exports.lecfix = lecFix;
exports.default = series(
  lecFix,
  parallel(
    lint,
    sasslint
  ),
  parallel(
    hugobuild,
    sasscompile
  ),
  htmllint
);

task('sass:watch', function () {
  watch('./sass/**/*.scss', ['sass']);
});

function sasscompile() {
  return src('./assets/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(dest('./public/assets/css'));
}

function lecFix() {
  return src(['**/*.*', '!node_modules/**'])
    .pipe(lec({eolc: 'LF', encoding:'utf8'}))
    .pipe(dest('./'));
}

function lint() {
  return src(['Gulpfile.js', '!node_modules/**', '!dist/**'])
    .pipe(eslint({fix: true}))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

function sasslint() {
  return src('assets/scss/**/*.scss')
    .pipe(sassLint({
      "empty-line-between-blocks": {
        "include": "true"
      }
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
}

function htmllint() {
  return src('layouts/**/*.html', 'public/**/*.html')
    .pipe(htmlLint({fix: true}))
    .pipe(htmlLint.format())
    .pipe(htmlLint.failAfterError());
}

function hugobuild() {
  return run('hugo -D --i18n-warnings').exec();
}