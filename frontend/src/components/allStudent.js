import React, { useState, useEffect } from "react";
import axios from "axios";

function AllStudent() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/student/")
      .then(res => setStudents(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>All Students</h2>

      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default AllStudent;
