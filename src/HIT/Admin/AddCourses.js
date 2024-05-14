import axios from 'axios'
import React, { useState } from 'react'

const AddCourses = () => {
    const [courseName, setCourseName] = useState("")
    const [courseImg, setCourseImg] = useState("")
    const [description, setDescription] = useState("")
    const [duration, setDuration] = useState("")
    const [skills, setSkills] = useState("")
   
    const addCourse = (e) =>{
        e.preventDefault()
        axios.post ("http://localhost:4000/courses", {courseName, courseImg, description, duration, skills})
        .then(()=>{
            alert ("Course Added Successfully")
            setCourseName("")
            setCourseImg("")
            setDescription("")
            setDuration("")
            setSkills("")
    })   
            .catch((err) => {
                console.log(err);
            })
    }
    
        return (
            <div className='container-fluid py-5'>
                <h1>Add Courses</h1>
                <div className='container col-12 col-lg-6 add-courses mt-5 p-5'>                    
                    <form onSubmit={addCourse} >
                        <input type='text' name='course' className='form-control mb-3 p-2' placeholder='Course Name' value={courseName} onChange={(e)=> setCourseName(e.target.value)} />
                        <input type='text' name='courseImg' className='form-control mb-3 p-2' placeholder='Course Image' value={courseImg} onChange={(e) => setCourseImg(e.target.value)}/>
                        <input type='text' name='description' className='form-control mb-3 p-2' placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
                        <input type='text' name='duration' className='form-control mb-3 p-2' placeholder='Duration' value={duration} onChange={(e) => setDuration(e.target.value)} />
                        <input type='text' name='skills' className='form-control mb-3 p-2' placeholder='Skills' value={skills} onChange={(e) => setSkills(e.target.value)}/>
                        <input type='submit' value="Add Course" className='btn btn-danger p-2' />
                    </form>
                </div>
                </div>
        )
    }
export default AddCourses
