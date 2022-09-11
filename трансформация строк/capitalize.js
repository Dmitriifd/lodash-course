// Конвертирует строку - делает первую букву строки большой

// Самостоятельная реализация
const capitzlize = (str) => {
	const lowerCaseStr = _.toLower(str)
	const firstLetter = _.chain(lowerCaseStr).head().toUpper().value()
	const tail = _.chain(lowerCaseStr).tail().join('').value()

	return firstLetter + tail
}

console.log(capitzlize('foo Bar'))

// метод lodash
_.capitalize('foo Bar')
