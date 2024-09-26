import express from 'express'

const app = express();

const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Basic route to handle GET requests
app.get('/', (req, res) => {
  res.send('Hello, Express.js!');
});

// Example POST route
app.post('/data', (req, res) => {
  const receivedData = req.body;
  res.send(`Received data: ${JSON.stringify(receivedData)}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});