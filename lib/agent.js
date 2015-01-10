/*jshint node:true */
'use strict';

var util = require('util');
var http = require('http');
var httpAgent = http.Agent;

var _ = require('lodash');

/**
 * Create agent wrapper
 */
function WrapHttpAgent(cb) {
    httpAgent.call(this);

    // Override addRequest methods on the global agent
    var orig = _.pick(this, 'addRequest');
    this.addRequest = function(req, host, port, localAddress) {
        cb(req);
        return orig.addRequest.call(this, req, host, port, localAddress);
    };
}
util.inherits(WrapHttpAgent, httpAgent);
exports.WrapHttpAgent = WrapHttpAgent;
