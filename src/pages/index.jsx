import React from 'react';
import { motion } from 'framer-motion';

import TypeIt from 'typeit-react';
import Layout from '../layout/index';
import '../styles/homepage.css';

const HomePage = () => {
	return (
		<Layout>
			<div className="homepage">
				<div className="homepage__logo">&lt;Ja/aJ&gt;</div>
				<div className="homepage__navigation">Navigation</div>
				<div className="homepage__contact">Contact</div>
				<div className="homepage__social">Social</div>

				<div className="homepage__intro">
					<motion.span
						animate={{
							x: 0,

							backgroundColor: '#000',
							boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
						}}
					>
						Hello there!
					</motion.span>
					<span>I am Jalaj</span>
					<TypeIt
						options={{
							// speed: 10,
							waitUntilVisible: true,
						}}
					>
						{`A Fullstack Web Developer`}
					</TypeIt>
				</div>
			</div>
		</Layout>
	);
};

export default HomePage;
