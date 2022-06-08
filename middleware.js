
const path = require('path');
const test = (req,res,next) => { 
    let date= new Date();
let hour =date.getHours();
//
let day = date.getDay();
    
    if (( 18 > hour && hour > 7  ) &&( 7  > day && 0 < day) ) {
        
    } else {
        res.sendFile(path.resolve(__dirname,'./pages/error.html'));
    }
  next();
}
module.exports= test;