
const express = require('express')
const connectToMongo = require('./db')
const app = express()
var cors = require('cors')
const port = 5000

connectToMongo()
app.use(express.json())

app.use(cors())
// End point routes 
app.use('/api/' , require('./routes/auth'))
app.use('/api/' , require('./routes/display'))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})