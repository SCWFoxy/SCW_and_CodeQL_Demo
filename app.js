const express = require('express')
const app = express()
const port = 3000

//Modify the code below by uncommenting the line with the unsafe use of a parameter and commenting the line that uses the text Hello Guest

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/demo/:id', (req, res) => {
 //   res.send(`Hello Guest`)
  res.send(`Hello ${req.params.id}`)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
