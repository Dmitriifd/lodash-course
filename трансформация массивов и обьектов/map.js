const users = [
	{
		id: 1,
		name: 'User 1',
	},
	{
		id: 2,
		name: 'User 2',
	},
	{
		id: 3,
		name: 'User 3',
	},
];

const obj = {
	1: {
		name: 'User 1',
	},
	2: {
		name: 'User 2',
	},
};

const ids = _.map(users, (user) => {
	return user.id;
});

const ids2 = _.map(users, 'name'); // через строку можно получить сразу нужный элемент

const user = _.map(obj, (user, id) => id); // можно перебирать объекты

console.log(ids);
console.log(ids2);
console.log(user);
