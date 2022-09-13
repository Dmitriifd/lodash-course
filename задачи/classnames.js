// Генерирует строку с классами в зависимости от value переданого в объекте

const classNames = (conditions) => {
	// Вариант 1
	// const foo = _.map(conditions, (value, key) => {
	// 	return value ? key : undefined
	// })
	// return _.join(_.compact(foo), ' ')

	// Вариант 2
	const getUsedClassName = (value, key) => {
		return value ? key : undefined
	}
	return _.chain(conditions).map(getUsedClassName).compact().join(' ').value()
}

const isAuthor = false
const isInFocus = true
const liClass = classNames({
	item: true,
	active: isAuthor,
	'item-hightlighted': isInFocus,
})

console.log(liClass) // 'item item-hightlighted'
