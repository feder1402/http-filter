/*jshint node:true */
'use strict';
/**
 * @fileOverview
 * Filters all outgoing requests using a provided callback
 */

var httpFilter = exports;
exports.constructor = function httpFilter(){};

var http = require('http');
var agent = require('./lib/agent');

httpFilter.init = function(cb) {
    http.globalAgent  = new agent.WrapHttpAgent(cb);
};
