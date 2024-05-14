import React, { useState } from "react"
import logo from "./../images/logo.jpg"
import { useNavigate } from "react-router-dom"

const AdminLogin = () =>{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const LoginCheck = (e) =>{
        e.preventDefault()
        if(username === "AdminUsername" && password === "AdminPassword"){
            navigate("/admindashboard")
        }else{
            document.getElementById("errorMessage").innerHTML = "Invalid Username or Password"
        }
    }
    return(
        <div className="container p-5 text-center">
            <div className="col-12 col-lg-6 mx-auto p-5 admin-login">
                <form onSubmit={LoginCheck}>
                <img src={logo} alt="" className="mb-4 w-50"/>
                <input type="text" name="username" placeholder= "Admin Username" className="form-control mb-3 p-2" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <input type="text" name="password" placeholder="Admin Password" className="form-control mb-3 p-2" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <input type="submit" value="Login" className="btn btn-light mb-2"/>
                <p id="errorMessage" className="text-danger"></p>
                </form>
            </div>
        </div>
    )
}
export default AdminLogin