var gulp = require('gulp');
var watch = require('gulp-watch');
var join = require('path').join;
var pug = require('gulp-pug2');

gulp.task('default', function buildHTML() {
  return watch('public/templates/*', function() {
    return gulp.src(join(__dirname, 'public', 'templates', '*.pug'))
    .pipe(pug()).pipe(gulp.dest('public/templates'));
  })
});