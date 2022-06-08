const test = require('../middleware')
const express = require ('express');
const servesroute = express.Router();  
const path = require('path');
servesroute.get('/' ,test,(req, res) => {
    res.sendFile(path.resolve(__dirname, '../pages/Our Services.html'))


  })
  module.exports = servesroute;