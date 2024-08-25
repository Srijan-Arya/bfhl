const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Helper function to get highest lowercase alphabet
function getHighestLowercaseAlphabet(arr) {
  const lowercaseAlphabets = 'abcdefghijklmnopqrstuvwxyz';
  let highestAlphabet = '';

  arr.forEach((item) => {
    if (lowercaseAlphabets.includes(item.toLowerCase())) {
      if (item.toLowerCase() > highestAlphabet) {
        highestAlphabet = item.toLowerCase();
      }
    }
  });

  return highestAlphabet;
}

// POST endpoint
app.post('/bfhl', (req, res) => {
  const { numbers, alphabets } = req.body;

  if (!Array.isArray(numbers) || !Array.isArray(alphabets)) {
    return res.status(400).json({
      is_success: false,
      user_id: 'john_doe_17091999',
      college_email_id: 'john.doe@college.edu',
      college_roll_number: '123456',
      message: 'Invalid input format'
    });
  }

  const highestLowercase = getHighestLowercaseAlphabet(alphabets);

  return res.json({
    is_success: true,
    user_id: 'john_doe_17091999',
    college_email_id: 'john.doe@college.edu',
    college_roll_number: '123456',
    numbers: numbers,
    alphabets: alphabets,
    highest_lowercase_alphabet: highestLowercase
  });
});

// GET endpoint
app.get('/bfhl', (req, res) => {
  res.json({
    operation_code: 1
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
