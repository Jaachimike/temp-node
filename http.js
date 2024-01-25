const http = require('node:http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to LSD')
    }
    if (req.url === '/about') {
        res.end('Our short history')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>You seem to be lost</p>
    <a href='/'>Here is a map</a>`)
})

server.listen(3000)