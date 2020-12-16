import React, { Component } from 'react';

import YouTubeIcon from '@material-ui/icons/YouTube';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';

import './Header.css'

class Header extends Component {
	render() {
		return (
			<div className="Header">
				<div style={{ display: 'flex', flexDirection: 'row', padding: '5px', alignItems: 'center' }}>
					<YouTubeIcon />
					<h2 style={{padding: '5px'}}>YouTube</h2>
				</div>
				<div  style={{ display: 'flex', flexDirection: 'row', padding: '5px', alignItems: 'center' }}>
					<input type="text"  />
					<SearchIcon />
				</div>
				<div>
					<NotificationsIcon />
					<PersonIcon />
				</div>
			</div>
		);
	}
}

export default Header;
