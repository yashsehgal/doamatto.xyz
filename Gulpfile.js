const { src, parallel } = require('gulp')
const sass = require('gulp-sass')
const es = require('gulp-eslint')

sass.compiler = require('node-sass')

exports.default = parallel(eslint, sassCompile)
exports.compileJS = eslint
exports.lint = eslint
exports.compileSASS = sassCompile

function eslint () {
  return src(['**/*.js', '**/*.ts', '**/*.tsx', '!node_modules/**'])
    .pipe(es({ fix: true }))
    .pipe(es.format())
    .pipe(es.failAfterError())
}

function sassCompile () {
  return src('**/*.scss', '!node_modules/**')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
}
