// from
const backendErrors = {
	email: {
		errors: [{ message: `Can't be blank` }],
	},
	password: {
		errors: [{ message: `Must contain symbols in different case` }, { message: `Must be at least 8 symbols long` }],
	},
	passwordConfirmation: {
		errors: [{ message: `Must match with password` }],
	},
}

// to
// ['Email: Can't be blank', 'Password: Must contain symbols, Must be at least 8 symbols', 'PasswordConfirmation: Must match with password']

const humanReadablyBackendErrors = _.map(backendErrors, (value, field) => {
	const fieldMessages = _.chain(value.errors).map('message').join(', ').value()
	return _.upperFirst(field) + ': ' + fieldMessages
})

console.log(humanReadablyBackendErrors)[ // =>
	("Email: Can't be blank", 'Password: Must contain symbols in different case, Must be at least 8 symbols long', 'PasswordConfirmation: Must match with password')
]