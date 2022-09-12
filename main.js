const input = document.getElementById('name')

const handler = function (e) {
	console.log('input', e.target.value)
}

input.addEventListener('keydown', _.debounce(handler, 2000))
