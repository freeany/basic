function Person(name, age) {
	this.name = name
	this.age = age
	this.hobbies = ['干饭', 'lol', 'coding'] // 原型链继承，如果父类方法是引用数据类型，子类访问后改变这个引用数据类型，那么父类中这个数据也会改变。无法实现我们(继承==》复制)的效果。
}

Person.prototype.say = function (message) {
	console.log(this.name + '说了: ' + message)
}

function Student(score) {
	this.score = score
}

const p1 = new Person('人类', 18) // p1的__proto__ 指向了 Person的prototype
console.log(p1)
Student.prototype = p1

const s1 = new Student('小王', 90)
// console.log(s1)
// 小王喜欢跳舞
s1.hobbies.push('跳舞')

const s2 = new Student('小栗', 80)
// 小栗喜欢唱歌
s1.hobbies.push('唱歌')

// 打印s1的hobbies 和 h2的hobbies发现 hobbies: ['干饭', 'lol', 'coding', '跳舞', '唱歌'], 小王有了小栗的爱好，小栗有了小王的爱好。这显然是不合理的。
console.log(s1.hobbies, s2.hobbies)

/**
 * 原型链继承的缺点:
 *  1. 子类的原型被重写，prototype中的construct被移除
 *  2. 多个实例对父类引用数据类型的操作会造成实例之间的属性会相互影响(操作的是同一个引用数据类型)
 *  3. 当创建子类类型时，我们无法在每一个子类上调用父类的构造函数进行传参。也就是说父类构造函数参数写死了。固定住了。
 */

/**
 * 原型链继承的优点:
 * 	1. 父类所有的方法都会被共享。因为方法本来就是要被共享的。
 */
