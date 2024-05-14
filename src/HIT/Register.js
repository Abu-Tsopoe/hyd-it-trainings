import axios from 'axios'
import React, { useState } from 'react'

const Register = () => {
  const [course, setCourse] = useState("")
  const [training, setTraining] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const submitForm = (e) => {
    e.preventDefault()
    axios.post("http://localhost:4000/registration", {course, training, name, email, subject, phone, message})
    .then(()=>{
      alert ("Submitted succesfully")
      setCourse("")
      setTraining("")
      setName("")
      setEmail("")
      setSubject("")
      setPhone("")
      setMessage("")
    })
    .catch((err)=> console.log(err))
  }
  return (
    <div>
      <section className="container-fluid student-registration py-5">
        <div className="container bg-white p-5 col-12 col-lg-8">
                <form onSubmit= {submitForm}> 
                <div className="row">
                <div className="col-12 col-md-6">
                <select name="course" className="form-select mb-3 p-2" value={course} onChange={(e) => setCourse(e.target.value)}>
                        <option value="" disabled selected>Select Course</option>
                        <option>Python Fullstack</option>
                        <option>MERN Fullstack</option>
                        <option>UI Development</option>
                        <option>React JS</option>
                        <option>UI/UX Designing</option>
                        <option>Node JS</option>
                        <option>Web Designing</option>
                        <option>PHP with MySQL</option>
                        <option>Digital Marketing</option>
                        <option>Python</option>
                        <option>UI Designing</option>
                        <option>Django</option>
                        <option>Graphic Designing</option>
                        <option>SEO</option>
                        <option>Google Adwords</option>
                        <option>Java Fullstack</option>
                    </select> 
                
                </div>
                <div className="col-12 col-md-6">
                <select name="training" className="form-select mb-3 p-2" value={training} onChange={(e) => setTraining(e.target.value)}>
                        <option value="" disabled selected>Training type</option>
                        <option>Classroom Training</option>
                        <option>Online Training</option>
                    </select>         
                </div>
                <div className="col-12 col-md-6">
                <input type="text" name="studentName" placeholder="Name" className="form-control mb-3 p-2" value={name} onChange={(e) => setName(e.target.value)}/>
               
                </div>
                <div className="col-12 col-md-6">
                <input type="text" name="email" placeholder="Email ID" className="form-control mb-3 p-2" value={email} onChange={(e) => setEmail(e.target.value)}/>
                
                </div>
                <div className="col-12 col-md-6">
                <input type="text" name="subject" placeholder="Subject" className="form-control mb-3 p-2" value={subject} onChange={(e) => setSubject(e.target.value)}/>
               
                </div>
                <div className="col-12 col-md-6">
                <input type="text" name="phone" placeholder="Phone Number" className="form-control mb-3 p-2" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                
                </div>
                </div>
                <textarea name="" id="" cols="30" rows="4" placeholder="Message" className="form-control mb-4 p-2" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <button type="submit" className="btn">Submit</button>
                </form>
                </div>       
      </section>
    </div>
  )
}

export default Register