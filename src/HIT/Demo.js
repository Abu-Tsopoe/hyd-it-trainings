import axios from 'axios'
import React, { useState } from 'react'

const Demo = () => {
   
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [course, setCourse] = useState("")
    const [message, setMessage] = useState("")
    const submitForm = (e) => {
      e.preventDefault()
      axios.post("http://localhost:4000/demo", {name, email, phone, course, message})
      .then(()=>{
        alert ("Submitted succesfully")
        setName("")
        setEmail("")
        setPhone("")
        setCourse("")
        setMessage("")
      })
      .catch((err)=> console.log(err))
    }
  return (
    <div>
            <form className="px-5" onSubmit={submitForm}> 
                <input type="text" id="name" placeholder="Name" className="form-control mb-3 p-3" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="text" id="email" placeholder="Email" className="form-control mb-3 p-3" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="text" id="phone" placeholder="Phone" className="form-control mb-3 p-3" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <select name="course" className="form-select mb-3 p-2" value={course} onChange={(e) => setCourse(e.target.value)}>
                        <option value="" disabled selected>Select Course</option>
                        <option >Python Fullstack</option>
                        <option >MERN Fullstack</option>
                        <option >UI Development</option>
                        <option >React JS</option>
                        <option >UI/UX Designing</option>
                        <option >Node JS</option>
                        <option >Web Designing</option>
                        <option >PHP with MySQL</option>
                        <option >Digital Marketing</option>
                        <option >Python</option>
                        <option >UI Designing</option>
                        <option >Django</option>
                        <option >Graphic Designing</option>
                        <option >SEO</option>
                        <option >Google Adwords</option>
                        <option >Java Fullstack</option>
                    </select> 
                <textarea name="message" id="message" cols="30" rows="2" placeholder="Message" className="form-control mb-4 p-3" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <button type="submit" className="form-control btn btn-warning">Submit</button>
            </form>
    </div>
  )
}

export default Demo