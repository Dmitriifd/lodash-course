_.clone() // Создает неглубокий клон
_.cloneDeep() // Создает глубокий клон, рекурсивно клонирует значение.

const baseConfig = {
	apiUrl: 'http://api.com',
	port: 4000,
}

const createExtendedConfig = function (config) {
	// return _.assign({}, config, { host: 'http://google.com'})
	const clonedConfig = _.clone(config)
	clonedConfig.host = 'http://google.com'
	return clonedConfig
}

const result = createExtendedConfig(baseConfig)

console.log({ baseConfig }, { result })
