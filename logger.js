const console = require('console');
const fs = require('fs');

function logMessage(message) {
    fs.appendFile('log.txt', message + '\n', (err) => {
        if (err) {
            console.error(err);
        }
    });
}

module.exports = logMessage;