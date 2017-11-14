import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodos, receiveTodo } from './actions/todo_actions';
import Root from './components/root';
import {allTodos} from './reducers/selectors';
import TodoForm from './components/todo_list/todo_form';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  // add stuff to the window so we can test in the console
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.store = store;
  window.allTodos = allTodos;
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});

// <Root store={store}/>
