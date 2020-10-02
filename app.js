var express = require('express');
var exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');

const routes = require('./routes.js');

var app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static('assets'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/assets', express.static(__dirname + '/assets'));

routes(app);
 
app.listen(process.env.PORT || 5000);