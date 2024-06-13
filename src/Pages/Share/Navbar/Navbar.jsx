
import { Link } from "react-router-dom";
import booklogo from"../../../../bookLogo/6863707.jpg"
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
const Navbar = () => {

const bookNav=<>

<Link className="hover:bg-pink-700 rounded  bg-gray-600 text-white mr-3" to="/"><li><a>Home</a></li></Link>
       
<Link className="hover:bg-pink-700 rounded  bg-gray-600 text-white mr-3" to="/"><li><a>Add Book</a></li></Link>
<Link className="hover:bg-pink-700 rounded  bg-gray-600 text-white mr-3" to="/"><li><a>All Book</a></li></Link>
<Link className="hover:bg-pink-700 rounded  bg-gray-600 text-white mr-3" to="/"><li><a>Broweed Book</a></li></Link>

<Link  className="hover:bg-pink-700 rounded  bg-gray-600 text-white mr-3" to="/login"><li><a>Login</a></li></Link>
<Link  className="hover:bg-pink-700 rounded  bg-gray-600 text-white mr-3" to="/register"><li><a>Register</a></li></Link>
</>
const {user,logout}=useContext(AuthContext)


const handleLogClick=()=>{


  logout()
  .then(()=>{


  })
  .catch((error=>{
    console.log(error)
  }))
}

    return (
        <div className="navbar bg-base-100 bg-teal-300 fixed z-30 mr-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
     {
        bookNav
     }
      </ul>
    </div>
<Link to="/">
<img className="w-20" src={booklogo} alt="" />
</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
  {
    bookNav
  }
    </ul>
  </div>
  <div className="navbar-end mr-10">
  {
    user?<button onClick={handleLogClick}>logout</button>:
    
    
    <Link to="/login">
    <button>login</button>

    </Link>
  }

  </div>
</div>
    );
};

export default Navbar;