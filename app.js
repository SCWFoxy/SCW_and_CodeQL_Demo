const express = require('express')
const app = express()
const port = 3000

//Comment Line
// Emilys special comment
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/demo/:id', (req, res) => {
    res.send(${Req.params.id})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
