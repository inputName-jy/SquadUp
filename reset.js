const fs = require('fs');
const path = require('path');

fs.unlink(path.join(__dirname, 'dist', 'team.html'), (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Reset successful!');
});