import React from 'react';
import './index.css';

const TodoItem = ({ task, editTask, deleteTask, toggleTaskComplete }) => {
  return (
    <li>
      <span style={{ textDecoration: task.complete ? 'line-through' : 'none' }}>
        {task.description}
      </span>
      <button onClick={() => toggleTaskComplete(task.id)}>
        {task.complete ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
