
const express = require('express');
const app = express();

// Simple logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Pass the request to the next middleware
});

// Middleware to add a custom header
app.use((req, res, next) => {
  res.setHeader('X-Custom-Header', 'CustomHeaderValue');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
