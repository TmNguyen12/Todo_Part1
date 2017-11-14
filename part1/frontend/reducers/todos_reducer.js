import { RECEIVE_TODOS } from '../actions/todo_actions';
import { RECEIVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

// const newTodos = [
//   {
//     id: 3,
//     title: 'color blue',
//     body: 'the sky',
//     done: false
//   },
//   {
//     id: 4,
//     title: 'furry cats',
//     body: 'turtle donuts',
//     done: true
//   }
// ]

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_TODOS:
      let nextState = {};
      // debugger;
      for (let i = 0; i < action.todos.length; i++) {
        nextState[action.todos[i].id] = action.todos[i];
      }

      // Object.keys(action).forEach( el => {
      //   nextState[el] = action.todos[el].todos;
      // });
      return nextState;

    case RECEIVE_TODO:
      const newTodo = {[action.todo.id]: action.todo};
      nextState = merge({}, state, newTodo);
      // nextState[action.id] = action.title;
      return nextState;
    default:
      return state;
  }
};


export default todosReducer;
