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
	{
		id: 3,
		name: 'Pit',
		isActive: false,
		likes: 30,
	},
];

// Групировка на нативном js
const groupBy = (list, prop) => {
	return list.reduce((acc, elem) => {
		(acc[elem[prop]] = acc[elem[prop]] || []).push(elem);
		return acc;
	}, {});
};

// const result = groupBy(users, 'isActive');

// Групировка lodash
// const result = _.groupBy(users, 'isActive'); ||
const result = _.groupBy(users, (user) => user.isActive);

console.log(result);