#!/usr/bin/env node

"use strict";

var ServiceRunner = require('service-runner');
new ServiceRunner().start();

exports.setup = function(parsoidConfig) {

        parsoidConfig.setMwApi('wikiwikiwikimp', { uri: 'https://ecwuuuuu.com/wikipedia/index.php/' });

};