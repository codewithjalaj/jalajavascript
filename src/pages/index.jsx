import React from 'react';

import { motion } from 'framer-motion';

import TypeIt from 'typeit-react';
import Layout from '../layout/index';
import '../styles/homepage.css';
import { Link } from 'gatsby';

const variant = {
	initial: {
		rotate: 180,
	},
	final: {
		rotate: 0,
		transition: { type: 'spring', stiffness: 300, delay: 2 },
	},
};

const HomePage = () => {
	return (
		<Layout>
			<div className="homepage">
				<motion.div variants={variant} initial="initial" animate="final" className="homepage__logo">
					&lt;Ja/aJ&gt;
				</motion.div>
				<div className="homepage__navigation">
					<Link to="/blog">Navigation</Link>
				</div>
				<div className="homepage__contact">Contact</div>
				<div className="homepage__social">Social</div>

				<motion.div
					initial={{ y: '-50vw', opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.5, type: 'spring' }}
					className="homepage__intro"
				>
					<span>Hello there!</span>
					<span>I am Jalaj</span>
					<TypeIt
						options={{
							// speed: 10,
							waitUntilVisible: true,
						}}
					>
						A Fullstack Web Developer
					</TypeIt>
				</motion.div>
			</div>
		</Layout>
	);
};

export default HomePage;
