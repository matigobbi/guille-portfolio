import { Work } from "../Work";
import { About } from "../About";
import { Contact } from "../Contact";
import "./Nav.css";

function Nav() {
  return (
    <div className='home'>
      <div className='nav'>
        <nav>
          <div>Navarre Lopez Visual</div>
          <div>
            <Work />
            <About />
            <Contact />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
