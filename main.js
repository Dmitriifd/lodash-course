const input = document.getElementById('name')
const email = document.getElementById('email')

const handler = function (e) {
	console.log('input', e.target.value)
}

input.addEventListener('keydown', _.debounce(handler, 2000))
email.addEventListener('keydown', _.throttle(handler, 2000))


