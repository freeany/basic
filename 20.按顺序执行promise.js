const runPromiseIsSequence = (array, value) => {
	array.reduce((preVal, currentVal) => {
		return preVal.then(currentVal)
	}, Promise.resolve(value))
}

function p1(data) {
	return new Promise(resolve => {
		setTimeout(() => {
			console.log(data)
			resolve('resolve p1')
		}, 1000)
	})
}

function p2(data) {
	return new Promise(resolve => {
		setTimeout(() => {
			console.log(data)
			resolve('resolve p2')
		}, 1000)
	})
}

const arr = [p1, p2]

runPromiseIsSequence(arr, 'init')
