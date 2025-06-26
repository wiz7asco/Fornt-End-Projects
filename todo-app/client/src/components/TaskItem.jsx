import React from 'react';

const TaskItem = ({ task, onDelete, onUpdate }) => {
  const toggleComplete = () => {
    onUpdate({ ...task, completed: !task.completed });
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={toggleComplete}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => onDelete(task.id)}>❌</button>
    </div>
  );
};

export default TaskItem;
