const express = require('express');
const app = express();
const members = require('./members');
const users = require('./users');

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('This is the home page');
});

app.get('/about', (req, res) => {
  const currentDate = new Date().toISOString();
  const response = {
    Status: 'success',
    Message: 'response success',
    Description: 'Exercise #03',
    Date: currentDate,
    Data: members.getMembers(),
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
