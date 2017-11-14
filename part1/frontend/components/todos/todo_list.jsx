import React from 'react';
import {Todo} from '../todo_list/todo_list_item';
// import TodoListContainer from './todo_list_container';
import TodoForm from '../todo_list/todo_form';

class TodoList extends React.Component {

  render () {

    return (
      <div>
        <ul>
          {
            this.props.todos.map((todo,idx) => (
              /*<li key={idx}>{todo.title}</li>*/
              <Todo key={idx} todo={todo} />
            ))
          }
        </ul>
        debugger;
        <TodoForm receiveTodo={this.props.receiveTodo}/> //6
      </div>
    );

  }

}



export default TodoList;
