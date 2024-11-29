const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send(req.headers)
})

app.post('/hook_test', (req, res) => {
  const rawBody = req.body;
  console.log(rawBody.toString('utf-8'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
