import React, { Component } from 'react';

import VideoBox from '../Components/VideoBox';

import "./Content.css";

class Content extends Component {
	state = {
		count: 10
	}
	render() {
		return (
			<div className="Content">
				<article className="article"><VideoBox /></article>
				<article className="article"><VideoBox /></article>
				<article className="article"><VideoBox /></article>
				<article className="article"><VideoBox /></article>
				<article className="article"><VideoBox /></article>
				<article className="article"><VideoBox /></article>
				<article className="article"><VideoBox /></article>
				<article className="article"><VideoBox /></article>
				<article className="article"><VideoBox /></article>
				<article className="article"><VideoBox /></article>
				<article className="article"><VideoBox /></article>
				<article className="article"><VideoBox /></article>
				<article className="article"><VideoBox /></article>
				<article className="article"><VideoBox /></article>
				<article className="article"><VideoBox /></article>
				<article className="article"><VideoBox /></article>
				<article className="article"><VideoBox /></article>
				<article className="article"><VideoBox /></article>
				<article className="article"><VideoBox /></article>
				<article className="article"><VideoBox /></article>
				<article className="article"><VideoBox /></article>
				<article className="article"><VideoBox /></article>
				<article className="article"><VideoBox /></article>
				<article className="article"><VideoBox /></article>
			</div>
		);
	}
}

export default Content;
