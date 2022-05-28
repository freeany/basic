/*
 lodash中的柯里化
  _.curry(func)
    1. 功能: 创建一个函数，该函数接收一个或多个func的参数，如果func所需要的参数都被提供则执行func并返回执行的结果，否则继续返回该函数并等待接收剩余的参数
    2. 参数: 需要柯里化的函数
    3. 返回值: 柯里化后的函数
 */

/**
 * xmg说的好处
 * 1. 让函数的职责单一， 方便函数进行组合
 * 2. 可以让逻辑复用， 参考14.闭包案例.html这个案例
 */
function add(a, b, c) {
	const x = a + 10 // 假如这里有一大堆逻辑，产生了x
	const y = b + a + 10 // 假如这里有一大堆逻辑，产生了y
	const z = c * a * b // 假如这里有一大堆逻辑，产生了z
	return x + y + z
}

// 柯里化
function curry(func) {
	return function curried(...args) {
		if (args.length < func.length) {
			return function () {
				return curried(...[...args, ...arguments])
			}
		}
		return func(...args)
	}
}

const fn = curry(add)
// const r = fn(1, 2, 3)
// const r = fn(1)(2, 3)
const r = fn(1, 2)(3)
console.log(r)

/**
 *
 * 总结:
 *  1. 柯里化可以让我们给一个函数传递较少的参数，得到一个已经记住了某些固定参数的新函数。
 *  2. 这是一种对函数参数的 "缓存" // 闭包
 *  3. 让函数变的更灵活，让函数的颗粒度更小
 *  4. 可以把多元函数转换成一元函数， 可以组合使用函数产生强大的功能。
 */
