import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import './style.css'
import logo from "../components/images/logo.png"
export default function UserNavbar(){
    const dispatch=useDispatch()
    const history=useHistory()
    const state=useSelector((state)=>state);

    const logout=e=>{
        dispatch({type:'LogOut'})
        sessionStorage.clear();
        history.push("/");
    }
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-light">
              <div className="container">
              <img src={logo} alt="Logo" className="logo" style={{ width: "100px", height: "70px" }} />

                <Link className="navbar-brand" to="/"><h2>A g r i m i t r a</h2></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
                    {state.loggedin && state.loggedin.Role==="Customer" ? (<>
                      <li className="nav-item"><Link className="nav-link" to="/mybookings">My Bookings</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/">Hi {state.loggedin.Username }</Link></li>

                    <li className="nav-item"><Link className="nav-link" onClick={logout} to="/">Logout</Link></li>
                    </>
                    ) : (
                        <>
                      <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>                    
                    </>
                    )}
                  </ul>
                </div>
              </div>
            </nav>
        </>
    )
}