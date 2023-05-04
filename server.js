const express = require('express')

const app = express()

app.get('/', (request, response) => {
    console.log(request)
    response.send('Hello')
})

app.listen(3000, () => {
    console.log('Server started on port 3000')
})