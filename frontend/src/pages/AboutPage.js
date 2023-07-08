import React from 'react';

const AboutPage = () => {
    return (
        <div className="container">
            <h1 className="fade-in">About Todo App</h1>
            <p className="fade-in">
                The Todo App is a simple and intuitive task management application built with the MERN stack (MongoDB, Express, React, Node.js). It provides an efficient and organized way to manage your daily tasks and stay productive.
            </p>
            <p className="fade-in">
                With the Todo App, you can create tasks, set due dates, add descriptions, and mark tasks as complete. It helps you prioritize and stay organized by giving you a clear overview of your tasks and allowing you to track your progress.
            </p>
            <p className="fade-in">
                Key Features:
            </p>
            <ul className="fade-in">
                <li>Simple and intuitive user interface</li>
                <li>Create, update, and delete tasks</li>
                <li>Set due dates and add task descriptions</li>
                <li>Mark tasks as complete/incomplete</li>
                <li>Efficient task management for enhanced productivity</li>
            </ul>
            <p className="fade-in">
                The Todo App is designed to be responsive and easy to use, whether you're accessing it from your desktop or mobile device. It provides a seamless experience for managing your tasks and staying on top of your to-do list.
            </p>
        </div>
    );
};

export default AboutPage;
