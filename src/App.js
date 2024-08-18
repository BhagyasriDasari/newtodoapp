import React, { Component } from 'react';
import TodoList from './components/TodoList';
import LabelManager from './components/LabelManager';
import TaskForm from './components/TaskForm';
import './App.css';

class App extends Component {
  state = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
    labels: JSON.parse(localStorage.getItem('labels')) || [],
  };

  componentDidUpdate() {
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    localStorage.setItem('labels', JSON.stringify(this.state.labels));
  }

  addTask = (task) => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));
  };

  editTask = (updatedTask) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) => 
        task.id === updatedTask.id ? updatedTask : task
      ),
    }));
  };

  deleteTask = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  };

  toggleTaskComplete = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) => 
        task.id === id ? { ...task, complete: !task.complete } : task
      ),
    }));
  };

  addLabel = (label) => {
    this.setState((prevState) => ({
      labels: [...prevState.labels, label],
    }));
  };

  render() {
    const { tasks, labels } = this.state;
    return (
      <div className="container">
        <h1 className="heading">To-Do List Application</h1>
        <TaskForm addTask={this.addTask} labels={labels} />
        <LabelManager labels={labels} addLabel={this.addLabel} />
        <TodoList 
          tasks={tasks}
          editTask={this.editTask}
          deleteTask={this.deleteTask}
          toggleTaskComplete={this.toggleTaskComplete}
          labels={labels}
        />
      </div>
    );
  }
}

export default App;
