import React, { useState } from "react";
import courses from "../data/courses.json";

const CourseList = () => {
  const [filter, setFilter] = useState("");

  // Function to handle the change in the filter input
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Filtered list of courses based on the instructor name
  const filteredCourses = courses.filter((course) =>
    course.instructor.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container2">
      <h2 className="CourseList">Course List</h2>

      <ul>
        {filteredCourses.map((course) => (
          <li key={course.id}>
            <strong>Course:</strong> {course.name},<strong>Instructor:</strong>{" "}
            {course.instructor}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
