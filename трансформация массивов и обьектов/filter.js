const users = [
	{
		id: 1,
		name: 'John',
		isActive: true,
	},
	{
		id: 2,
		name: 'Mike',
		isActive: false,
	},
];

const products = {
	1: {
		name: 'Milk',
		price: 100,
	},
	2: {
		name: 'Meat',
		price: 300,
	},
};

const res = _.filter(users, (user) => user.name === 'Mike');
const res2 = _.filter(users, 'isActive');
const res3 = _.filter(users, ['name', 'John']); // в массиве свойство и условие

// Может работать с объектами, всегда возвращает массив
const product = _.filter(products, (product) => product.price < 150);

console.log(res);
console.log(res2);
console.log(res3);
console.log(product);
