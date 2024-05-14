import axios from 'axios'
import React, { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const submitEnquiry = (e) => {
    e.preventDefault()
    axios.post("http://localhost:4000/enquiries", {name, email, subject, phone, message})
    .then(()=>{
      alert ("Sent succesfully")
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
      <section className="container-fluid enquiry py-5">
        <div className="container">
          <div className="row">
              <div className="col-12 col-lg-8">
                <div className="bg-white p-5">
                <form onSubmit= {submitEnquiry}> 
                <h5 className="mb-3">Quick Enquiry</h5>
                <div className="row">
                <div className="col-12 col-md-6 mb-3">
                <input type="text" name="studentName" placeholder="Name" className="form-control mb-3 p-2" value={name} onChange={(e) => setName(e.target.value)}/>
                <p id="nameNote" className="text-danger"></p>
                </div>
                <div className="col-12 col-md-6">
                <input type="text" name="email" placeholder="Email ID" className="form-control mb-3 p-2" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <p id="emailNote" className="text-danger"></p>
                </div>
                <div className="col-12 col-md-6">
                <input type="text" name="subject" placeholder="Subject" className="form-control mb-3 p-2" value={subject} onChange={(e) => setSubject(e.target.value)}/>
                <p id="subjectNote" className="text-danger"></p>
                </div>
                <div className="col-12 col-md-6">
                <input type="text" name="phone" placeholder="Phone Number" className="form-control mb-3 p-2" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <p id="phoneNote" className="text-danger"></p>
                </div>
                </div>
                <textarea name="" id="" cols="30" rows="4" placeholder="Message" className="form-control mb-4 p-2" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <button type="submit" className="btn">Send</button>
                </form>
                </div>
              </div>
                <div className="col-12 col-lg-4">
                <div className="bg-white p-5">
                <h5 className="mb-3">Address</h5>
                <p><i className="bi bi-house-door-fill"></i>House No 40, Third Floor, Vittalrao Nagar, Madhapur, Hitech City Main Road, Hyderabad, Telangana- 081</p>
                <p><i className="bi bi-telephone-fill"></i> +91 81439 56849</p>
                <p><i className="bi bi-envelope"></i>info@hyderabadittrainings.com</p>
                </div>
                </div>
              </div>             
        </div>           
      </section>
      <section className="container-fluid p-0">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.324605807166!2d78.38211137389314!3d17.444170883452678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91065c1d3e53%3A0x2d84d6e311a69e21!2sHyderabad%20IT%20Trainings%20-%20Python%20Java%20MERN%20Full%20Stack%20Web%20Development%20React%20JS%20PHP%20UI%20UX%20Design%20Training%20Institute%20Hyderabad!5e0!3m2!1sen!2sin!4v1709610523998!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'></iframe>
      </section>
      </div>
   
  )
}

export default Contact