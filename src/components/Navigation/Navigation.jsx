import React from 'react';
import { Link } from 'gatsby';

import './navigation.css';

const Navigation = () => {
	return (
		<>
			<header className="site-header">
				<div className="site-logo">&lt;JALAJ/&gt;</div>
				<nav className="site-navigation">
					<ul>
						<l1>
							<Link to="/">home</Link>
						</l1>
						<l1>
							<Link to="#">Dummy</Link>
						</l1>
						<l1>
							<Link to="#">Dummy</Link>
						</l1>
						<l1>
							<Link to="/blog">Blog</Link>
						</l1>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Navigation;
