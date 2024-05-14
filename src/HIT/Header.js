import React from "react";
import logo from "./images/logo.jpg"
import { NavLink } from "react-router-dom";
function Header(){
    return(
        <div className="container-fluid header px-5">
            <nav className="navbar navbar-expand-lg  ">
            <NavLink to="" className="navbar-brand">
                <img src={logo} alt=""/>
            </NavLink>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse justify-content-end" id="menu">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">HOME</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-link">ABOUT US</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/courses" className="nav-link">COURSES</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/batches" className="nav-link">NEW BATCHES</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/placements" className="nav-link">PLACEMENTS</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/register" className="nav-link">REGISTER</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/students" className="nav-link">STUDENTS ZONE</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-link">CONTACT US</NavLink>
                    </li>
                </ul>
            </div> 
        </nav>

        </div>
    )
}
export default Header