import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewStudentReg = () => {
    const [studentReg, setStudentReg] = useState([])
    
  useEffect(() => {
    axios.get("http://localhost:4000/registration")
    .then((res) => setStudentReg(res.data))
    .catch((err) => console.log(err))
  })

  return (
    <div>
        <section className="container-fluid StudentReg py-5">
        <h1>Student Registration</h1>
        <div className=' mt-5'>             
                <table className="table table-bordered table-hover">
                    <thead className='table-dark'>
                    <tr>
                    <th>Course</th>
                    <th>Training</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Phone</th>
                    <th>Message</th>
                    </tr>
                    </thead>
                    <tbody>
                   {studentReg.map((register) => {
                    return(
                      <tr>
                      <td>{register.course}</td>
                      <td>{register.training}</td>
                      <td>{register.name}</td>
                      <td>{register.email}</td>
                      <td>{register.subject}</td>
                      <td>{register.phone}</td>
                      <td>{register.message}</td>
                      </tr>
                    )
                   })}
                    </tbody>
                  </table>
                </div>  
            </section>
    </div>
  )
}

export default ViewStudentReg