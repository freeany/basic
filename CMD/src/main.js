// define 定义模块内部变量和数据， return 导出次模块的数据，return类似于module.exports
define(function (require, exports, module) {
	console.log(exports, module)
	const baz = require('./baz')
	console.log(baz)
	return {
		num: 900
	}
})
