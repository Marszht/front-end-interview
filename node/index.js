const express = require('express')
const app = express()

app.get('/', (req, res) => {
  let { callback } = req.query
  res.end(`${callback}('告诉你一声， jsonp跨域成功')`)
})

app.listen(3000)