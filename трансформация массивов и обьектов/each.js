const products = {
	1: {
		name: 'Product 1',
	},
	2: {
		name: 'Product 2',
	},
};

const arr = [];

_.each([1, 2], (item, index) => console.log(item, index)); // или _.forEach, в массиве 2 параметр - index

_.each(products, (item) => console.log(item)); // может перебирать объекты
_.each(products, (item, key, i) => console.log(item, key, i)); // в объекте 2 параметр - получить ключ

_.each(products, (product) => arr.push(product.name)); // push имён объекта в массив
console.log(arr);
