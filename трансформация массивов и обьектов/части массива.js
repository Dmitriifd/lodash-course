const numbers = [1, 2, 3];

// Возвращает первый элемент
const result = _.chain(numbers).head().value();
console.log(result);

// Возвращает все кроме первого элемента
_.tail(numbers);

const str = 'foo';
// Если будет строка возвращает массив поэтому используется join
const res = _.chain(str).tail().join('').value();
console.log(res);

// Возвращает последний элемент
_.last(numbers);

// Возвращает все кроме последнего элемента
_.initial(numbers);
