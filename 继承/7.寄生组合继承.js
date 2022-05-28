function extendsPrototype(fatherConstructor, childConstructor) {
	const prototype = Object.create(fatherConstructor.prototype)
	prototype.constructor = childConstructor
	childConstructor.prototype = prototype
}

function Person(name, age) {
	this.name = name
	this.age = age
	this.hobbies = ['干饭', 'lol', 'coding']
}

Person.prototype.say = function (msg) {
	console.log(this.name + '---' + msg)
}

function Student(name, age, score) {
	this.score = score
	Person.call(this, name, age)
}

extendsPrototype(Person, Student)

const s1 = new Student('xh', 19, 99)
const s2 = new Student('xm', 22, 80)
console.log(s1, s2)
console.log(s1.hobbies === s2.hobbies) // false
console.log(s1.say === s2.say) // true

// 最完美的方式
