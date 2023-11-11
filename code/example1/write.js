var fs = require('fs');


fs.writeFile('./a.text','6666',function(err){
    console.log(err);
})