const users = [
	{
		id: 1,
		name: 'Mike',
	},
	{
		id: 2,
		name: 'Mike',
	},
];

// Работает также как и фильтр, но с отличием что он возвращает только первый попавщийся элемент

const result = _.find(users, (user) => user.name === 'Mike');
console.log(result);