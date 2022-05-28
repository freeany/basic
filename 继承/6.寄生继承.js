// 模拟Object.create
function createObj(obj) {
	const Fn = function () {}
	Fn.prototype = obj
	return new Fn()
}

// 扩展创建后对象的属性，但是本质上毫无意义，扩展都算不上
function createExtendObj(obj) {
	const cloneObj = createObj(obj)
	cloneObj.say2 = function () {
		console.log('子类吃')
	}
	return cloneObj
}

const obj = {
	name: '小明',
	hobbies: ['干饭', 'lol', 'coding'],
	say(message) {
		console.log(this.name + '---' + message)
	}
}

const c1 = createExtendObj(obj)
const c2 = createExtendObj(obj)
console.log(c1)
console.log(c2)

console.log(c1.say === c2.say) // true
console.log(c1.say2 === c2.say2) // false
console.log(c1.hobbies === c2.hobbies) // true

// 还是没有解决原型式继承的问题。
// 只是扩展了一下Object.create方法。
