import React, { Component } from 'react';

import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import WhatshotIcon from '@material-ui/icons/Whatshot';

import './Sidebar.css';

class Sidebar extends Component {
	render() {
		return (
			<div>
				<div>
					<div className='icon'>
						<HomeIcon />
						<h3>Home</h3>
					</div>
					<div className='icon'>
						<WhatshotIcon />
						<h3>Trending</h3>
					</div>
					<div className='icon'>	
						<SubscriptionsIcon />
						<h3>Subscription</h3>
					</div>
				</div>
				<br />
				<div>
					<h3>Library</h3>
					<h3>History</h3>
					<h3>Your videos</h3>
					<h3>Watch later</h3>
					<h3>Liked videos</h3>
				</div>
				<footer className="App-footer">
					About Press Copyright Contact us
					<br />
					Creator Advertise Developers
					<br />
					Terms Privacy Policy & Safety
					<br />
					How YouTube works Test new features
					<br />
					© 2020 Google LLC
				</footer>
			</div>
		);
	}
}

export default Sidebar;
