import React from 'react';
import {Todo} from './todo_list_item';
// import TodoListContainer from './todo_list_container';


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
      </div>
    );

  }

}



export default TodoList;
