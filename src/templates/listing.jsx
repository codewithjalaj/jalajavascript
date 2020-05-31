import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../layout';
import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import './listing.css';
import Footer from './../components/Footer/Footer';

class Listing extends React.Component {
	renderPaging() {
		const { currentPageNum, pageCount } = this.props.pageContext;
		const prevPage = currentPageNum - 1 === 1 ? '/blog' : `/blog/${currentPageNum - 1}/`;
		const nextPage = `/blog/${currentPageNum + 1}/`;
		const isFirstPage = currentPageNum === 1;
		const isLastPage = currentPageNum === pageCount;

		return (
			<div className="paging-container">
				{!isFirstPage && (
					<Link className="pagination" to={prevPage}>
						Previous
					</Link>
				)}
				{[...Array(pageCount)].map((_val, index) => {
					const pageNum = index + 1;
					return (
						<Link
							className="pagination"
							activeClassName="page-active"
							key={`listing-page-${pageNum}`}
							to={pageNum === 1 ? '/blog' : `/blog/${pageNum}/`}
						>
							{pageNum}
						</Link>
					);
				})}
				{!isLastPage && (
					<Link className="pagination" to={nextPage}>
						Next
					</Link>
				)}
			</div>
		);
	}

	render() {
		const postEdges = this.props.data.allMarkdownRemark.edges;

		return (
			<Layout>
				<div className="listing-container">
					<div className="posts-container">
						<Helmet title={config.siteTitle} />
						<SEO />
						<PostListing postEdges={postEdges} />
					</div>
				</div>
				{this.renderPaging()}
				<Footer config={config} />
			</Layout>
		);
	}
}

export default Listing;

/* eslint no-undef: "off" */
export const listingQuery = graphql`
	query ListingQuery($skip: Int!, $limit: Int!) {
		allMarkdownRemark(sort: { fields: [fields___date], order: DESC }, limit: $limit, skip: $skip) {
			edges {
				node {
					fields {
						slug
						date
					}
					excerpt
					timeToRead
					frontmatter {
						title
						tags
						cover
						date
					}
				}
			}
		}
	}
`;
