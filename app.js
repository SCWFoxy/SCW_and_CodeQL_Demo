const express = require('express')
const app = express()
const port = 3000

//Comment Line
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/demo/:id', (req, res) => {
 //   To make a change comment out the safe code where it outputs text and undo the comment for the unsafe code that uses a parameter
 //   Reset by reversing the comment lines
    
 //   res.send(`Hello Guest`)
      res.send(`Hello ${req.params.id}`)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
