/**
* Chat
*/
import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';

// components
import ChatArea from './components/ChatArea';
import ChatSidebar from './components/ChatSidebar';

const drawerWidth = 310;

const styles = theme => ({
	root: {
		flexGrow: 1,
		zIndex: 1,
		overflow: 'hidden',
		position: 'relative',
		display: 'flex',
		width: '100%',
	},
	toolbar: theme.mixins.toolbar,
	appBar: {
		position: 'absolute',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	drawerPaper: {
		width: 230,
		[theme.breakpoints.up('md')]: {
			position: 'relative',
			width: drawerWidth
		},
	},
	content: {
		flexGrow: 1
	},
});

class ChatList extends Component {

	state = {
		mobileOpen: false,
	};

	handleDrawerToggle = () => {
		this.setState({ mobileOpen: !this.state.mobileOpen });
	}

	render() {
		const { classes, theme } = this.props;
		const drawer = <ChatSidebar />
		return (
			<div className="chat-wrapper">
				<div className={classes.root}>
					<AppBar className={classes.appBar}>
						<Toolbar>
							<IconButton
								color="inherit"
								aria-label="open drawer"
								onClick={this.handleDrawerToggle}
							>
								<MenuIcon />
							</IconButton>
						</Toolbar>
					</AppBar>
					<Hidden mdUp>
						<Drawer
							variant="temporary"
							anchor={theme.direction === 'rtl' ? 'right' : 'left'}
							open={this.state.mobileOpen}
							onClose={this.handleDrawerToggle}
							classes={{
								paper: classes.drawerPaper,
							}}
							ModalProps={{
								keepMounted: true,
							}}
						>
							{drawer}
						</Drawer>
					</Hidden>
					<Hidden smDown implementation="css">
						<Drawer
							variant="permanent"
							open
							classes={{
								paper: classes.drawerPaper,
							}}
						>
							{drawer}
						</Drawer>
					</Hidden>
					<div className={classes.content}>
						<ChatArea />
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(ChatList);
