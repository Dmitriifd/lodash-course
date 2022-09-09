// Задача преобразовать масив с объектами

// from
const users = [
	{
		id: 1,
		status: 'active',
		first_name: 'John',
	},
	{
		id: 2,
		status: 'inactive',
		first_name: 'JoMikehn',
	},
];

// to
const newUsers = [
	{
		id: 1,
		firstName: 'John',
		isActive: true,
	},
	{
		id: 2,
		firstName: 'JoMikehn',
		isActive: false,
	},
];

const normalizeUsers = (users) => {
	return _.map(users, (user) => {
		return {
			id: user.id,
			firstName: user.first_name,
			isActive: user.status === 'active',
		};
	});
};

const result = normalizeUsers(users);
console.log({ result });
