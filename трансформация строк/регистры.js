const str = 'string'

_.toLower(str)
_.toUpper(str)

const res = _.chain('FOO').toLower().split('').value()

console.log(_.toUpper(str))
console.log(res)
