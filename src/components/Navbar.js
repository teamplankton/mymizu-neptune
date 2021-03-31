import React from 'react';

function Navbar() {
    return (
        <nav id="nav">
	<ul>
		<li><a href="/">Refill Map</a></li>
		<li><a href="/route">Route</a></li>
		<li><a href="/tracker">Refill Tracker</a></li>
		<li><a href="/others">Others</a></li>
	</ul>
</nav>
    );
}

export default Navbar;