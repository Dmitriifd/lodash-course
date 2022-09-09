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

// Можно использовать несколько фильтров через объект
const isSomeActive = _.some(users, { isActive: true, id: 1 });
const isAllActive = _.every(users, (user) => user.isActive === true);

console.log(isSomeActive);
console.log(isAllActive);
