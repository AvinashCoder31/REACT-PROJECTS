import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import './App.css';

const App = () => {
    return (
        <Router>
            <div>
                <h1>Student Service</h1>
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
