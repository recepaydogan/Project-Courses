/* eslint-disable react/prop-types */
import Course from "./course";
function Courses({ allCourses, removeCourse }) {
  return (
    <div className="content-outer-wrapper">
      {allCourses.map((course, index) => {
        return (
          <Course
            course={course}
            key={index}
            removeThisCourse={removeCourse}
          ></Course>
        );
      })}
    </div>
  );
}
export default Courses;
