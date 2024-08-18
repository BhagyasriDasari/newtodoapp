import React, { Component } from 'react';
import './index.css';

class TaskForm extends Component {
  state = {
    description: '',
    selectedLabels: [],
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLabelChange = (event) => {
    const label = event.target.value;
    this.setState((prevState) => ({
      selectedLabels: [...prevState.selectedLabels, label],
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { description, selectedLabels } = this.state;
    const newTask = {
      id: Date.now(),
      description,
      labels: selectedLabels,
      complete: false,
    };
    this.props.addTask(newTask);
    this.setState({ description: '', selectedLabels: [] });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          name="description" 
          placeholder="Enter task" 
          value={this.state.description}
          onChange={this.handleChange}
          required
        />
        <select onChange={this.handleLabelChange}>
          <option value="">Select label</option>
          {this.props.labels.map((label) => (
            <option key={label.id} value={label.name}>
              {label.name}
            </option>
          ))}
        </select>
        <button type="submit">Add Task</button>
      </form>
    );
  }
}

export default TaskForm;
