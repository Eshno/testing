import { array, bool, func, string } from 'prop-types';
import React, { Component } from 'react';
import "../styles/Todo.css";

function TaskList({ tasks, deleteFN, handleInput, handleDone }) {
  return (
    <ul className="TaskList">
      {tasks.map(({ desc, isDone }, index) =>
        <li className="Task" key={index}>
          <input type="text" placeholder="description" defaultValue={desc}
            onChange={() => handleInput(index)} style={{ textDecoration: isDone ? 'line-through' : 'none' }} />
          <input type="checkbox" checked={isDone} onChange={() => handleDone(index)} />
          <span className="TaskCompleted">{!isDone || "Task Completed!"}</span>
          <button onClick={() => deleteFN(index)}>Delete Task</button>
        </li>
      )}
    </ul>
  )
}
TaskList.propTypes = {
  deleteFN: func,
  desc: string,
  isDone: bool,
  handleDone: func,
  handleInput: func,
  tasks: array
}

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: this.props.defaultTasks
    }
  }

  addTask = () => {
    this.setState({ tasks: [...this.state.tasks, { title: '', desc: '' }] });
  }

  deleteTask = (index) => {
    if (!confirm("Are you sure you want to delete this task?")) return;
    const newTasks = this.state.tasks.filter((task, tIndex) => index !== tIndex);
    this.setState({ tasks: [...newTasks] });
  }

  handleDone = (index) => {
    const newTasks = this.state.tasks;
    newTasks[index].isDone = !newTasks[index].isDone;
    this.setState({ tasks: [...newTasks] });
  }

  handleDesc = (index, event) => {
    const newTasks = this.state.tasks;
    newTasks[index].isDone = event.target.value;
    this.setState({ tasks: [...newTasks] });
  }

  render() {
    return (
      <div className="Todo">
        <h1 className="TodoHead">Simple Unpersistent Todo List</h1>
        <TaskList tasks={this.state.tasks} deleteFN={this.deleteTask} handleDone={this.handleDone} handleDesc={this.handleDesc} />
        <button onClick={(this.addTask)}>Add Task</button>
      </div>
    )
  }
}
Todo.defaultProps = {
  defaultTasks: [{ desc: 'foo', isDone: true }, { desc: 'bar', isDone: false }]
}
Todo.propTypes = {
  defaultTasks: array,
}
