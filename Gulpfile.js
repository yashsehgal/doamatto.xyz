'use strict';

const {src, parallel, series, dest} = require('gulp');
const eslint = require('gulp-eslint'),
  sassLint = require('gulp-sass-lint'),
  htmlLint = require('gulp-html-lint'),
  run = require('gulp-run'),
  lec = require('gulp-line-ending-corrector');

exports.lint = lint;
exports.sasslint = sasslint;
exports.htmllint = htmllint;
exports.lecfix = lecFix;
exports.default = series(
  lecFix,
  parallel(
    lint,
    sasslint
  ),
  hugobuild,
  htmllint
);

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
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
}

function htmllint() {
  return src('layouts/**/*.html', 'public/**/*.html')
    .pipe(htmlLint())
    .pipe(htmlLint.format())
    .pipe(htmlLint.failAfterError());
}

function hugobuild() {
  return run('hugo -D --i18n-warnings').exec();
}