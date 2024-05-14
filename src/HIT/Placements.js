import React from 'react'
import placement1 from "./images/placement 1.jpg"
import placement2 from "./images/placement 2.jpg"
import placement3 from "./images/PLACEMENT 3.jpg"
import placement4 from "./images/PLACEMENT 4.jpg"
import placement5 from "./images/placement 5.jpg"
import placement6 from "./images/placement 6.jpg"
function Placements() {
  return (
    <div>
            <section className="container-fluid placement p-5">
                <h1 className="mb-5">Recent <span className="text-danger">Placements</span></h1>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                        <img src={placement1} alt="" className="w-100"/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                        <img src={placement2} alt="" className="w-100"/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                        <img src={placement3} alt="" className="w-100"/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                        <img src={placement4} alt="" className="w-100"/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                        <img src={placement5} alt="" className="w-100"/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                        <img src={placement6} alt="" className="w-100"/>
                    </div>
                </div>
            </section>

    </div>
  )
}

export default Placements