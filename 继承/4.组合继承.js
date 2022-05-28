function Person(name, age) {
	this.name = name
	this.age = age
	this.hobbies = ['干饭', 'lol', 'coding']
}

Person.prototype.say = function (message) {
	console.log(this.name + '说了: ' + message)
}

function Student(name, age, score) {
	this.score = score
	Person.call(this, name, age) // 普通属性使用 借用构造函数继承
}
Student.prototype = new Person() // 函数使用原型链继承
Student.prototype.constructor = Student

const s1 = new Student('小红', 18, 80)
console.log(s1)
const s2 = new Student('小明', 20, 71)
console.log(s2)
console.log(s1.say === s2.say) // true

/**
 * 组合继承的优点:
 *  1. 子类实例从父类继承过来的普通属性都是独立的，不会造成数据污染的问题。
 *  2. 方法从父类原型链中获取，方法被共享。
 *  3. 可以向父类构造函数传参
 */

/**
 * 组合继承的缺点:
 *  1. 子类的prototype被重写了，即子类函数prototype中的construct被移除了
 *      1.1 改进: Student.prototype.constructor = Student
 *        1.1.1 还是不完美，外界可以通过遍历得到constructor，我们可以使用Object.defineProperty去定义constructor。
 *  2. 需要调用两次父类的构造方法。一次是Person.call 一次是new Person
 */
