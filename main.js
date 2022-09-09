const arr = [{ id: 1 }, { id: 2 }, { id: 3 }];

const res = _.reject(arr, (elem) => elem.id === 1);
console.log(res);