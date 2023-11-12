#! /usr/bin/env node

const {program} = require('commander')
const myhelp = require('../lib/core/help')
const mycommander = require('../lib/core/mycommander')

myhelp(program)
//创建出creat命令选项 项目名字 其他指令接收

mycommander(program)


//process.argv 属性返回一个数组，这个数组包含了启动Node.js进程时的命令行参数，
program.parse(process.argv)
