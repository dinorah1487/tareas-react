import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import * as profesorApi from "../api/professorApi";
import actionTypes from "./actionTypes";






export function loadprofessores() {
  return  profesorApi.getProfessors().then(profesores => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_PROFESORES,
      profesores:profesores
       
    });
  });
}


export function saveCourse(course) {
  return courseApi.saveCourse(course).then(savedCourse => {
    // Hey dispatcher, go tell all the stores that a course was just created.
    dispatcher.dispatch({
      actionType: course.id
        ? actionTypes.UPDATE_COURSE
        : actionTypes.CREATE_COURSE,
      course: savedCourse
    });
  });
}

export function loadCourses() {
  return courseApi.getCourses().then(courses => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      courses: courses
    });
  });
}

export function deleteCourse(id) {
  //debugger;
  return courseApi.deleteCourse(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_COURSE,
      id: id
    });
  });
}