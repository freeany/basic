const p = new Promise((resolve, reject) => {
	reject('111')
})

p.then(
	data => {
		throw new Error('12')
	},
	err => {
		console.log(err)
	}
).catch(e => {
	console.log(e, '33')
})

p.then(
	data => {},
	err => {
		console.log(err)
	}
)

p.catch(e => {
	console.log(e)
})
