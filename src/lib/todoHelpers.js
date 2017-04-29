export const generateId = () => Math.floor(Math.random()*100000);

export const findById = (list, id) => list.find(item => item.id === id);

export const toggleTodo = (todo) => ({...todo, isComplete: !!todo.isComplete});

export const updateTodo = (list, updatedItem) => {
  const updatedIndex = list.findIndex(item => item.id === updatedItem.id);
  return [
    ...list.slice(0, updatedIndex),
    updatedIndex,
    ...list.slice(updatedIndex+1)
  ];
};
