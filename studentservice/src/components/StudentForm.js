import React, { useState, useEffect } from 'react';
import StudentService from '../service/StudentService';
import { useParams, useNavigate } from 'react-router-dom';
import '../App.css';

const StudentForm = () => {
    const [student, setStudent] = useState({ name: '', email: '', course: '' });
    const [isEdit, setIsEdit] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            StudentService.getStudentById(id).then((response) => {
                setStudent(response.data);
                setIsEdit(true);
            });
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            StudentService.updateStudent(id, student).then(() => {
                navigate('/');
            });
        } else {
            StudentService.createStudent(student).then(() => {
                navigate('/');
            });
        }
    };

    return (
        <div>
            <h2>{isEdit ? 'Edit Student' : 'Add Student'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={student.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={student.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Course:</label>
                    <input type="text" name="course" value={student.course} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default StudentForm;
