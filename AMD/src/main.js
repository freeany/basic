// 注册路径，可以不注册。 不注册在require的时候就要写路径了。
// 如果注册了，那么require的时候就可以写注册的时候paths的key(会去找对应的value)。
require.config({
	baseUrl: '',
	paths: {
		foo: './src/foo',
		baz: './src/baz'
	}
})

// 模块内的define可以进行形成内部作用域。 如果代码不在define中，那么就会放到全局中执行，因为这种方式不是规定的模块化。
require(['baz'], function (value) {
	// value是baz中defined回调函数return出来的值。
	console.log(value, 'value..')
	console.log(c) // 可以拿到不再define内部定义的变量。
})
