const state = {
	isLoading: false,
	data: null,
	error: null,
}

// const newState = Object.assign({}, state, { isLoading: true })

const newState = _.assign({}, state, { isLoading: true })

console.log({ state }, { newState })
