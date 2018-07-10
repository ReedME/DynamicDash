/**
 * App.js Layout Start Here
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

// rct theme provider
import RctThemeProvider from './RctThemeProvider';

//Main App
import MainApp from 'Routes';

/**
 * Initial Path To Check Whether User Is Logged In Or Not
 */
const InitialPath = ({ component: Component, ...rest, authUser }) =>
	<Route
		{...rest}
		render={props => <Component {...props} />
		}
	/>;

class App extends Component {
	render() {
		const { location, match, user } = this.props;
		if (location.pathname === '/') {
			return (<Redirect to={'/app/dashboard/ecommerce'} />);
		}
		return (
			<RctThemeProvider>
				<NotificationContainer />
				<InitialPath
					path={`${match.url}app`}
					authUser={user}
					component={MainApp}
				/>
			</RctThemeProvider>
		);
	}
}

// map state to props
const mapStateToProps = ({ authUser }) => {
	const { user } = authUser;
	return { user };
};

export default connect(mapStateToProps)(App);
