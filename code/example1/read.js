var fs = require('fs');
//require指的是引入模块
// console.log(fs);

fs.readFile('./a.text','utf8',function(err,data){
    console.log(err);
    console.log(data);
})