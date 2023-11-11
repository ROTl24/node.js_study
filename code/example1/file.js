var fs = require('fs')

fs.readFile('./a.text','utf8',function(err,data){
    if(!err){
        var newData = data + '8888';
        fs.writeFile('./a.text',newData,function(err){
            if(!err){
                console.log('追加成功')
            }
        })
    }
})