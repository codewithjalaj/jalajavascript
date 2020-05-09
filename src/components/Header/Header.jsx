import React from 'react';
import './Header.css';
import { Link } from 'gatsby';
// import Config from '../../../data/SiteConfig';

const Header = () => {
	return (
		<>
			<div className="header"></div>
			<nav className="navigation">
				<div className="header-logo">
					&lt;JALA<span class="split">J</span>/&gt;
				</div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<a href="#portfolio">Portfolio</a>
					</li>
					<li>
						<Link to="/blog">Blog</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Header;
