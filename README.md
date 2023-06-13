# Data Storage Unit Conversion API

The Data Storage Unit Conversion API allows you to convert a number and data storage unit to the most convenient unit.

## Base URLs

https://converter.cyclic.app<br>
https://converter.merkb.repl.co



### Query Parameters

The API accepts the following query parameters:

| Parameter | Type   | Required | Default Value | Description                                |
|-----------|--------|----------|---------------|--------------------------------------------|
| data      | number | Yes      | N/A           | The number to be converted.                 |
| unit      | string | No       | bytes         | The data storage unit (bytes, kilobytes, etc.). |

### Request Example

Example GET request:

```
GET https://converter.cyclic.app/?data=2345.678&unit=kilobytes
```


### Response Example

The API will respond with a JSON object containing the converted value.

Example response:

```json
{
  "result": "2.345678 megabytes"
}
```

### Usage example
You can use tools like cURL or javascript to make a GET request to the API.

#### cURL Example
```shell
curl "https://converter.cyclic.app/?data=2345.678&unit=kilobytes"
```

#### Javascript Example
```js
const data = 2345.678;
const unit = 'kilobytes';

// Construct the API URL with query parameters
const apiUrl = `https://my-api.net/?data=${data}&unit=${unit}`;

// Make the GET request to the API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const result = data.result;
    console.log(result); // Output: 2.345678 megabytes
  })
  .catch(error => {
    console.error('Error:', error);
  });

```

Using JQuery:
```js
const data = 2345.678;
const unit = 'kilobytes';

$.getJSON('https://converter.cyclic.app?data=' + data + '&unit=' + unit+ '',
function (data) {
        console.log()(data.contents);
    });
  });

```
