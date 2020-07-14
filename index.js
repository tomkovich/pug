const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Bison'
  }) 
})

app.get('/home', (req, res) => {
  res.render('home', {
    title: 'Home'
  }) 
})

app.get('/tour', (req, res) => {
  res.render('tour', {
    title: 'Tour'
  }) 
})

app.listen(8888, () => {
  console.log("It's OK! 🌸")
})