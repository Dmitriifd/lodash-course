// Конвертация строки
// from
// This is super quiz
// to
// this-is-super-quiz

const toSlug = (str) => {
	const slug = _.chain(str).toLower().split(' ').join('-').value()
	return encodeURI(slug)
}

const slug = toSlug('This is super quiz')

console.log(slug)