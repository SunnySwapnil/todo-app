import React from 'react';

function TaskList({ tasks, onEdit, onDelete, onToggle }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
          />
          <span
            style={{
              color: task.completed && 'blue',
            }}
          >
            {task.text}
          </span>
          <button
            onClick={() => onEdit(task.id, prompt('Edit task:', task.text))}
          >
            Edit
          </button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
