// define定义模块， return类似于module.exports
define(['foo'], function (require, factory) {
	'use strict'
	console.log(require)
	return {
		bar: true
	}
})
