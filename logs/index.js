const express = require('express')
const app = express()
 
app.get('/qualquer-coisa', function (req, res) {
  res.send('Hello World!')
})

app.post('/qualquer-coisa', function (req, res) {
  res.send('POST Hello World')
})
 
app.listen(3003)