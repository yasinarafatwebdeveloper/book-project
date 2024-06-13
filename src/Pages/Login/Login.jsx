// import React from 'react';

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const Login = () => {
const {signin,user}=useContext(AuthContext);
const navigate=useNavigate()

const handleLoginSubmit=(event)=>{

event.preventDefault();
const form=event.target;
const email=form.email.value;
const password=form.password.value;



console.log(email,password)
signin(email,password)

.then(result=>{

  navigate(user?"/":"/login")
  console.log(result.user)

})
.catch(error=>{
  console.log(error)
})


}

    return (
        <div className="">
        <div className="hero min-h-screen bg-base-200 ">
  <div className="hero-content ">
   
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-20">
      <form onSubmit={handleLoginSubmit} className="card-body">
        <h2 className="text-3xl">Login</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          {/* <button className="btn btn-primary">Login</button> */}
          <button className="btn btn-primary" type="submit">Login</button>
          <p>do you Register?
            <Link to="/register"><a href="">please Register</a></Link>
          </p>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
    );
};

export default Login;