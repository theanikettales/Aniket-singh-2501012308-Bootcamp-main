// const http = require('http')
import http from 'http'
const port = 4000
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<h1>Welcome to Backend</h1>')
    } else if (req.url === '/about') {
        res.end('<h1>This is About Page</h1>')
    } else if (req.url === '/contact/mobile') {
        res.end('<h1>This is contact Page </h1>')
    } else if (req.url === '/home') {
        res.end(' This is Home page ')
    }
    else {
        res.end('<h1>No data Found</h1>')
    }
})
server.listen(port, () => {
    console.log('server is listen in port: ', port)
})






