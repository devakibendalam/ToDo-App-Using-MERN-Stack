import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import api from '../services/api';

const HomePage = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await api.get('/tasks');
                setTasks(response.data);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchTasks();
    }, []);

    const handleAddTask = async task => {
        try {
            const response = await api.post('/tasks', task);
            setTasks([...tasks, response.data]);
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleDeleteTask = async id => {
        try {
            await api.delete(`/tasks/${id}`);
            setTasks(tasks.filter(task => task._id !== id));
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleToggleTask = async id => {
        try {
            const taskToUpdate = tasks.find(task => task._id === id);
            const updatedTask = {
                ...taskToUpdate,
                completed: !taskToUpdate.completed
            };
            await api.put(`/tasks/${id}`, updatedTask);
            setTasks(
                tasks.map(task => (task._id === id ? updatedTask : task))
            );
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div className="container">
            <h1 className="fade-in">Todo App</h1>
            <TaskForm onAdd={handleAddTask} />
            <TaskList
                tasks={tasks}
                onDelete={handleDeleteTask}
                onToggle={handleToggleTask}
            />
        </div>
    );
};

export default HomePage;
