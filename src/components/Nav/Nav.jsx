import { Link, useLocation } from "react-router-dom";
import "./Nav.css";

function Nav() {

  const location = useLocation();
  const pathname = location.pathname; // The current URL path
  
  if(pathname === "/contact"){
    document.body.parentElement.classList.add("white")
  }
  else{
    document.body.parentElement.classList.remove("white")
  }
  return (
    <div>
      <nav className={`nav ${pathname ==="/contact"? "nav-white" : ""}`}>
        <div className="left-nav">
        <Link to='/'>
          <span >Navarre Lopez Visual</span>
        </Link>
        </div>
        <div className='rigth-nav'>
          <Link to='work'>Work</Link>
          <Link to='about'>About</Link>
          <Link to='contact'>Contact</Link>
        </div>
      </nav>
      <div className={` ${pathname ==="/contact"? "black-line" : "white-line"}`}></div>
    </div>
  );
}

export default Nav;
