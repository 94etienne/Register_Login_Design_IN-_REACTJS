import React from "react";
import { Link } from "react-router-dom";

function RegisterDesign(){
    return(
       <>
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
        
        <div className="bg-white p-3 rounded w-50">
        
            <h2>Sign In</h2>
            {/* handleSubmit===function */}
            <form>
            <div className="mb-3">
                    <label htmlFor="name"> <strong>Name</strong></label>
                    <input type="text" placeholder="enter your name" name="name" autoComplete="off"  
                   className="form-control rounded-0"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email"> <strong>Email</strong></label>
                    <input type="email" placeholder="enter your email" name="email" autoComplete="off"  
                   className="form-control rounded-0"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password"> <strong>Password</strong></label>
                    <input type="password" placeholder="enter your password" name="password" autoComplete="off"  
                     className="form-control rounded-0"/>
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-0">SignUp</button>
            <p>You are agree our terms and policies</p>
            <Link to="/login"  className="btn btn-default w-100  bg-light rounded-0 text-decoration-none">Login</Link>
            </form>
        </div>
            
            
            </div>
            </>
    )
}
export default RegisterDesign