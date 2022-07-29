const http = require("http")
const port =  3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'})
    res.end('Api em Node')
})

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})