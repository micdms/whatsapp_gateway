const fs = require('fs/promises');

const command = {
    '/ping': () => {
        return 'running';
    },
}

module.exports = command;