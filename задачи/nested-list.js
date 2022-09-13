// Конвертация плоского списка во вложенный

//from
const flatList = [
  {
    id: 1,
    name: 'lvl 1 item 1',
    parentid: null
  },
  {
    id: 2,
    name: 'lvl 1 item 2',
    parentid: null
  },
  {
    id: 3,
    name: 'lvl 2 item 3',
    parentid: 1
  },
  {
    id: 4,
    name: 'lvl 3 item 4',
    parentid: 3
  },
  {
    id: 5,
    name: 'lvl 3 item 5',
    parentid: 2
  },
]

// to
const to = [
  {
    id: 1,
    children: [
      {
        id: 3,
        children: [
          {
            id: 4,
            children: []
          }
        ]
      }
    ]
  },
  {
    id: 2,
    children: [
      {
        id: 5,
        children: []
      }
    ]
  } 
]

const addChildren = (item) => {
  const children = _.filter(flatList, (chieldItem) => {
    return chieldItem.parentid === item.id
  })
  const nestedChildren = []
  if (!_.isEmpty(children)) {
    nestedChildren = _.map(children, addChildren)
  }

  return _.assign({},  item, { children: nestedChildren })
}

const nestedList = _.chain(flatList)
  .filter((item) => {
    return item.parentid === null
  })
  .map(addChildren)
  .value()


console.log(nestedList)