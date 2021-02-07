console.log('starting up');
const express = require('express');
const app = express();

const axios = require('axios');

app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log('/ route requested');
  res.send('<h1>Home</h1><div>Hello World</div>');
})

const morgan = require('morgan');
app.use(morgan('dev'))

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log('/ route requested');
  res.send('<h1>Home</h1><div>Hello World</div>');
});

app.get('/users', async (req, res) => {
  const {data: users} = await axios.get('http://jsonplace-univclone.herokuapp.com/users');
  res.send(users);
});

app.post('/users', (req, res) => {
  console.log('POST request made to /users');
  console.log('request object:', req)
  console.log('body:', req.body);
  // do something with the body, then send back a response
  res.send({message: 'nothing here yet', youSentUs: req.body})
})

app.listen(3000, () => {
  console.log('server is up');
})