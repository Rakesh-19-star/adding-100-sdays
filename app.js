const express = require('express')
const app = express()
const addDays = require('date-fns/addDays')
app.get('/', (request, response) => {
  const date = new Date()
  const day = date.getDay()
  const month = date.getMonth()
  const year = date.getFullYear()
  const result = addDays(new Date(year, month, day), 100)
  const finalresult = `${result.getDay()}/${
    result.getMonth() + 1
  }/${result.getFullYear()}`
  response.send(finalresult)
})
app.listen(3000)
module.exports = app
