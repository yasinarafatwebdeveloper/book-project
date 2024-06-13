import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {
    const {authRegister}=useContext(AuthContext)

    const handleRegisterSubmit=(event)=>{


        event.preventDefault();
const form=event.target;
const name=form.name.value;
const email=form.email.value;
const password=form.password.value;
console.log(email,password,name)

const rejex= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

if(!rejex.test(password)){
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "you have to at least one letter and one number",
    footer: '<a href="#">Why do I have this issue?</a>'
  });
}
else {
  Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success"
  });
}

authRegister(email,password)

.then(result=>{
    console.log(result.user)


})
.catch(error=>{
    console.log(error)
})
    }
    return (
        <div>
         <div className="hero min-h-screen bg-base-200 ">
  <div className="hero-content ">
   
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-24">
      <form onSubmit={handleRegisterSubmit} className="card-body">
        <h2 className="text-3xl">Register</h2>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" placeholder="Name" name="name" className="input input-bordered" required />
        </div>
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
          <button className="btn btn-primary" type="submit">Register</button>
          <p>do you login?
            <Link to="/login"><a href="">please login</a></Link>
          </p>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;