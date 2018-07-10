/**
 * Horizontal App
 */
import React, { Component } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';

// routes
import Dashboard from 'Routes/dashboard';

// horizontal layout
import RctHorizontalLayout from 'Components/RctHorizontalLayout';

class RctHorizontalApp extends Component {
	render() {
		const { match, location } = this.props;
		if (location.pathname === '/horizontal') {
			return (<Redirect to={'/horizontal/dashboard/ecommerce'} />);
		}
		return (
			<RctHorizontalLayout>
				<Route path={`${match.url}/dashboard`} component={Dashboard} />
			</RctHorizontalLayout>
		);
	}
}

export default withRouter(RctHorizontalApp);
