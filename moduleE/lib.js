// module.exports 导出的是对象, 是可以改变的
// const info = {
// 	a: 123
// }

// setTimeout(() => {
// 	info.a = 222 // 外部打印的是{a: 222}
// }, 1000)

// module.exports = info

let num = 33
setTimeout(() => {
	num = 55
}, 1000)
module.exports = num // 如果导出的基本数据类型。那么就是值的拷贝

// 总结：
/*
  commonjs中，导出与导入相当于
    const exports = xxx
    const require = exports 
    这种的一个赋值操作。
 */
