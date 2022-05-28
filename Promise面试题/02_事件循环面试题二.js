async function async1() {
	console.log('async1 start')
	await async2()
	console.log('async1 end') // 从await下一行开始的代码，相当于放到了async2函数return 的promise的then方法中了。
}

async function async2() {
	console.log('async2')
}

console.log('script start')

setTimeout(function () {
	console.log('setTimeout')
}, 0)

async1()

new Promise(function (resolve) {
	console.log('promise1')
	resolve()
}).then(function () {
	console.log('promise2')
})

console.log('script end')

// script start
// async1 start
// async2
// promsie1
// script end
// async1 end
// promise2
// setTimeout
