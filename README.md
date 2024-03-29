# Dummy Data Generator

**Simple dummy data generator API. Send one single request to generate multiple types of dummy data.**
## How to run
In the main directory execute `docker build -t dummydatagenerator .`
Then to run, execute `docker run -p 8080:8080 -d dummydatagenerator`
## Documentation
The api is used by sending HTTP POST Requests. 

**Synthax:** `<server ip>:8080/:format/:fields`

*format* - **JSON/XML/CSV**

*fields* - **"malename", "femalename", "lastname", "country", "city", "address", "zipcode"**

**Synthax for multiple types of dummy data:**

*Example:*
`<server ip>:8080/json/malename+femalename+lastname+country+city+address+address+address+zipcode`

*Possible output:* 
```json
{
  "address": [
    "567 Walnut Street",
    "111 Pine Street",
    "222 Pine Street"
  ],
  "city": [
    "Bissau"
  ],
  "country": [
    "Chad"
  ],
  "femalename": [
    "Stella"
  ],
  "lastname": [
    "Gill"
  ],
  "malename": [
    "Austin"
  ],
  "zipcode": [
    "9035"
  ]
}
```
