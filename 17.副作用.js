/**
 *
 */

// 副作用会让一个函数变的不纯
// 不是纯函数
let min = 18
function checkAge(age) {
	return age >= min
}
// 因为函数内部使用了外部函数min，而我们在函数的执行时无法保证min不变。而min对于这个函数来说就是副作用。

// 副作用会让一个函数变的不纯，纯函数根据相同的输入返回相同的输出，如果函数依赖于外部的状态就无法保证输出相同，就会带来副作用。
// 把上面的函数改成纯函数

const min = 18
function checkAge(age) {
	return age >= 18
}
// 上面这个函数就变成了纯函数
// 缺点： 改变了min的定义，使其变成了const
// 也可以这样
function checkAge(age) {
	let age = 18
	return age >= 18
}
// 缺点：硬编码

// 上面的缺点都可以通过柯里化解决。

// 副作用的来源:
// 配置文件，用户输入，数据库数据...

// 所有的外部交互都有可能代理副作用，副作用也使得方法通用性下降不适合扩展和可重用性，同时副作用会给程序带来安全隐患与不确定性，但是副作用不可能被全都被禁止，尽可能的控制它们在可控范围内发生。

// 我们使用柯里化解决上面的问题
function checkAge(min) {
	return function (age) {
		return age >= min
	}
}
// es6的箭头函数改写
const checkAge = min => age => age >= min

const checkAge18 = checkAge(18)
console.log(checkAge18(20))
console.log(checkAge18(14))

// 柯里化
// 当一个函数有多个参数的时候先传递一部分参数调用它(这部分参数以后永远不变)
// 然后返回一个新的函数接收剩余的参数，返回结果。

// 函数的形参默认值，只有在实参为undefined时才会触发，其他的比如传入null false 0 '' 这些都不会触发
