const express = require('express');

const app = express();
const port = 3000;

// Convert data storage unit endpoint
app.get('/', (req, res) => {
  const data = parseFloat(req.query.data);
  const unit = req.query.unit || 'bytes';

  // Define the data storage units and their respective values in bytes
  const units = {
    bytes: 1,
    kilobytes: 1024,
    megabytes: 1024 ** 2,
    gigabytes: 1024 ** 3,
    terabytes: 1024 ** 4,
    petabytes: 1024 ** 5,
    exabytes: 1024 ** 6,
  };

  // Check if the input is a valid number
  if (isNaN(data)) {
    return res.status(400).json({ error: 'Invalid input. Please provide a valid number.' });
  }

  // Check if the input unit is valid
  if (!units.hasOwnProperty(unit)) {
    return res.status(400).json({ error: 'Invalid unit. Please provide a valid data storage unit.' });
  }

  // Convert the value to bytes
  const bytes = data * units[unit];

  // Find the most convenient unit
  let resultUnit = 'bytes';
  let resultValue = bytes;

  for (const key in units) {
    if (units.hasOwnProperty(key) && bytes >= units[key]) {
      resultUnit = key;
      resultValue = bytes / units[key];
    } else {
      break;
    }
  }

  // Format the result with up to 6 decimal places
  const formattedValue = resultValue.toFixed(6);

  // Return the result in the format ###... UN
  const result = `${formattedValue} ${resultUnit}`;
  res.json({ result });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
