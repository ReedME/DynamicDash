/**
 * User List
 */
import React, { Component } from 'react';
import { Input } from 'reactstrap';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import { withRouter } from 'react-router-dom';

// app layouts
import { getAppLayout } from 'Helpers/helpers';

// components
import RecentChatUsers from './RecentChatUsers';

// redux actions
import {
    chatWithSelectedUser,
    updateUsersSearch,
    onSearchUsers
} from 'Actions';

class UserList extends Component {

    /**
     * Swicth Chat With User
     * @param {*object} user
     */
    switchChatWithUser(user) {
        this.props.chatWithSelectedUser(user);
    }

    /**
     * On Search Chat Users
     */
    updateSearch(e) {
        this.props.updateUsersSearch(e.target.value);
        this.props.onSearchUsers(e.target.value);
    }

    getScrollHeight() {
        const { location } = this.props;
        const appLayout = getAppLayout(location)
        switch (appLayout) {
            case 'app':
                return 'calc(100vh - 205px)';
            case 'agency':
                return 'calc(100vh - 390px)';
            case 'horizontal':
                return 'calc(100vh - 250px)';
            default:
                break;
        }
    }

    render() {
        const { searchUsers } = this.props;
        return (
            <div>
                <div className="has-wrapper mb-0">
                    <Input
                        type="text"
                        name="search-users"
                        id="search"
                        className="has-input-right input-lg-icon"
                        placeholder="Search"
                        onChange={(e) => this.updateSearch(e)}
                        value={searchUsers}
                    />
                    <span className="has-icon-left"><i className="ti-search"></i></span>
                </div>
                <div className="chat-list">
                    <Scrollbars
                        className="rct-scroll"
                        autoHide
                        style={{ height: this.getScrollHeight() }}
                    >
                        <RecentChatUsers />
                    </Scrollbars>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ chatAppReducer }) => {
    return chatAppReducer;
};

export default withRouter(connect(mapStateToProps, {
    chatWithSelectedUser,
    updateUsersSearch,
    onSearchUsers
})(UserList));
