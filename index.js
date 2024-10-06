const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON body
app.use(bodyParser.json());

// Callback endpoint
app.post('/callback', (req, res) => {
  const enterpriseToken = req.body.enterpriseToken; // Capture the EMM token
  const enterpriseName = req.body.enterpriseName; // Optional, capture enterprise name
  
  console.log('Received EMM Token:', enterpriseToken);
  console.log('Enterprise Name:', enterpriseName);

  // Here you can store the token in your database or perform other actions.

  // Send a response back
  res.status(200).send('Callback received successfully.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
