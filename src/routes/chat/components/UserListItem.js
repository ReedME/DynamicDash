/**
 * User List Item
 */
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import classnames from 'classnames';

// helpers
import { textTruncate } from 'Helpers/helpers';

const UserListItem = ({ user, selectedUser, onClickListItem }) => (
    <ListItem
        onClick={onClickListItem}
        className={classnames('user-list-item',
            { 'item-active': selectedUser && selectedUser.id === user.id }
        )}
    >
        <div className="d-flex justify-content-between w-100 align-items-center">
            <div className="media align-items-center w-90">
                <div className="media-left mr-10">
                    <img src={user.photo_url} className="img-fluid rounded-circle" alt="user profile" width="40" height="40" />
                    {user.isActive ?
                        <span className="badge badge-success badge-xs">&nbsp;</span>
                        : <span className="badge badge-warning badge-xs">&nbsp;</span>
                    }
                </div>
                <div className="media-body pt-5">
                    <h4 className="mb-5">{user.first_name}&nbsp;{user.last_name}</h4>
                    <span className="fs-14 text-muted d-block mb-1">{textTruncate(user.last_chat, 20)}</span>
                    <span className="d-block fs-12 text-muted">{user.last_chat_date}</span>
                </div>
            </div>
            <div className="text-right">
                {user.new_message_count !== 0 ?
                    <span className="badge badge-danger px-2 py-5 badge-pill">{user.new_message_count}</span>
                    : null
                }
            </div>
        </div>
    </ListItem>
);

export default UserListItem;
