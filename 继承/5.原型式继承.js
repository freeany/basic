function createObj(obj) {
	const Fn = function () {}
	Fn.prototype = obj
	return new Fn()
}

const obj = {
	name: 'ww',
	hobbies: ['干饭', 'lol', 'coding'],
	say(msg) {
		console.log(this.name + '----' + msg)
	}
}

const s1 = Object.create(obj)
console.log('s1: ', s1)
const s2 = createObj(obj) // 在Object.create只传入一个参数的情况下， 全等于Object.create
console.log('s2: ', s2)

console.log(s1.hobbies === s2.hobbies) // true
console.log(s1.say === s2.say) // true

/**
 * 原型式继承的优点：
 *  1. 父类中的方法被共享，即可被复用
 */

/**
 * 原型式继承的缺点：
 *  1. 父类中的引用数据类型也被被共享，子类实例对共享的引用数据类型进行操作时，会造成数据污染。
 *  2. 不能覆盖父类参数，即不能向父类传递参数
 */

// 本质上用 Object.create创建了一个原型链基于传入参数的对象。 有继承那个意思，但是不是好的继承。
