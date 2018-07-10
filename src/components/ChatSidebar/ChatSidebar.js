/**
 * Customizer Component
 */
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// components
import ChatBlock from './ChatBlock';

// intl messages
import IntlMessages from 'Util/IntlMessages';

class Customizer extends Component {
  render() {
    return (
      <div className="rct-customizer">
        <AppBar position="static" className="bg-primary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              <IntlMessages id="sidebar.chat" />
            </Typography>
          </Toolbar>
        </AppBar>
        <ChatBlock />
      </div>
    );
  }
}

export default Customizer;
