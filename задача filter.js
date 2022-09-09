const products = [
	{
		id: 1,
		name: 'milk',
		price: '1$',
	},
	{
		id: 2,
		name: 'bread',
		price: '2$',
	},
	{
		id: 3,
		name: 'meat',
		price: '3$',
	},
];

// Фильтрация массива по строке
const searchProduct = (products, searchValue) => {
	return _.filter(products, (product) => product.name.includes(searchValue));
};

const result = searchProduct(products, 'm');

console.log(result);
