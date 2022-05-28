1. javaScript采用单线程模式工作的原因
1.1 js可以操作dom，这也决定了JavaScript必须使用单线程模型， 否则会出现很复杂的线程同步问题。
1.2 单线程的问题：
1.2.1 如果代码中有一个耗时操作，那么主线程会一直执行这个耗时操作，就会导致应用程序出现假死的状态。
1.2.2 所以JavaScript中将代码的执行分成了同步模式和异步模式
1.2.3 JavaScript异步模式的实现就是事件循环和消息队列


promise 函数返回的是一个全新的promise
promise catch可以捕获到reject或者promise中抛出的异常

// 如果Promise.resolve中传入了一个promise，那么该方法返回的值就是传入的那个promsie
Promise.resolve(promise) === promise


// 实现一个当 一个接口500ms还没返回回来，就执行另外的逻辑
const request = ajax.get('/user.json')
const timeout = new Promise((, reject) => {
  setTimeout(() => {
    reject(new Error('500ms了..'))
  }, 500);
})
Promise.race([
  request,
  rejectPromise
]).then(data => {
  console.log('500ms接口回来了');
}).catch(error => {
  console.log('500ms接口没回来');
})


// TODO
Promise 相关的很多问题...