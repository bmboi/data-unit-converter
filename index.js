function conv(numberAndUnit) {
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

  // Split the input into number and unit
  const [number, unit] = numberAndUnit.split(' ');

  // Convert the number to a floating-point value
  const value = parseFloat(number);

  // Check if the input is a valid number
  if (isNaN(value)) {
    return 'Invalid input. Please provide a valid number and unit separated by a space.';
  }

  // Check if the input unit is valid
  if (!units.hasOwnProperty(unit)) {
    return 'Invalid unit. Please provide a valid data storage unit.';
  }

  // Convert the value to bytes
  const bytes = value * units[unit];

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
  return `${formattedValue} ${resultUnit}`;
}



var http = require('http');
http.createServer(function (req, res) {
let params = new URL(window.location).searchParams;
let out = params.value + ' ' +params.unit
    console.log(`Just got a request at ${req.url}!`)
    res.write(out);
    res.end();
}).listen(process.env.PORT || 3000);
