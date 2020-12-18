import React from 'react';

import "./VideoBox.css";

const VideoBox = () => {
	return (
		<div className="VideoBox">
			<img alt='' src="https://image.shutterstock.com/z/stock-photo-young-woman-at-exhibition-in-modern-art-gallery-1664204695.jpg" />
			<div className="VideoBox-detail">
				<img alt='' src="https://image.shutterstock.com/z/stock-photo-young-woman-at-exhibition-in-modern-art-gallery-1664204695.jpg" />
				<div>
					<h3>First Video</h3>
					Channel name
					<p>3M * 10 days ago</p>
				</div>
			</div>
		</div>
	);
}

export default VideoBox;
