import React, { useState, useEffect } from 'react';
import StudentService from '../service/StudentService'; // Ensure the path is correct
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Ensure the path is correct

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
        <div className="container">
            <h2>Student List</h2>
            <table>
                <thead>
                    <tr>
                        <th>#</th> {/* Sequential number header */}
                        <th>Name</th>
                        <th>Email</th>
                        <th>Course</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={student.id}>
                            <td>{index + 1}</td> {/* Sequential number */}
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.course}</td>
                            <td>
                                <div className='btns'>
                                    <button onClick={() => handleEdit(student.id)}>Edit</button>
                                    <button onClick={() => handleDelete(student.id)} className='del'>Delete</button>
                                </div> 
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;
