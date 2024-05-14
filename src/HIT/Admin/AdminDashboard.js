import React, { useState } from 'react'
import Welcome from './Welcome'
import AddCourses from './AddCourses'
import ViewCourses from './ViewCourses'
import AddBatches from './AddBatches'
import ViewBatches from './ViewBatches'
import LatestNews from './LatestNews'
import ViewEnquiries from './ViewEnquiries'
import ViewDemoReg from './ViewDemoReg'
import ViewStudentReg from './ViewStudentReg'

const AdminDashboard = () => {
    const [view, setView] = useState("")
    const DashboardView = () =>{
        let output = "";
        if(view === ""){
            output = <Welcome/>
        } else if(view === "addCourses"){
            output = <AddCourses/>
        }
        else if(view === "viewCourses"){
            output = <ViewCourses/>
        }
        else if(view === "addBatches"){
            output = <AddBatches/>
        }
        else if(view === "viewBatches"){
            output = <ViewBatches/>
        }
        else if(view === "latestnews"){
            output = <LatestNews/>
        }
        else if(view === "enquiries"){
            output = <ViewEnquiries/>
        }
        else if(view === "demo"){
            output = <ViewDemoReg/>
        }
        else if(view === "registration"){
            output = <ViewStudentReg/>
        }
        return output

    }
  return (
    <div className='container-fluid dashboard'>
        <div className='row'>
            <div className='col-12 col-lg-3 text-center py-3 mb-3'>
            <aside>
            <h4 className='mb-3'>Admin Dashboard</h4>
            <button onClick={()=>setView("addCourses")}>Add Courses</button>
            <button onClick={()=>setView("viewCourses")}>View Courses</button>
            <button onClick={()=>setView("addBatches")}>Add Batches</button>
            <button onClick={()=>setView("viewBatches")}>View Batches</button>
            <button onClick={()=>setView("latestnews")}>Latest News</button>
            <button onClick={()=>setView("enquiries")}>View Enquiries</button>
            <button onClick={()=>setView("demo")}>View Demo Registration</button>
            <button onClick={()=>setView("registration")}>View Student Registration</button>
        </aside>
            </div>
            <div className='col-12 col-lg-9'>
            {DashboardView()}
            </div>
        </div>
    </div>
  )
}

export default AdminDashboard