import { Work } from "./Work";
import { About } from "./About";
import { Contact } from "./Contact";

function Nav() {
  return (
    <div className='home'>
      <nav>
        <div>Navarre Lopez Visual</div>
        <div>
          <Work />
          <About />
          <Contact />
        </div>
      </nav>
    </div>
  );
}

export default Nav;
