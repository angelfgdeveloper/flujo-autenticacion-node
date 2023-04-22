// Load environment variables
require('dotenv').config();

// Import Express and utilities
const express = require('express');
const { request, response } = require('express');

const { getCredentials, getToken } = require('./helpers/headers');
const { signToken, verifyToken, validateExpiration } = require('./helpers/token');
const { getUser } = require('./helpers/users');

// Declare PORT from env variable
const PORT = process.env.PORT;

// Initialize Express
const app = express();

app.use(express.json());

app.get('/api/public', (req = request, res = response) => {

  res.status(200).json({
    message: "I'm public"
  });

});

app.get('/api/private', (req = request, res = response) => {

  try {
    const token = getToken(req);
    const payload = verifyToken(token);

    validateExpiration(payload);

    res.status(200).json({
      message: "I'm private"
    });

  } catch (error) {
    res.status(401).json({ error: error.message });
  }

});

app.post('/api/token', (req = request, res = response) => {

  try {
    const { username, password } = getCredentials(req);
    const user = getUser(username, password);
    const token = signToken(user);

    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

});

// Start the server
app.listen(PORT, () => console.log(`🌐 Listening on http://localhost:${ PORT }`));
