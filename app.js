const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const userRoute = require('./routes/userRoute')

const logger = require('./middlewares/logger')
const auth = require('./middlewares/userAuth')

const app = express()

app.use(bodyParser.json())
app.use(logger)
app.use(auth)

app.use('/api/books',userRoute)

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}/api/books`);
})
