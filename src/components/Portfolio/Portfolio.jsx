import React from 'react';
import '../../styles/base.css';
import '../../styles/portfolio.css';
import { Link } from 'gatsby';
// import Config from '../../../data/SiteConfig';

const Portfolio = () => {
	return (
		<>
			<section className="header">
				<div class="content">
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. In sunt dignissimos adipisci ex cum
						totam consequuntur, aliquam architecto et perferendis iste est rerum repudiandae quo recusandae
						itaque? Cum quis placeat minima modi vel enim asperiores, quae reprehenderit reiciendis libero
						assumenda a ab unde neque repellat, aperiam vitae magni veritatis? Laborum omnis non quos facere
						reprehenderit doloremque quae quisquam! Dicta nostrum voluptate velit cupiditate adipisci
						laudantium ullam voluptas, sequi, voluptatum eligendi doloribus, accusantium tenetur harum
						deleniti doloremque obcaecati officiis. Provident pariatur, sit quidem quam cupiditate molestiae
						consectetur? Incidunt, consectetur. At quo ducimus odio, ab provident error voluptate
						praesentium magni asperiores minus.
					</div>
				</div>
			</section>
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
		</>
	);
};

export default Portfolio;
