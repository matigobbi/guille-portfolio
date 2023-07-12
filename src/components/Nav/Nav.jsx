
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className='home'>
        <nav className='nav'>
          <div className="left-nav">Navarre Lopez Visual</div>
          <div className="rigth-nav">            
            <Link to="work">Work</Link>
            <Link to="about">About</Link>
            <Link to="contact">Contact</Link>
          </div>
        </nav>
        <div className="white-line"></div>
    </div>
  );
}

export default Nav;
