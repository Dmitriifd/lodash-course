const capitalizeLast = function (str) {
	const lastSymbol = _.last(str)
	const initialSymbol = _.chain(str).initial().join('').value()

	return initialSymbol + _.capitalize(lastSymbol)
}

// console.log(capitalizeLast('foo'))

// Добовляет кастомную функцию capitalizeLast чтобы ее можно было использовать через chain
_.mixin({ capitalizeLast })

const result = _.chain('foo').capitalizeLast().value()

console.log(result)