import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Courses() {
  const [courses, setCourses] = useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/courses")
    .then((res)=> res.json())
    .then((json)=> setCourses(json))
  })
    
  return (
    <div>     
      <div className="container-fluid px-5 py-4 courses">  
      <h1 className='mb-5'>Our <span className='text-danger'>Courses</span></h1>            
          <div className="row">
           {courses.map((course)=>{
             return (
              <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3">                   
             <div className="card">
             <NavLink to={`/coursedetails/${course.id}`} ><img src={course.courseImg} alt="" className="w-100"/></NavLink>
             <div className="card-body">
             <NavLink to={`/coursedetails/${course.id}`}><h5 className="card-title">{course.courseName}</h5></NavLink>
             </div>
             </div>
           </div>
        
             )
           })}
            </div>
      </div>
    </div>
  )
}

export default Courses