'use strict';

var os = require('os');

function get(req, res) {
   
    res.send('Hello Casey from the cli again at - >'+os.hostname());
           
}



module.exports = {
    get: get
   
}
