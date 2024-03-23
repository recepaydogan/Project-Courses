/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Courses({ allCourses, removeCourse }) {
  const [index, setIndex] = useState(0);
  const { id, content, title, price } = allCourses[index];
  const previousCourse = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return chechkIndex(newIndex);
    });
  };
  const nextCourse = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return chechkIndex(newIndex);
    });
  };
  const chechkIndex = (index) => {
    if (index < 0) return allCourses.length - 1;
    if (index >= allCourses.length) return (index = 0);
    return index;
  };
  return (
    <div className="content-outer-wrapper">
      <FaChevronLeft
        onClick={previousCourse}
        className="chevron"
      ></FaChevronLeft>
      <div className="content-wrapper">
        <div className="content-title">{title}</div>
        <div className="content-title">{id}</div>
        <div className="content">{content}</div>
        <div className="content-price">{price}</div>
        <button onClick={() => removeCourse(id)}>Delete</button>
      </div>
      <FaChevronRight onClick={nextCourse} className="chevron"></FaChevronRight>
    </div>
  );
}
export default Courses;
