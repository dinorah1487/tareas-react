import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function getNameProfesor(profesores, id){
  const item =  profesores.find((profesor) => {
    return profesor.id === id;
  })
  return item ? item.name : id 
}

function CourseList(props) {

 const pro = props.professores.map(

profesor  => 
  {return(
    <td>{profesor.name}</td>)
  }

 )
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Professor </th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map(course => {
          return (


            <tr key={course.id}>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {

                    if (window.confirm('Deseas eliminar el Curso?')) 
           
                    //debugger;
                    props.deleteCourse(course.id);

                    

                  }}
                >
                  Delete
                </button>
              </td>
              <td>
                <Link to={"/course/" + course.slug}>{course.title}</Link>
                
              </td>
              
              <td>
              
              {getNameProfesor(props.professores, course.professorId)}
              
              </td>
              <td>{course.category}</td>
    
  
            </tr>
 



          );
        })}



       





      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  deleteCourse: PropTypes.func.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      professorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired
    })
  ).isRequired,

  professores :PropTypes.arrayOf(
  PropTypes.shape({

    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired 
  })
).isRequired


};
 
CourseList.defaultProps = {
  courses: [],
  professores: []
};

export default CourseList;