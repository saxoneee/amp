const express = require('express')
const app = express()
const port = 9001 // dbz duh

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`)
})
