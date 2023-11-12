#! /usr/bin/env node

//表示用系统环境变量去运行

// console.log('这里是mycli')

//先创建bin以及其目录下的.js文件再执行npm init

//2.npm link   将其作为全局命令

//// if(process.argv[2] == '--help'){
////     console.log('获取到了命令参数');
//// }

//process是命令台
const {program} = require('commander')

//Commander使用option()方法来定义选项，同时可以附加选项的简介。每个选项可以定义一个短选项名称（-后面接单个字符）和一个长选项名称（--后面接一个或多个单词），使用逗号、空格或|分隔。
program.option('-f --framwork <framwork>','设置框架')
program.parse(process.argv)

