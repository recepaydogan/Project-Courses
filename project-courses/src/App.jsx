import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Courses from "./assets/courses";
import Loading from "./assets/loading";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchCourses = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/courses");
      setCourses(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  const deleteCourse = (id) => {
    const afterDeleted = courses.filter((course) => course.id !== id);
    setCourses(afterDeleted);
  };
  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <Courses removeCourse={deleteCourse} allCourses={courses}></Courses>
      )}
    </>
  );
}

export default App;
