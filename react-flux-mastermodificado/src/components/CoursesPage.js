import React, { useState, useEffect } from "react";
import courseStore from "../stores/courseStore";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import { loadCourses, deleteCourse,loadprofessores } from "../actions/courseActions";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [professores, setprofesores] = useState(courseStore.getProfesores());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCourses();
    if (courseStore.getProfesores().length === 0) loadprofessores();
    return () => courseStore.removeChangeListener(onChange); // cleanup on unmount (navigate to a different page)
  }, []);

  function onChange() {
    //debugger;
    setCourses(courseStore.getCourses());
    setprofesores(courseStore.getProfesores());
  }

  return (
    <><h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} deleteCourse={deleteCourse} professores={professores} />
    </>
  );
}

export default CoursesPage;