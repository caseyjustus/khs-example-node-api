'use strict';

var os = require('os');

function get(req, res) {
   
    res.send('Hello Casey from - >'+os.hostname());
           
}



module.exports = {
    get: get
   
}
