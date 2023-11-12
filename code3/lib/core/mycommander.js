const myaction = require('./action')

const mycommander = function (program) {
    program
        .command('creat <project> [other...]')
        .alias('crt')//alias设置了crt为别名
        .description('创建项目')//添加说明
        .action(myaction)
}

module.exports = mycommander