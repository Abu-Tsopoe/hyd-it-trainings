import axios from 'axios'
import React, { useState } from 'react'

const AddBatches = () => {
    const [course, setCourse] = useState("")
    const [date, setDate] = useState("")
    const [timings, setTimings] = useState("")
    const [duration, setDuration] = useState("")
    const [trainer, setTrainer] = useState("")
   
    const addBatch = (e) =>{
        e.preventDefault()
        axios.post ("http://localhost:4000/batches", {course, date, timings, duration, trainer})
        .then(()=>{
            alert ("Batch Added Successfully")
            setCourse("")
            setDate("")
            setTimings("")
            setDuration("")
            setTrainer("")
    })   
            .catch((err) => {
                console.log(err);
            })
    }
    
        return (
            <div className='container-fluid py-5'>
                <h1>Add Batches</h1>
                <div className='container col-12 col-lg-6 add-batches mt-5 p-5'>                    
                    <form onSubmit={addBatch} >
                        <input type='text' name='course' className='form-control mb-3 p-2' placeholder='Course Name' value={course} onChange={(e)=> setCourse(e.target.value)} />
                        <input type='date' name='date' className='form-control mb-3 p-2' value={date} onChange={(e) => setDate(e.target.value)}/>
                        <input type='text' name='timings' className='form-control mb-3 p-2' placeholder='Batch Timings' value={timings} onChange={(e) => setTimings(e.target.value)} />
                        <input type='text' name='duration' className='form-control mb-3 p-2' placeholder='Course Duration' value={duration} onChange={(e) => setDuration(e.target.value)} />
                        <input type='text' name='trainer' className='form-control mb-3 p-2' placeholder='Trainer Name' value={trainer} onChange={(e) => setTrainer(e.target.value)}/>
                        <input type='submit' value="Add Batch" className='btn btn-danger p-2' />
                    </form>
                </div>
                </div>
        )
    }
export default AddBatches
