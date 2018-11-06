
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// configure bodyParser Express middleware
app.use(bodyParser.json())

// configure default static route
app.use(express.static(`${__dirname}/public`))

// configure route(s)
app.post('/api/echo', (req, res) => {
  const body = req.body
  const msg = body.msg

  if (typeof msg === 'undefined'){
    res.status(400).send()
    return
  }
  
  res.json({ data: msg })
})

// start HTTP server on port 8000
const port = 8000
app.listen(port)
console.log(`Listening on http://localhost:${port}`)
