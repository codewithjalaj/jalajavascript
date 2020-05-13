import React from 'react';
import '../../styles/base.css';
import '../../styles/portfolio.css';
import { Link } from 'gatsby';
// import Config from '../../../data/SiteConfig';

const Portfolio = () => {
	return (
		<>
			<header className="header"></header>
			<nav className="navigation">
				<div className="header-logo">&lt;JALAJ/&gt;</div>
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
						<Link to="#about">About</Link>
					</li>
				</ul>
			</nav>
			<section>
				<div className="text">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque consectetur nulla fuga ab laborum
					exercitationem consequatur veniam, similique error unde dolorem repudiandae natus adipisci beatae
					nemo dicta culpa? Odio repellat accusamus voluptates adipisci, cum sit eaque. Ipsam maiores
					voluptate voluptatum aliquam, quae earum sapiente reiciendis, rerum eum accusantium quo, et
				</div>
			</section>
		</>
	);
};

export default Portfolio;
