/**
 * Agency App
 */
import React, { Component } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';

// routes
import Dashboard from 'Routes/dashboard';

// Agency layout
import RctAgencyLayout from 'Components/RctAgencyLayout';

class RctAgencyApp extends Component {
   render() {
      const { match, location } = this.props;
      if (location.pathname === '/agency') {
         return (<Redirect to={'/agency/dashboard/ecommerce'} />);
      }
      return (
         <RctAgencyLayout>
            <Route path={`${match.url}/dashboard`} component={Dashboard} />
         </RctAgencyLayout>
      );
   }
}

export default withRouter(RctAgencyApp);
