// from
const loc = [
	{
		location_key: [32, 22, 11],
		autoassign: 1,
	},
	{
		location_key: [41, 42],
		autoassign: 1,
	},
]

const bulkConfig = [
	{
		dataValues: {
			config_key: 100,
		},
	},
	{
		dataValues: {
			config_key: 200,
		},
	},
]

// to
const output = [
	{
		config_key: 100,
		location_key: 32,
		autoassign: 1,
	},
	{
		config_key: 100,
		location_key: 22,
		autoassign: 1,
	},
	{
		config_key: 100,
		location_key: 11,
		autoassign: 1,
	},
	{
		config_key: 200,
		location_key: 41,
		autoassign: 1,
	},
	{
		config_key: 200,
		location_key: 42,
		autoassign: 1,
	},
]

// 1 вариант
const result = _.map(loc, (locEl, index) => {
	return _.map(locEl.location_key, (locationKey) => {
		return {
			config_key: bulkConfig[index].dataValues.config_key,
			location_key: locationKey,
			autoassign: locEl.autoassign,
		}
	})
})

const flattenedResult = _.flatten(result)

console.log({ flattenedResult })

// 2 вариант

const getConfigs = (locEl, index) => {
	return _.map(locEl.location_key, (locationKey) => {
		return {
			config_key: bulkConfig[index].dataValues.config_key,
			location_key: locationKey,
			autoassign: locEl.autoassign,
		}
	})
}

const configs = _.chain(loc).map(getConfigs).flatten().value()

console.log({ configs })
