const users = [
	{
		id: 1,
		name: 'John',
		isActive: true,
		likes: 110,
	},
	{
		id: 2,
		name: 'Mike',
		isActive: false,
		likes: 30,
	},
];
const users2 = [
	{
		id: 1,
		name: 'John',
		isActive: true,
		likes: 30,
	},
	{
		id: 2,
		name: 'Mike',
		isActive: false,
		likes: 30,
	},
];

// Сортировка по возрастанию - по умолчанию : ['asc']
// const result = _.orderBy(users,  ['likes']);

// Сортировка по убыванию
const result = _.orderBy(users, ['likes'], ['desc']);

// Сортировка по нескольким полям
const result2 = _.orderBy(users2, ['likes', 'name'], ['asc', 'desc']);

console.log(result);
console.log(result2);