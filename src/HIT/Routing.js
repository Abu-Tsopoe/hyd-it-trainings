import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Slider from './Slider'
import About from './About'
import Courses from './Courses'
import Batches from './Batches'
import Placements from './Placements'
import Register from './Register'
import Students from './Students'
import Contact from './Contact'
import ErrorPage from './ErrorPage'
import AdminLogin from './Admin/AdminLogin'
import AdminDashboard from './Admin/AdminDashboard'
import CourseDetails from './CourseDetails'

function Routing() {
  return (
    <div>
        <Routes>
            <Route path ="/" element = {<Slider/>}/>
            <Route path ="/about" element = {<About/>}/>
            <Route path ="/courses" element = {<Courses/>}/>
            <Route path ="/batches" element = {<Batches/>}/>
            <Route path ="/placements" element = {<Placements/>}/>
            <Route path ="/register" element = {<Register/>}/>
            <Route path ="/students" element = {<Students/>}/>
            <Route path ="/contact" element = {<Contact/>}/>
            <Route path ="/adminlogin" element = {<AdminLogin/>}/>
            <Route path ="/admindashboard" element = {<AdminDashboard/>}/>
            <Route path ="/coursedetails/:id" element = {<CourseDetails/>}/>
            <Route path ="*" element = {<ErrorPage/>}/>
        </Routes>
    </div>
  )
}

export default Routing