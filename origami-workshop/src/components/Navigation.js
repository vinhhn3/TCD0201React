import React from 'react';
import Link from './Link';

function Navigation() {
  return(
      <nav className="Navigation">
          <ul>
              <Link url="#">
                  <img id="logo" src={"/white-origami-bird.png"} alt="logo" height="90px"/>
              </Link>
              <Link url="#">
                  Going to 1
              </Link>
              <Link url="#">
                  Going to 2
              </Link>
              <Link url="#">
                  Going to 3
              </Link>
              <Link url="#">
                  Going to 4
              </Link>
              <Link url="#">
                  Going to 5
              </Link>
              <Link url="#">
                  Going to 6
              </Link>
              <Link url="#">
                  Going to 7
              </Link>
              <Link url="#">
                  Going to 8
              </Link>
              <Link url="#">
                  Going to 9
              </Link>
              <Link url="#">
                  Going to 10
              </Link>
              <Link url="#">
                  Going to 11
              </Link>
          </ul>
      </nav>
  )
}

export default Navigation;
