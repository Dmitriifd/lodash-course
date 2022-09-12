const foo = [[1,2], [3,4, [4,5]]]
const result = [].concat.apply([], foo)

_.flatten([1, [2, [3, [4]], 5]]) // Возвращает новый развернутый массив.

