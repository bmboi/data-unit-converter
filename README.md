# Data Storage Unit Conversion API

The Data Storage Unit Conversion API allows you to convert a number and data storage unit to the most convenient unit.

## Base URL

- https://converter.cyclic.app/

### Request

Send a POST request to the `/convert` endpoint with the following parameters in the request body:

| Parameter     | Type   | Description                                           |
|---------------|--------|-------------------------------------------------------|
| numberAndUnit | string | The number and data storage unit separated by a space. |

Example request body:

```json
{
  "numberAndUnit": "2345.678 kilobytes"
}
```
### Response

The API will respond with a JSON object containing the converted value.

Example response:

```json
{
  "result": "2.345678 megabytes"
}
```

### Usage Example

You can use tools like cURL or Postman to send a request to the API.


#### cURL Example
```curl
curl -X POST -H "Content-Type: application/json" -d '{"numberAndUnit": "2345.678 kilobytes"}' https://converter.cyclic.app/
```



#### Postman Example
- Open Postman.
- Set the request method to POST.
- Set the request URL to https://converter.cyclic.app/
- Set the request body to JSON format and provide the numberAndUnit parameter.
- Click on "Send" to send the request and view the response.