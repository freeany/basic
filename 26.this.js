// 在全局定义的function 我们通常称为函数
// 在对象内定义的function，我们通常称为方法
// 而this一般出现在方法中。

function foo() {
	console.log(this)
}

// 1. 全局调用this
foo()

// 2. 对象调用
var obj = {
	name: 'why',
	foo
}

// obj调用this，改变this指向
obj.foo()

// 3. apply
foo.apply('aaa')

/**
 * 1. 函数在调用时，JavaScript会默认给this绑定一个值
 * 2. this的绑定和定义的位置（编写的位置）没有关系
 * 3. this的绑定和调用方式以及调用的位置有关系
 * 4. this是在运行时被绑定的。
 *
 *  那么绑定的规则是什么？
 *  1. 默认绑定
 *    a. 独立函数调用
 *        eg: foo()
 *  2. 隐式绑定
 *    a. 使用对象去调用这个函数, 谁调用，我指向谁
 *        eg: obj.foo()
 *  3. 显式绑定
 *    a. call， apply， bind
 *     bind的优先级高于call和apply
 *      当call apply bind传入null，undefined时，自动将this绑成全局对象。
 *  4. new绑定
 * 			new绑定优先级高级显式绑定，但是记住：这个是构造函数的this。而构造函数内部的this.fn = xxx 这种函数的this还是按照以前的规则来。
 *
 */
