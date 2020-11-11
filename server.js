const connection = require('./db/connection')
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
//const AppRouter = require('./routes/AppRouter)

const PORT = process.env.PORT || 8000
const app = express()

app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => res.send({msg: 'SeRvEr WoRkInG!'}))
//confirmed connection 11.11;13:42:00
// app.use('/api', AppRouter)

app.listen(PORT, async () => {
    try {
        await connection
        console.log('Database Connected')
        console.log(`App listening on port ${PORT}!`)
    } catch (error) {
        throw error
    }
})