// console.log(module)   需要改为.cjs

var val = 'this is commonjs'
var foo = 'foo'
//// module.exports = val


//// module.exports.val = val
//// module.exports.foo = foo

exports.val = val
exports.foo = foo