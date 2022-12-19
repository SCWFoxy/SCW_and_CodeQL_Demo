const express = require('express')
const app = express()
const port = 3000

// Comment Line to test Pull Requests

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/demo/:id', (req, res) => {
    eval('console.log("something", ' + req.params.id + ')')
    res.send(`Hello ${req.params.id}`)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
