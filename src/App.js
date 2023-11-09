const express = require('express')
const morgan = require("morgan");
const path = require("path");
const app = express();
app.set('port', 3000);
require('ejs');
const bodyParser =  require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use('/src', express.static(path.join(__dirname, '/views')));
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));




app.get('/', (req, res) => {
    res.render('index');
});



console.log(path.join(__dirname, 'views'))
app.listen(app.get('port'));

console.log(`Server Conectado on port ${app.get('port')}`);
