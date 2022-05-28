// import { name, age, say } from './foo.js'

// setTimeout(() => {
// 	console.log(name, age)
// 	say('hhaha')
// }, 2000)

// 2.
// if (true) {
// 	import('./foo.js').then(res => {
// 		const { name, age, say } = res

// 		console.log(name, age)
// 		say('hhaha')
// 	})
// }

// 3.
import('./foo.js').then(res => {
	// res在不同的地方得到的结果不一样
	// const { name, age, say } = res

	console.log(JSON.parse(JSON.stringify(res)))
	setTimeout(() => {
		const { name, age, say } = res
		console.log(name, age)
		say('hhaha')
	}, 2000)
})

// 得出结论:
/*
 	import xx from './foo.js' 或者 import('./foo.js').then(xx => {})
		在编译阶段，编译遇到import关键字，此时代码还未执行。此时xx是undefined。当代码运行时，我们的代码需要xx的时候，这个时候重新去foo模块中寻找变量，然后在给xx赋值，所以 esmodule是完全的引用(即使基本数据类型也会找最新的)，即当需要用到xx的时候，会去foo模块中找到最新的变量，然后使用这个最新的值。
 */
