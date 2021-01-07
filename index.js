let express = require('express');
let pug = require("pug")
let path = require('path')
let app = express();

app.set(path.join(__dirname, './views'))
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, './public')));



app.get('/', (req, res) => res.render('home'))

app.listen(3000, () => console.log('Test running'))