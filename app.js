var httpFilter = require('./index.js');

httpFilter.init(function(req) {
    console.log('Retrieving: ' + req.method + ' ' + req.path);
});

var request = require('request');
request('http://www.google.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
});
