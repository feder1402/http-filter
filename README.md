# http-filter
Filters all outgoing http requests using a provided callback


    /*
     * Sample app using http-filter to log all outgoing calls
     */
    var httpFilter = require('./index.js');

    // Initialize filter passing the callback to call for every outgoing request
    httpFilter.init(function(req, host) {
        console.log('Outgoing request: ' + req.method + ' ' + host);
    });

    // Now make some calls! 
    var request = require('request');
    request('http://www.google.com', function (error, resp) {
        if (!error && resp.statusCode == 200) {
            console.log('Got ' + resp.body.length + ' bytes');
        }
    });


## Manual tests
Once finished, this should be published as a package to NPM but for now use this to see how it works:


    npm install
    node app.js


