/*
 * Sample app using http-filter to log all outgoing calls
 */
var httpFilter = require('./index.js');

httpFilter.init(function(req, host) {
    console.log('Outgoing request: ' + req.method + ' ' + host);
});

var request = require('request');
request('http://www.google.com', function (error, resp) {
    if (!error && resp.statusCode == 200) {
        console.log('Got ' + resp.body.length + ' bytes');
    }
});
