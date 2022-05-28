const arr = [1, 3, 22, 6, 7]

// 实现一个forEach
function forEach(array, fn) {
	for (let i = 0; i < array.length; i++) {
		fn(array[i], i, array)
	}
}

// 测试用例
forEach(arr, function (item, index, arr) {
	// console.log(item, index, arr)
})

// 实现一个filter
function filter(array, fn) {
	let target = []
	for (let i = 0; i < array.length; i++) {
		if (fn(array[i], array)) {
			target.push(array[i])
		}
	}
	return target
}

// 测试
const filterResult = filter(arr, function (item) {
	return item % 2 === 0
})
// console.log(filterResult)

// 实现once
function once(fn) {
	let done = false
	return function () {
		if (!done) {
			done = true
			fn.apply(this, arguments)
		}
	}
}
function pay(num) {
	console.log('付款: ' + num)
}
const oncePay = once(pay)
oncePay(2)
oncePay(5)
oncePay(4)
oncePay(3)
