// create an express app
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
    }
)

// start the server listening for requests
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
