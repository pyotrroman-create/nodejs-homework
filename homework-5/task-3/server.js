import http from 'http';
const server = http.createServer((req, res) => {
    if (req.method === 'PUT') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain')
        res.end('PUT request processed');
    } else if (req.method === 'DELETE') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('DELETE request processed');
    }
});

server.listen(3000, () => {
    console.log('Server running on port 3000')
});