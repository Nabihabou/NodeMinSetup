var express = require('express');
var stylus = require('express-stylus');
var nib = require('nib');
var join = require('path').join;

var gulp = require('gulp');
var watch = require('gulp-watch');
var join = require('path').join;
var pug = require('gulp-pug2');

var app = express();

gulp.task('default', function buildHTML() {
  return watch('public/templates/*', function() {
    return gulp.src(join(__dirname, 'public', 'templates', '*.pug'))
    .pipe(pug()).pipe(gulp.dest('public/templates'));
  })
});

app.use(stylus({
  src: join(__dirname, 'public'),
  use: [nib()],
  import: ['nib']
}));

app.use(express.static(join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('*', function(req, res) {
  res.render('index');
});

gulp.start('default');

app.listen(8080, function() {
  console.log("Listening on 8080");
})
