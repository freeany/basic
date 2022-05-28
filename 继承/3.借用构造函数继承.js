function Person(name, age) {
	this.name = name
	this.age = age
	this.hobbies = ['干饭', 'lol', 'coding']

	this.eat = function () {
		console.log(this.name + '在吃饭')
	}
}

Person.prototype.say = function (message) {
	console.log(this.name + '说了: ' + message)
}

function Student(name, age, score) {
	this.score = score
	Person.call(this, name, age)
}

const s1 = new Student('小红', 18, 90)
console.log(s1, s1.say)
s1.eat()
const s2 = new Student('小美', 20, 98)
console.log(s2)
s2.eat()
console.log(s1.eat === s2.eat)
/**
 * 借用构造函数继承的优点：
 *  1. 所有的实例的属性都是不共享的，避免了数据操作影响其他数据
 *  2. 可以向父类构造函数传参
 */

/**
 * 借用构造函数继承的缺点:
 *  1. 所有的实例的属性都是不共享的，这样函数也是不共享的，但是父类中函数本来就应该被共享啊。(这不是缺点，放到函数内部的this.fn，就是应该每个实例单独一份)
 *  2. 子类无法访问父类的原型(prototype), 即子类无法访问父类prototype中的属性，而共享的方法一般都是放到父类的prototype上的。(这)
 */
