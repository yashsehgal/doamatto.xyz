const { src } = require('gulp')
const sass = require('gulp-sass')
sass.compiler = require('node-sass')

exports.default = sassCompile
exports.compileSASS = sassCompile

function sassCompile () {
  return src('**/*.scss', '!node_modules/**')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
}
