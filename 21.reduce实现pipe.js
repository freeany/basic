function sum(a, b) {
	return a + b
}
function toUpper(str) {
	return str.toUpperCase()
}
function add(str) {
	return `**${str}**`
}

function pipe(...fns) {
	return function (...args) {
		const first = fns.shift()
		return fns.reduce((preValue, fn) => {
			return fn(preValue)
		}, first(...args))
	}
}

// function pipe(...fns) {
// 	return fns.reduce((preV, currentV) => {
// 		return (...args) => {
// 			return currentV(preV(...args))
// 		}
// 	})
// }
// 精简
// const pipe = (...fns) =>
// 	fns.reduce(
// 		(acc, fn) =>
// 			(...args) =>
// 				fn(acc(...args))
// 	)

// function pipe(...fns) {
// 	return function (...value) {
// 		return fns.reduce((pre, fn) => {
// 			if (!Array.isArray(pre)) pre = [pre]
// 			return fn.apply(fn, [...pre])
// 		}, value)
// 	}
// }

// const fn = pipe(sum, pipe(toUpper, add))
// 调试， 也可以用trace
// function log(v) {
// 	console.log(v)
// 	return v
// }

// 管道的形式
function trace(msg) {
	return v => {
		console.log(msg + ': ' + v)
		return v
	}
}
const fn = pipe(sum, trace('sum后'), toUpper, trace('toUpper后'), add)
const r = fn('hello', 'world')
console.log(r)
