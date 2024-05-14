import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Demo from './Demo'

const CourseDetails = () => {
    const {id} = useParams()
    const [course, setCourse] = useState("")
    useEffect(()=>{
        axios.get(`http://localhost:4000/courses/${id}`)
        .then((res)=> setCourse(res.data))
    })
  return (
   <div className='container-fluid course-details py-5'>
    <div className='container'>
        <div className='row'>
    <div className="col-12 col-lg-8">
       <h1 className='mb-5'>{course.courseName}</h1>  
       <p>{course.description}</p>
       <p><strong>Duration:</strong> {course.duration} Months</p>
       <p><strong>Skills Covered:</strong> {course.skills}</p>     
    </div>
    <div className="col-12 col-lg-4 register">
    <div className="form-title p-2 mb-3"><h4>Register Now</h4></div>
        <Demo/>
    </div>
    </div>
    </div>
   </div>
  )
}

export default CourseDetails