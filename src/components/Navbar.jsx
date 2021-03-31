import React from "react";
import icon from "./img/mymizu-white-icon.png";
import iconFlip from "./img/mymizu-white-icon-flip.png";
import iconTracker from "./img/tracker-icon.png";
import iconMeatball from "./img/meatball-icon.png";

function Navbar() {
  return (
    <nav id="nav">
      <ul>
        <li>
          <a href="/">
            <div>
              <img src={icon} alt="icon" />
            </div>
            <div>Refill Map</div>
          </a>
        </li>
        <li>
          <a href="/route">
            <div>
              <img src={iconFlip} alt="icon" />
            </div>
            <div>Route</div>
          </a>
        </li>
        <li>
          <div>
            <img src={iconTracker} alt="icon" />
          </div>
          <div>Refill Tracker</div>
        </li>
        <li>
          <div>
            <img src={iconMeatball} alt="icon" />
          </div>
          <div>Others</div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
