import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className='home'>
      <nav className='nav'>
        <div className="left-nav">
        <Link to='/' className='stack' style={{"--stacks": "3"}}>
          <span style={{"--index": "0"}}>Navarre Lopez Visual</span>
          <span style={{"--index": "1"}}>Navarre Lopez Visual</span>
          <span style={{"--index": "2"}}>Navarre Lopez Visual</span>
        </Link>
        </div>
        <div className='rigth-nav'>
          <Link to='work'>Work</Link>
          <Link to='about'>About</Link>
          <Link to='contact'>Contact</Link>
        </div>
      </nav>
      <div className='white-line'></div>
    </div>
  );
}

export default Nav;
