const moment = require('moment')
const members = require('./members')
const users = require('./users')

const morgan = require('morgan')
const express = require('morgan')
const app = express()
const port = 3000
const hostname = '127.0.0.1'

app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send('This is the home page');
});

app.get('/about', (req, res) => {
  const currentDate = new Date().toISOString();
  const response = {
    Status: 'success',
    Message: 'response success',
    Description: 'Exercise #03',
    Date: moment().format(),
    Data: members
  };
  res.json(response);
});

app.get('/users', async (req, res) => {
  try {
    const usersData = await users.getUsers();
    res.json(usersData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
