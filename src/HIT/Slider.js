import React from 'react'
import homelogo1 from "./images/home logo 1.jpg"
import homelogo2 from "./images/home logo 2.jpg"
import homelogo3 from "./images/home logo 3.jpg"
import Courses from './Courses'
import Batches from './Batches'
import Students from './Students'
import Placements from './Placements'
import Demo from './Demo'
import News from './News'


function Slider() {
  return (
    <div className='container-fluid p-0'>
        <div className="carousel slide" data-bs-ride="carousel" id="carousel-slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={homelogo1} className="w-100" alt=""/>
                    </div>              
                    <div className="carousel-item">
                        <img src={homelogo2} className="w-100" alt=""/>
                    </div>                             
                    <div className="carousel-item">
                        <img src={homelogo3} className="w-100" alt=""/>
                    </div>
                </div>               
                <div className="carousel-indicators">
                    <button data-bs-target="#carousel-slide" data-bs-slide-to="0" className="active"></button>
                    <button data-bs-target="#carousel-slide" data-bs-slide-to="1"></button>
                    <button data-bs-target="#carousel-slide" data-bs-slide-to="2"></button>
                </div>
            </div>
            <div><News/></div>
            <div className="container-fluid about p-5">
            <div className="row">
            <div className="col-12 col-lg-8">
                <h3 className="mb-4">Welcome to <span className="text-danger">Hyderabad IT Trainings</span></h3>
                <p className="mb-4">Hyderabad IT Trainings is a Hyderabad based Training Institute delivering classNameroom and online trainings in India, USA and UK, Australia. We are Providing high quality training is our core value. We offer both classNameroom and online training on niche technologies which are in high demand. All our trainers are IT professionals with rich experience.</p>
                <p className="mb-4">Hyderabad IT Trainings is a leading training and placement company in hyderabad managed by industry experts with more than 9+ years of experience in leading MNC Companies. We are wellknown for our practical approach towards training that enables students to gain realtime exposure.</p>
                <p className="mb-4">Hyderabad IT Trainings is a <strong>one-stop shop for IT courses, Web Development services & Recruitment services</strong>. Hyderabad IT Trainings concentrates on its vision of building up strong client and business partnerships. To this end, Hyderabad IT Trainings offers Real-time and placement focuses training services.</p>
            </div>
            <div className="col-12 col-lg-4 register">
                <div className="form-title p-2 mb-3"><h4>Register Now</h4></div>
               <Demo/>
            </div>
            </div>
        </div>
        <Courses/>
        <Batches/>
        <Students/>
        <Placements/>
    </div>
  )
}

export default Slider