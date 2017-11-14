export const allTodos = ({todos}) => {
  // debugger;
  return Object.keys(todos).map(id => todos[id]);
};

 // put todos instead of "state" because we are destructuring the todos from the entire state, right?
