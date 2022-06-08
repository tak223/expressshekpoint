
const express = require ('express');
const homeroute = express.Router(); 
const path = require('path');
const test = require('../middleware') 

homeroute.get("/",test,(req, res) => { 
    res.sendFile(path.resolve(__dirname,'../pages/Home.html'))
  })

module.exports = homeroute;