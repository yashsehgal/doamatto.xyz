const { src } = require('gulp')
const sass = require('gulp-sass')
sass.compiler = require('sass')

exports.default = sassCompile
exports.compileSASS = sassCompile

function sassCompile () {
  return src('**/*.scss', '!node_modules/**')
    .on('error', sass.logError)
}
