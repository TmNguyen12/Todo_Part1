import React from 'react';
import {connect} from 'react-redux';
import {allTodos} from '../../reducers/selectors';
import configureStore from '../../store/store';
import { receiveTodos, receiveTodo } from '../../actions/todo_actions';

import TodoList from './todo_list';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
