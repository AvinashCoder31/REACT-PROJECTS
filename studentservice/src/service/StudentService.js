import axios from 'axios';

const API_URL = 'http://localhost:8080/api/students';

class StudentService {
    getStudents() {
        return axios.get(API_URL);
    }

    getStudentById(id) {
        return axios.get(`${API_URL}/${id}`);
    }

    createStudent(student) {
        return axios.post(API_URL, student);
    }

    updateStudent(id, student) {
        return axios.put(`${API_URL}/${id}`, student);
    }

    deleteStudent(id) {
        return axios.delete(`${API_URL}/${id}`);
    }
}

const studentService = new StudentService();
export default studentService;
