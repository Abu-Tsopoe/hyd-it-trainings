import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewBatches = () => {
    const [batches, setBatches] = useState([])
    const [id, setId] = useState("")
    const [course, setCourse] = useState("")
    const [date, setDate] = useState("")
    const [timings, setTimings] = useState("")
    const [duration, setDuration] = useState("")
    const [trainer, setTrainer] = useState("")
  useEffect(() => {
    axios.get("http://localhost:4000/batches")
    .then((res) => setBatches(res.data))
    .catch((err) => console.log(err))
  }
  )
  const editBatch = (batchId) =>{
    axios.get(`http://localhost:4000/batches/${batchId}`)
    .then((res)=>{
        setId(res.data.id)
        setCourse(res.data.course)
        setDate(res.data.date)
        setTimings(res.data.timings)
        setDuration(res.data.duration)
        setTrainer(res.data.trainer)
    })
  }
  
  const updateBatch = (e) =>{
        e.preventDefault()
        axios.put("http://localhost:4000/batches/" + id, {id, course, date, timings, duration, trainer})
        .then(()=>alert ("Batch Updated Successfully"))
        .catch((err)=>console.log(err))
  }
  const deleteBatch = (batchId) => {
    axios.delete(`http://localhost:4000/batches/${batchId}`)
        .then(() => alert("Deleted Successfully"))
        .catch((err) => console.log(err))
}
  return (
    <div>
        <section className="container-fluid batches py-5">
        <h1>View Batches</h1>
        <div className=' mt-5'>             
                <table className="table table-bordered table-hover">
                    <thead className='table-dark'>
                    <tr>
                    <th>Course</th>
                    <th>Date</th>
                    <th>Timings</th>
                    <th>Duration</th>
                    <th>Trainer</th>
                    <th>Update Batch</th>
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
                      <td className='text-center'>
                        <button className='btn btn-primary m-2' onClick={()=>editBatch(batch.id)} data-bs-target="#editBatch" data-bs-toggle="modal"><i class="bi bi-pencil-square"></i></button>
                        <button className='btn btn-danger' onClick={()=>deleteBatch(batch.id)}><i class="bi bi-trash3-fill"></i></button>
                      </td>
                      </tr>
                    )
                   })}
                    </tbody>
                </table>
                <div className='modal fade' id='editBatch'>
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h4 className='modal-title text-center'>Update Batch</h4>
                    <button className='btn-close' data-bs-dismiss="modal"></button>
                  </div>
                  <div className='modal-body'>
                   <form onSubmit={updateBatch}>
                    <input type='text' name="course" placeholder='Course Name' className='form-control mb-3' value={course} onChange={(e) => setCourse(e.target.value)}/>
                    <input type='date' name="date" placeholder='Date' className='form-control mb-3' value={date} onChange={(e) => setDate(e.target.value)}/>
                    <input type='text' name="timings" placeholder='Batch Timing' className='form-control mb-3' value={timings} onChange={(e) => setTimings(e.target.value)}/>
                    <input type='text' name="duration" placeholder='Course Duration' className='form-control mb-3' value={duration} onChange={(e) => setDuration(e.target.value)}/>
                    <input type='text' name="trainer" placeholder='Trainer Name' className='form-control mb-3' value={trainer} onChange={(e) => setTrainer(e.target.value)}/>
                    <input type='submit' value="Update Batch" className='btn btn-danger' data-bs-dismiss="modal"/>
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

export default ViewBatches