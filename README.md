# To-Do List Application

## Overview

This To-Do List Application is a simple and intuitive task management tool built using React. It allows users to manage tasks, add labels, and track task completion. The application uses a gradient background and a clean interface to provide a user-friendly experience.

## Features

- **Task Management**: Add, edit, and delete tasks.
- **Label Management**: Add and assign labels to tasks.
- **Task Completion**: Mark tasks as complete or incomplete.
- **Persistent Storage**: Tasks and labels are saved to `localStorage` for persistence across sessions.

## Technologies Used

- **React**: For building the user interface.
- **CSS**: For styling the components and ensuring responsiveness.

## Project Structure

- **`src/`**: Contains all the React components and styles.
  - **`components/`**:
    - **`LabelManager.js`**: Component for managing labels.
    - **`TaskForm.js`**: Form for adding new tasks.
    - **`TodoItem.js`**: Displays individual tasks with options to complete or delete.
    - **`TodoList.js`**: Renders a list of tasks.
  - **`App.js`**: Main application component that manages state and integrates all other components.
  - **`App.css`**: Styles for the main application component.
  
Deployed Link:  https://newtodowithlabel.netlify.app/