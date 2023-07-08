import React from 'react';

const TaskItem = ({ task, onDelete, onToggle }) => {
    const { _id, title, description, completed } = task;

    return (
        <li className="task-item">
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={() => onToggle(_id)}>
                {completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
            <button onClick={() => onDelete(_id)}>Delete</button>
        </li>
    );
};

export default TaskItem;
