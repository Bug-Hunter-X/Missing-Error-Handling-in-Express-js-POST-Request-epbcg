const express = require('express');
const app = express();
app.use(express.json());

app.post('/users', (req, res) => {
  const user = req.body;
  // Check if user object exists and contains necessary fields
  if (!user || !user.name || !user.email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  try {
    //Further data validation or processing can be added here
    console.log('Received user:', user);
    res.status(201).send();
  } catch (error) {
    console.error('Error processing user:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(3000, () => console.log('Server listening on port 3000'));