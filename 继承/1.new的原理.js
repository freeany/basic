function myNew(fn, ...args) {
	let obj = {}
	obj.__proto__ = fn.prototype // 原型链继承...
	const r = fn.call(obj, ...args)
	if (r instanceof Object) {
		return r
	}
	return obj
}

function Person(name, age) {
	this.name = name
	this.age = age
}

Person.prototype.say = function (message) {
	console.log(this.name + '说了' + message)
}

const p = myNew(Person, 'ee', 'hh')
console.log(p)
p.say('gq')
