'use strict';

 var concatenateNames = async (name, surname) =>
  {
    const sleep = require('util').promisify(setTimeout);
     var wholeName = name + " " + surname;
     await sleep(200);
     return wholeName;
  }

module.exports = concatenateNames