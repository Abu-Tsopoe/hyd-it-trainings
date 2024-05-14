import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewDemoReg = () => {
    const [demoReg, setDemoReg] = useState([])
    
  useEffect(() => {
    axios.get("http://localhost:4000/demo")
    .then((res) => setDemoReg(res.data))
    .catch((err) => console.log(err))
  })

  return (
    <div>
        <section className="container-fluid demoReg py-5">
        <h1>Demo Registration</h1>
        <div className=' mt-5'>             
                <table className="table table-bordered table-hover">
                    <thead className='table-dark'>
                    <tr>
                    
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Course</th>
                    <th>Message</th>
                    </tr>
                    </thead>
                    <tbody>
                   {demoReg.map((demo) => {
                    return(
                      <tr>                    
                      <td>{demo.name}</td>
                      <td>{demo.email}</td>
                      <td>{demo.phone}</td>
                      <td>{demo.course}</td>
                      <td>{demo.message}</td>
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

export default ViewDemoReg