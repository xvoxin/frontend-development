const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 4000

app.use(bodyParser.json())
const numbers = []

app.get('/api/', (req, res) => res.send('Eldo'))

app.get('/api/numbers/all', (req, res) => res.send(numbers))

app.post('/api/numbers', (req, res) => {
    const number = req.body.number
    numbers.push(number)
    res.send({ "message": "number was added" })
})

app.listen(port, () => console.log(`App listening on port ${port}`))