import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StudentList from "./components/StudentList";
import CourseList from "./components/CourseList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StudentList />
      <CourseList />
    </>
  );
}

export default App;
