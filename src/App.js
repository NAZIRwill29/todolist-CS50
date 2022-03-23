import React from "react";
import "./styles.css";

const Todo = (props) => {
  return (
    <li class="todo">
      <input type="checkbox" />
      <button>delete</button>
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
    this.setState({
      todos: [...this.state.todos, { text: text }]
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.addTodo()}>Add TODO</button>
        <ul>
          {this.state.todos.map((todo) => (
            <Todo todo={todo} />
          ))}
        </ul>
      </div>
    );
  }
}
