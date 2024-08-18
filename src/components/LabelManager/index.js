import React, { Component } from 'react';
import './index.css'

class LabelManager extends Component {
  state = {
    labelName: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newLabel = {
      id: Date.now(),
      name: this.state.labelName,
    };
    this.props.addLabel(newLabel);
    this.setState({ labelName: '' });
  };

  render() {
    return (
      <div>
        <h3 className='heading'>Manage Labels</h3>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            name="labelName" 
            placeholder="New label" 
            value={this.state.labelName}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Add Label</button>
        </form>
        
      </div>
    );
  }
}

export default LabelManager;
