/**
 * App Routes
 */
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// app default layout
import RctAppLayout from 'Components/RctAppLayout';

// routes
import Dashboard from './dashboard';

class MainApp extends Component {
	render() {
		const { match } = this.props;
		return (
			<RctAppLayout>
				<Route path={`${match.url}/dashboard`} component={Dashboard} />
			</RctAppLayout>
		);
	}
}

export default withRouter(connect(null)(MainApp));
