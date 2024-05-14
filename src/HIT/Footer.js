import React from 'react'

function Footer() {
  return (
    <div>
    <div className="container-fluid footer-1 p-5">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                    <h5 className="mb-3">Hyderabad IT Trainings</h5>
                    <p>Hyderabad IT Trainings offers an excellent Software courses training with end to end support to the candidates. We offer MERN Full stack, Python Fullstack, React JS, UI Development, Web/UI Designing & Web Development.</p>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                    <h5 className="mb-3">Quick Links</h5>
                    <ul>
                        <li><i className="bi bi-chevron-right"></i>Registration</li>
                        <li><i className="bi bi-chevron-right"></i>All Courses</li>
                        <li><i className="bi bi-chevron-right"></i>Privacy Policy</li>
                        <li><i className="bi bi-chevron-right"></i>Refund Policy</li>
                    </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3 address">
                    <h5 className="mb-3">Reach Us</h5>
                    <p><i className="bi bi-house-door-fill"></i>House No 40, Third Floor
                    Vittalrao Nagar
                    Madhapur  
                    Hitech City Main Rd  
                    Hyderabad   
                    Telangana 500081
                    </p>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3 contact">
                    <h5 className="mb-3">Contact Us</h5>
                    <p><i className="bi bi-telephone-fill"></i> +91 81439 56849</p>
                    <p><i className="bi bi-envelope"></i>info@hyderabadittrainings.com</p>
                    <i className="bi bi-facebook"></i><i className="bi bi-instagram"></i><i className="bi bi-twitter"></i>
                </div>
            </div>
        </div>
        <div className="container-fluid footer-2 px-5 py-3">
            <div className="row">
                <div className="col-12 col-sm-12 col-lg-8">
                    <p>&copy; Copyrights 2023 @ Hyderabad IT Trainings - Python Java MERN Full Stack Web Development React JS PHP UI UX Design Training Institute Hyderabad All rights reserved.</p>
                </div>
                <div className="col-12 col-sm-12 col-lg-4 design">
                    <p>Designed by <a href="http://www.enuttech.com/"> ENut Technologies Pvt Ltd.</a></p>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Footer