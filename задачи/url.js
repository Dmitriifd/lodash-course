// Замена параметров в URL
const replaceParamsInUrl = (url, replacements) => {
	return _.reduce(
		replacements,
		(acc, replacement) => {
			return _.replace(acc, ':' + replacement.from, replacement.to)
		},
		url
	)
}

const initialUrl = '/post/:postId/comments/:commentId'

const resultUrl = replaceParamsInUrl(initialUrl, [
	{ from: 'postId', to: '1' },
	{ from: 'commentId', to: '3' },
])

console.log(resultUrl) // => '/post/1/comments/3'
