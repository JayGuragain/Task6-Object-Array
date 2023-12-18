import React from "react";
import courses from "../data/courses.json";
import students from "../data/students.json";

const StudentList = () => {
  // Function to find course names by their IDs.
  const getCourseNames = (courseIds) => {
    return courseIds
      .map((id) => {
        const course = courses.find((course) => course.id === id);
        return course ? course.name : "Unknown";
      })
      .join(", ");
  };

  return (
    <div className="container1">
      <h2 className="StudentList">Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <strong>Name:</strong>
            {student.name},<strong>Age:</strong> {student.age},
            <strong>Courses:</strong> {getCourseNames(student.courses)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
