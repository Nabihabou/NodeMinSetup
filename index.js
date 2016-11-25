var express = require('express');
var stylus = require('express-stylus');
var nib = require('nib');
var join = require('path').join;
var app = express();

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

app.listen(8080, function() {
  console.log("Listening on 8080");
})
