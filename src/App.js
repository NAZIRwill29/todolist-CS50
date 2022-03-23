import React from "react";
import "./styles.css";

let ids = 0;

const Todo = (props) => {
  return (
    <li class="todo">
      <input
        type="checkbox"
        checked={props.todo.checked}
        onChange={props.onToggle}
      />
      <button onClick={props.onDelete}>delete</button>
      <span>{props.todo.text}</span>
    </li>
  );
};

export default class App extends React.Component {
  //for construct
  constructor() {
    super();
    //declare state
    this.state = {
      todos: []
    };
  }

  //for function addTodo
  addTodo() {
    const text = prompt("TODO text please!");
    //set the state
    //add todolist
    this.setState({
      todos: [...this.state.todos, { ids: ids++, text: text, checked: false }]
    });
  }

  removeTodo(ids) {
    //filter todolist to remove
    this.setState({
      todos: this.state.todos.filter((todo) => todo.ids !== ids)
    });
  }

  toggleTodo(ids) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.ids !== ids) {
          return todo;
        } else {
          return {
            ids: todo.ids,
            text: todo.text,
            checked: !todo.checked
          };
        }
      })
    });
  }

  render() {
    return (
      <div className="App">
        <div>Todo count: {this.state.todos.length}</div>
        <div>
          Unchecked todo count:{" "}
          {this.state.todos.filter((todo) => !todo.checked).length}
        </div>
        <button onClick={() => this.addTodo()}>Add TODO</button>
        <ul>
          {this.state.todos.map((todo) => (
            <Todo
              onToggle={() => this.toggleTodo(todo.ids)}
              onDelete={() => this.removeTodo(todo.ids)}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    );
  }
}
