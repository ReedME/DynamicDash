/**
 * Chat Sidebar
 */
import React, { Component } from 'react';

// components
import UserList from './UserList';

class ChatSidebar extends Component {
	render() {
		return (
			<div className="chat-sidebar">
				<div className="user-mail">
					<div className="media">
						<img src={require('Assets/avatars/user-15.jpg')} alt="user prof" className="img-fluid rounded-circle mr-10" width="40" height="40" />
						<div className="media-body align-self-center">
							<h4 className="mb-0">Braxton Hudson</h4>
							<p className="text-muted mb-0 fs-12">braxton@example.com</p>
						</div>
					</div>
				</div>
				<UserList />
			</div>
		);
	}
}

export default ChatSidebar;
