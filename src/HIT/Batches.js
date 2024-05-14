import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Demo from './Demo'


const Batches = () => {
  const [batches, setBatches] = useState([])
  useEffect(() => {
    axios.get("http://localhost:4000/batches")
    .then((res) => setBatches(res.data))
    .catch((err) => console.log(err))
  }
  )
  return (
    
      <div>
        <section className="container-fluid batches py-5">
      <h1>New <span className='text-danger'>Batches</span></h1>
        <div className='container mt-5 col-12'>             
                <table className="table table-bordered table-hover">
                    <thead className='table-dark'>
                    <tr>
                    <th>Course</th>
                    <th>Date</th>
                    <th>Timings</th>
                    <th>Duration</th>
                    <th>Trainer</th>
                    <th>Register for Demo</th>
                    </tr>
                    </thead>
                    <tbody>
                   {batches.map((batch) => {
                    return(
                      <tr>
                      <td>{batch.course}</td>
                      <td>{batch.date}</td>
                      <td>{batch.timings}</td>
                      <td>{batch.duration} Months</td>
                      <td>{batch.trainer}</td>
                      <td className='text-center'><button className='btn btn-danger' data-bs-target="#register" data-bs-toggle="modal">Register Now</button></td>
                      </tr>
                    )
                   })}
                    </tbody>
                </table>
                <div className='modal fade' id='register'>
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h4>Register for a demo class</h4>
                    <button className='btn-close' data-bs-dismiss="modal"></button>
                  </div>
                  <div className='modal-body'>
                    <Demo/>
                  </div>
                </div>
              </div>
            </div>
                </div>  
            </section>
    </div>
  )
}

export default Batches 