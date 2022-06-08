const express = require ('express');
const contactsroute = express.Router();  
const path = require('path');
const test = require('../middleware')
contactsroute.get('/' ,test, (req, res) => {
    res.sendFile(path.resolve(__dirname, '../pages/Contact us.html'))

  })
  module.exports = contactsroute;