#!/usr/bin/env node

/**
 * Module dependencies.
 */

 const httpRunner = require('./httpServ')
 const wsRunner = require('./WSServ')
 
 
 const run = () => {
    const httpServer = httpRunner();
     //WS Server
     wsRunner(httpServer);
     
 }
 
 module.exports = run;