const arr = [1, 2, 3, 4, 5];
const arr2 = [{ id: 1 }, { id: 2 }, { id: 3 }];

// Возвращает новый массив, работает только с простыми массивами
const res = _.without(arr, 1);
// console.log(res);

// Изменяет исходный массив
const res2 = _.pull(arr, 1, 2);
// console.log(arr);

// Изменяет исходный массив, возвращает массив удаленых элементов
const res3 = _.remove(arr2, (elem) => elem.id === 1);
// console.log(res3);
// console.log(arr2);

// Противоположность _.filter; этот метод возвращает элементы коллекции, для которых предикат не возвращает true.
const res4 = _.reject(arr2, (elem) => elem.id === 1);
console.log(res4);