const data = [
    {
        id: 1,
        name: 'Test',
        count: 0,
    },
    {
        id: 2,
        name: 'Test',
        count: 1,
    },
];

const newData = data.map( (item, i) => (
    {
      ...data,
      count: item.count+1,
    }
));