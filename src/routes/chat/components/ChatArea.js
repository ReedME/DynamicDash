/**
 * Chat Area Component
 */
import React, { Component } from 'react';
import MessageBlock from './MessageBlock';
import { FormGroup, Input } from 'reactstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import { Badge } from 'reactstrap';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withRouter } from 'react-router-dom';

// actions
import { sendMessageToUser } from 'Actions';

// app layouts
import { getAppLayout } from 'Helpers/helpers';

class ChatArea extends Component {

	state = {
		message: '',
		anchorEl: null,
		chatOptions: [
			'Mute Notifications',
			'Block',
			'Clear Chat',
			'Send Contact'
		]
	}

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	chatOptionsHandler = event => {
		this.setState({ anchorEl: event.currentTarget });
	}

	onSubmitMessage(event) {
		event.preventDefault();
		if (this.state.message !== '') {
			let data = {
				user: this.props.selectedUser,
				message: this.state.message,
				isAdmin: true,
				time: 'Just Now'
			}
			this.props.sendMessageToUser(data);
			this.setState({ message: '' });
			setTimeout(() => {
				this.refs.chatScroll.scrollToBottom();
			}, 200);
		}
	}

	getScrollHeight() {
		const { location } = this.props;
		const appLayout = getAppLayout(location)
		if (this.props.fullHeight) {
			return 'calc(100vh - 226px)';
		} else {
			switch (appLayout) {
				case 'app':
					return 'calc(100vh - 205px)';
				case 'agency':
					return 'calc(100vh - 387px)';
				case 'horizontal':
					return 'calc(100vh - 250px)';
				default:
					break;
			}
		}
	}

	render() {
		const { selectedUser, admin_photo_url } = this.props;
		if (selectedUser === null) {
			return (
				<div className="chat-box-main">
					<div className="centerlized">
						<i className="zmdi zmdi-comments font-3x"></i>
					</div>
				</div>
			);
		}
		const { chatOptions, anchorEl } = this.state;
		return (
			<div className="chat-main-body">
				<div className="chat-head">
					<div className="d-flex justify-content-between align-items-center">
						<div className="media align-items-center">
							<div className="mr-10 position-relative">
								<img
									src={selectedUser.photo_url}
									alt="user profile"
									className="rounded-circle"
									width="40"
									height="40"
								/>
								{selectedUser.isActive ?
									<Badge color="success" className="badge-xs rct-notify">&nbsp;</Badge>
									: <Badge color="warning" className="badge-xs rct-notify">&nbsp;</Badge>
								}
							</div>
							<div className="media-body">
								<h3 className="mb-0">{selectedUser.first_name}&nbsp;{selectedUser.last_name}</h3>
							</div>
						</div>
						<div>
							<IconButton aria-label="video-call">
								<i className="zmdi zmdi-videocam"></i>
							</IconButton>
							<IconButton aria-label="attachment">
								<i className="zmdi zmdi-attachment-alt"></i>
							</IconButton>
							<IconButton
								aria-owns={anchorEl ? 'simple-menu' : null}
								aria-haspopup="true"
								onClick={this.chatOptionsHandler}
							>
								<i className="zmdi zmdi-more-vert"></i>
							</IconButton>
							<Menu
								id="simple-menu"
								anchorEl={anchorEl}
								open={Boolean(anchorEl)}
								onClose={this.handleClose}
							>
								{chatOptions.map((option, key) => (
									<MenuItem key={key} onClick={this.handleClose}>{option}</MenuItem>
								))}
							</Menu>
						</div>
					</div>
				</div>
				<Scrollbars
					className="rct-scroll"
					autoHide
					ref="chatScroll"
					style={{ height: this.getScrollHeight() }}
				>
					<div className="chat-body">
						{selectedUser.previousChats.map((previousChat, key) => (
							<MessageBlock
								even={!previousChat.isAdmin}
								key={key}
								selectedUserPhotoUrl={selectedUser.photo_url}
								data={previousChat}
								adminPhotoUrl={admin_photo_url}
							/>
						))}
					</div>
				</Scrollbars>
				<div className="chat-footer d-flex no-gutters">
					<div className="col">
						<form onSubmit={(event) => this.onSubmitMessage(event)}>
							<FormGroup className="mb-0 rounded-0">
								<Input
									type="text"
									id="search-msg"
									placeholder="Type your message"
									value={this.state.message}
									className="rounded-0"
									onChange={(event) => this.setState({ message: event.target.value, })}
								/>
							</FormGroup>
						</form>
					</div>
					<Button
						onClick={(event) => this.onSubmitMessage(event)}
						className="btn-light rounded-0"
					>
						<i className="zmdi zmdi-mail-send"></i>
					</Button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ chatAppReducer }) => {
	return chatAppReducer;
}

export default withRouter(connect(mapStateToProps, {
	sendMessageToUser
})(ChatArea));
