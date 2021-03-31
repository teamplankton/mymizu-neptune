import React from 'react';
import icon from './mymizu-white-icon.png';
import iconFlip from './mymizu-white-icon-flip.png';
import iconTracker from './tracker-icon.png';
import iconMeatball from './meatball-icon.png';

function Navbar() {
    return (
        <nav id="nav">
	<ul>
		<li><a href="/">
				<div>
					<img src={icon} alt="icon" />
				</div>
				<div>
					Refill Map
				</div>
			</a>
		</li>
		<li><a href="/route">
				<div>
					<img src={iconFlip} alt="icon" />
				</div>
				<div>
					Route
				</div>
			</a>
		</li>
		<li><a href="/tracker">
				<div>
					<img src={iconTracker} alt="icon" />
				</div>
				<div>
					Refill Tracker
				</div>
			</a>
		</li>
		<li><a href="/others">
				<div>
					<img src={iconMeatball} alt="icon" />
				</div>
				<div>
					Others
				</div>
			</a>
		</li>
	</ul>
</nav>
    );
}

export default Navbar;