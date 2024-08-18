import React from 'react';
import TodoItem from '../TodoItem';
import './index.css';

const TodoList = ({ tasks, editTask, deleteTask, toggleTaskComplete, labels }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem 
          key={task.id} 
          task={task}
          editTask={editTask}
          deleteTask={deleteTask}
          toggleTaskComplete={toggleTaskComplete}
          labels={labels}
        />
      ))}
    </ul>
  );
};

export default TodoList;
