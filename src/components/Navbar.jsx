import React from "react";
import icon from "./img/mymizu-white-icon.png";
import iconFlip from "./img/mymizu-white-icon-flip.png";
import iconTracker from "./img/tracker-icon.png";
import iconMeatball from "./img/meatball-icon.png";

function Navbar() {
  return (
    <nav id="nav">
      <div className="navBtn">
        <a href="/">
          <div>
            <img src={icon} alt="icon" />
          </div>
          <div>給水マップ</div>
        </a>
      </div>

      <div className="navBtn">
        <a href="/route">
          <div>
            <img src={iconFlip} alt="icon" />
          </div>
          <div>ルート</div>
        </a>
      </div>

      <div className="navBtn">
        <div>
          <img src={iconTracker} alt="icon" />
        </div>
        <div>給水トラッカー</div>
      </div>

      <div className="navBtn">
        <div>
          <img src={iconMeatball} alt="icon" />
        </div>
        <div>その他</div>
      </div>
    </nav>
  );
}

export default Navbar;
