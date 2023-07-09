
const express = require('express')
const connectToMongo = require('./db')
const app = express()
const port = 5000

connectToMongo()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/' , require('./routes/createUser'))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})