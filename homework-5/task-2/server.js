import http from 'http';
import fs from 'fs';
const server = http.createServer((req, res) => {
    try {
        throw new Error('Test server error');
    } catch (error) {
        fs.appendFile('errors.log', error.stack + '\n', (err) => {
            if (err) {
                console.error('Error writing to file:', err)
            }
        });

        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Internal Server Error');
    }
});
server.listen(3000, () => {
    console.log('Server running on port 3000');
});