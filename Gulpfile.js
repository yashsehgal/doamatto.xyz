const { src, parallel } = require('gulp')
const sass = require('gulp-sass')
const es = require('gulp-eslint')

sass.compiler = require('node-sass')

exports.default = parallel(eslint, sassCompile)
exports.compileJS = eslint
exports.lint = eslint
exports.compileSASS = sassCompile

function eslint () {
  return src(['**/*.js', '!node_modules/**', '!docs/**'])
    .pipe(es({ fix: true }))
    .pipe(es.format())
    .pipe(es.failAfterError())
}

function sassCompile () {
  return src('style.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
}