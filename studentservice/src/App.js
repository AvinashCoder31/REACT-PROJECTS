import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import './App.css';  // Make sure this path is correct

const App = () => {
    return (
        <Router>
            <header>
                <h1>Student Service</h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/add-student">Add Student</a></li>
                    </ul>
                </nav>
            </header>
            <div className="container">
                <Routes>
                    <Route path="/" element={<StudentList />} />
                    <Route path="/add-student" element={<StudentForm />} />
                    <Route path="/edit-student/:id" element={<StudentForm />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
