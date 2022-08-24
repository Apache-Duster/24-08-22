const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function(req, res) {
res.writeHead(200, {'Content-Type': 'text/HTML'})
fs.readFile('index.html', function(eror, data) {
    if (eror) {
        res.writeHead(404)
        res.write('404 Not Found')
    } else {
        res.write(data)
    }
res.end()

})

server.listen(port, function(error) {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port', port)
    }
})