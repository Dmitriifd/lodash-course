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

// Функция должна вернуть массив пользователей которые популярны. isActive === true, likes >= 100

const getPopularUsers = (users) => {
	return _.reject(users, (user) => !user.isActive || user.likes < 100);
};

// вариант с filter
const getPopularUsers2 = (users) => {
	return _.filter(users, (user) => user.isActive && user.likes > 100);
};

const result = getPopularUsers(users);
console.log(getPopularUsers(users));
