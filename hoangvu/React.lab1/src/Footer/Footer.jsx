import React from "react";
import "./Footer.css";
import Link from "../shared/Link/Link";

function Footer() {
  return (
    <nav className="Footer">
      <ul>
          <Link url="#">Going to 1</Link>
          <Link url="#">Going to 2</Link>
          <Link url="#">Going to 3</Link>
          <Link url="#">Going to 4</Link>
          <Link url="#">Going to 5</Link>
          <Link url="#">Going to 6</Link>
          <Link url="#">Going to 7</Link>
          <Link url="#">Going to 8</Link>
          <Link url="#">Going to 9</Link>
          <Link url="#">Going to 10</Link>
          <Link url="#">Going to 11</Link>
        <Link url="#">
          <img id="logo" src="/blue-origami-bird-flipped.png" alt="my-app-logo" />
        </Link>
      </ul>
    </nav>
  );
}

export default Footer;
