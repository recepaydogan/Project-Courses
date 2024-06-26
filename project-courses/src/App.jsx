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
      ) : courses == 0 ? (
        <div className="warning">
          <div>You Deleted All the Courses</div>{" "}
          <button
            onClick={() => {
              fetchCourses();
            }}
          >
            Reload
          </button>{" "}
        </div>
      ) : (
        <div>
          <div className="title">My Courses</div>
          <Courses removeCourse={deleteCourse} allCourses={courses}></Courses>
        </div>
      )}
    </>
  );
}

export default App;
