import React, { useState, useEffect } from 'react';
import StudentService from '../service/StudentService';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        StudentService.getStudents().then((response) => {
            setStudents(response.data);
        });
    }, []);

    const handleDelete = (id) => {
        StudentService.deleteStudent(id).then(() => {
            setStudents(students.filter(student => student.id !== id));
        });
    };

    const handleEdit = (id) => {
        navigate(`/edit-student/${id}`);
    };

    return (
        <div>
            <h2>Student List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Course</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.course}</td>
                            <td>
                                <button onClick={() => handleEdit(student.id)}>Edit</button>
                                <button onClick={() => handleDelete(student.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;
