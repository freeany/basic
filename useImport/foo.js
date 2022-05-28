const name = 'ww'
let age = 19
const say = msg => console.log('说了: ' + msg)

console.log('?')
setTimeout(() => {
	age = 20
}, 1000)

export { name, age, say }
