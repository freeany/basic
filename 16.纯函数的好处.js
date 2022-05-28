/**
 * 纯函数的好处:
 *  1. 可缓存
 *      因为纯函数对相同的输入始终有相同的结果，所以可以把纯函数的结果缓存起来。
 *      比如一个函数需要计算很长的时间，但是执行的次数比较频繁，我们就可以在这个函数第一次执行完毕时，把结果缓存起来。
 *
 *        例如: hooks的useCallback
 *
 *  2. 可测试
 *      纯函数让测试代码更加方便
 *
 *  3. 并行处理
 *      3.1 在多线程环境下并行操作共享的内存数据很可能会出现意外情况。
 *      3.2 纯函数不需要访问共享的内存数据，所以可以在并行环境下任意运行纯函数(web worker)
 */

function memoize(fn) {
	let cache = {}
	return function () {
		const key = JSON.stringify(arguments)
		cache[key] = cache[key] || fn.apply(fn, arguments)
		return cache[key]
	}
}

function getArea(r) {
	console.log('r')
	return r * r
}

const getAreaWithMo = mo(getArea)
console.log(getAreaWithMo(3))
console.log(getAreaWithMo(4))
console.log(getAreaWithMo(3))
