_.compact() 
// Создает массив с удаленными всеми ложными значениями. 
// Значения false, null, 0, "", undefined и NaN являются ложными.
// => Возвращает новый массив отфильтрованных значений.

_.compact([0, 1, false, 2, '', 3]) // => [1,2,3]

const res = [null, undefined, '', 'foo'].filter(Boolean) // => ['foo']
