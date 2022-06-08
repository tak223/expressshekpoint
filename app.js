const express = require('express')
const path = require('path')
const app = express()
const servesroute = require("./routes/servesesroute");
const contactsroute = require("./routes/contactroute");
const homesroute = require("./routes/homeroutes");
let date= new Date();
let hour =date.getHours();
let day = date.getDay();


app.use("/", homesroute);
app.use("/ourserveses",servesroute)
app.use("/contactus",contactsroute)
app.use(express.static('./pages'));



  app.listen(8000, () => {
    console.log('server is listening on port 8000....')
  })
