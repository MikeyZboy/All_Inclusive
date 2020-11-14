const AppRouter = require('./routes/AppRouter')
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const connection = require('./db/connection')

const PORT = process.env.PORT || 8000
const app = express()

app.use(helmet())
app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.disable('X-Powered-By')
app.get('/', (req, res) => res.send({msg: 'SeRvEr WoRkInG!'}))
app.use('/api', AppRouter)

app.listen(PORT, async () => {
    try {
        await connection
        console.log('Database Connected')
        console.log(`App listening on port ${PORT}!`)
    } catch (error) {
        throw new Error('Connection Error')
    }
})

