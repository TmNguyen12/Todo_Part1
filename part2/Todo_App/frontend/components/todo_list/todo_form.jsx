import React from 'react';
import TodoList from '../todos/todo_list';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      title: '',
      body: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);   //4
  }

  handleSubmit(e) {     //
    e.preventDefault();//5
    let newId = new Date().getTime();
    this.setState({id: newId});
    // debugger;
    const todo = Object.assign({}, this.state, { id: newId });

    this.props.receiveTodo(todo);
    {/*// put in a unique id and make it before calling this function  //7 (see todo_list line 20)*/}
    {/*  // make a new object that is a complete todo in this method before calling the creatTodo */}
  }

  handleChange(string) {          // we need to return a function here because we're calling 'title' on line 32  //2
    return (event) => {                     //onChange takes in a function and returns a event object)
      this.setState({[string]: event.target.value});          //2
    };
  }

  render() {

    const { title, body } = this.state;
    return (
      <form className='todo-form'>

        <div>
          <label>
            Title:<br/>
          <input type='text' onChange={this.handleChange('title')} value={title} name='title'/> {/*/ 1*/}
          </label>
          <br/>
          <label>
            Body:<br/>
          <textarea name='body' onChange={this.handleChange('body')} value={body} ></textarea> {/*// 1*/}
          </label>
          <br/>

          <input type='submit' value='Submit' onClick={this.handleSubmit} /> {/*//3*/}
        </div>
      </form>
    );
  }


}

export default TodoForm;
