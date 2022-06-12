const express = require('express')
const app = express()
var request = require('request')
const port = 5000

//Get the JSON data from the Api.
app.get('/getStudentDetails', (req, res) => {
  request(
      'https://www.hatchways.io/api/assessment/students',
      function(error, response, body){
          if(!error && response.statusCode === 200){
              var parseBody = JSON.parse(body)
              var Students = parseBody['students']
              res.send(Students)
          }
      }
  )
})

app.listen(port, () => console.log('example app listening on port',port))