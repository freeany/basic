function Person() {}
function Student() {}

const p = new Person()

// console.log(p instanceof Person)

function instanceof1(left, right) {
	if (typeof left !== 'object' || left === null) {
		return false
	}
	let proto = left.__proto__

	while (true) {
		if (proto === null) {
			return false
		}
		if (proto === right.prototype) {
			return true
		}
		proto = proto.__proto__
	}
}

console.log(instanceof1(p, Person))
