import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewEnquiries = () => {
    const [enquiries, setEnquiries] = useState([])
    
  useEffect(() => {
    axios.get("http://localhost:4000/enquiries")
    .then((res) => setEnquiries(res.data))
    .catch((err) => console.log(err))
  })

  return (
    <div>
        <section className="container-fluid enquiries py-5">
        <h1>Enquiries</h1>
        <div className=' mt-5'>             
                <table className="table table-bordered table-hover">
                    <thead className='table-dark'>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Phone</th>
                    <th>Message</th>
                    </tr>
                    </thead>
                    <tbody>
                   {enquiries.map((enquiry) => {
                    return(
                      <tr>
                      <td>{enquiry.name}</td>
                      <td>{enquiry.email}</td>
                      <td>{enquiry.subject}</td>
                      <td>{enquiry.phone}</td>
                      <td>{enquiry.message}</td>
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

export default ViewEnquiries