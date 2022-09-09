const users = [
	{
		id: 1,
		name: 'John',
		isActive: true,
		age: 25,
	},
	{
		id: 2,
		name: 'Mike',
		isActive: true,
		age: 28,
	},
	{
		id: 3,
		name: 'Pit',
		isActive: false,
		age: 32,
	},
];

// Обычный вариант
const getYongestUserMessage = (users) => {
	const activeUsers = _.filter(users, 'isActive');
	const sortedActiveUsers = _.orderBy(activeUsers, ['age']);
	const firstUser = sortedActiveUsers[0];

	return `${firstUser.name} is ${firstUser.age}`;
};

const result = getYongestUserMessage(users);

// console.log(result);

// Вариант через chain
const getYongestUserMessage2 = (users) => {
	// chain заканчивается на value() - между ними методы
	return _.chain(users)
		.filter('isActive')
		.orderBy(['age'])
		.map((user) => `${user.name} is ${user.age}`)
		.head() // Получает первый элемент массива
		.value();
};

const result2 = getYongestUserMessage2(users);

console.log(result2);
