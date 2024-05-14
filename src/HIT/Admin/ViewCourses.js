import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewCourses = () => {
    const [courses, setCourses] = useState([])
    const [id, setId] = useState("")
    const [courseName, setCourseName] = useState("")
    const [courseImg, setCourseImg] = useState("")
    const [description, setDescription] = useState("")
    const [duration, setDuration] = useState("")
    const [skills, setSkills] = useState("")
  useEffect(() => {
    axios.get("http://localhost:4000/courses")
    .then((res) => setCourses(res.data))
    .catch((err) => console.log(err))
  }
  )
  const editCourse = (courseId) =>{
    axios.get(`http://localhost:4000/courses/${courseId}`)
    .then((res)=>{
        setId(res.data.id)
        setCourseName(res.data.courseName)
        setCourseImg(res.data.courseImg)
        setDescription(res.data.description)
        setDuration(res.data.duration)
        setSkills(res.data.skills)
    })
  }
  
  const updateCourse = (e) =>{
        e.preventDefault()
        axios.put("http://localhost:4000/courses/" + id, {id, courseName, courseImg, description, duration, skills})
        .then(()=>alert ("Course Updated Successfully"))
        .catch((err)=>console.log(err))
  }
  const deleteCourse = (courseId) => {
    axios.delete(`http://localhost:4000/courses/${courseId}`)
        .then(() => alert("Deleted Successfully"))
        .catch((err) => console.log(err))
}
  return (
    <div>
        <section className="container-fluid Courses py-5">
        <h1>View Courses</h1>
        <div className=' mt-5'>             
                <table className="table table-bordered table-hover">
                    <thead className='table-dark'>
                    <tr>
                    <th>Course</th>
                    <th>Course Image</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Skills</th>
                    <th>Update Course</th>
                    </tr>
                    </thead>
                    <tbody>
                   {courses.map((course) => {
                    return(
                      <tr>
                      <td>{course.courseName}</td>
                      <td><img src={course.courseImg} alt='' className='w-100'/></td>
                      <td>{course.description}</td>
                      <td>{course.duration} Months</td>
                      <td>{course.skills}</td>
                      <td className='text-center'>
                        <button className='btn btn-primary m-2' onClick={()=>editCourse(course.id)} data-bs-target="#editcourse" data-bs-toggle="modal"><i class="bi bi-pencil-square"></i></button>
                        <button className='btn btn-danger' onClick={()=>deleteCourse(course.id)}><i class="bi bi-trash3-fill"></i></button>
                      </td>
                      </tr>
                    )
                   })}
                    </tbody>
                </table>
                <div className='modal fade' id='editcourse'>
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h4 className='modal-title text-center'>Update Course</h4>
                    <button className='btn-close' data-bs-dismiss="modal"></button>
                  </div>
                  <div className='modal-body'>
                   <form onSubmit={updateCourse}>
                    <input type='text' name="course" placeholder='Course Name' className='form-control mb-3' value={courseName} onChange={(e) => setCourseName(e.target.value)}/>
                    <input type='courseImg' name="courseImg" placeholder='Course Image' className='form-control mb-3' value={courseImg} onChange={(e) => setCourseImg(e.target.value)}/>
                    <input type='text' name="description" placeholder='Description' className='form-control mb-3' value={description} onChange={(e) => setDescription(e.target.value)}/>
                    <input type='text' name="duration" placeholder='Duration' className='form-control mb-3' value={duration} onChange={(e) => setDuration(e.target.value)}/>
                    <input type='text' name="skills" placeholder='Skills' className='form-control mb-3' value={skills} onChange={(e) => setSkills(e.target.value)}/>
                    <input type='submit' value="Update Course" className='btn btn-danger' data-bs-dismiss="modal"/>
                   </form>
                  </div>
                </div>
              </div>
            </div>
                </div>  
            </section>
    </div>
  )
}

export default ViewCourses