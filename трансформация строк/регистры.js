const str = 'string'

_.toLower(str)
_.toUpper(str)

const res = _.chain('FOO').toLower().split('').value()

console.log(_.toUpper(str))
console.log(res)

_.camelCase('Foo bar baz') // fooBarBaz
_.snakeCase('Foo bar baz') // foo_bar_baz
_.snakeCase('productName') // product_name