"use strict";
// set default process env variable
if (!process.env.target) {
    process.env.target = 'es';
}
require('./tasks');
