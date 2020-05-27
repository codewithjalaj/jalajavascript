import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import './index.css';
import Navigation from './../components/Navigation/Navigation';

export default class Layout extends React.Component {
	render() {
		const { children } = this.props;
		return (
			<div>
				<Helmet>
					<meta name="description" content={config.siteDescription} />
					<html lang="en" />
				</Helmet>
				<Navigation />
				{children}
			</div>
		);
	}
}
