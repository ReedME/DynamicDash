/**
 * Task Status Filter
 * Used To Filter Todo List
 */
import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import { withRouter } from 'react-router-dom';

// helpers
import { getAppLayout } from 'Helpers/helpers';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// redux action
import {
    getAllTodoAction,
    getCompletedTodosAction,
    getDeletedTodosAction,
    getStarredTodosAction,
    activateFilterAction
} from 'Actions';

class TaskStatusFilter extends Component {

    /**
     * Function to filter the todo list with labels
     */
    onFilterTodo(activeIndex) {
        this.props.activateFilterAction(activeIndex);
    }

    /**
     * Get Label Classes
     */
    getLabelClasses(value) {
        let labelClasses = '';
        switch (value) {
            case 1:
                labelClasses = 'ladgend bg-success';
                return labelClasses;
            case 2:
                labelClasses = 'ladgend bg-primary';
                return labelClasses;
            case 3:
                labelClasses = 'ladgend bg-info';
                return labelClasses;
            case 4:
                labelClasses = 'ladgend bg-danger';
                return labelClasses;
            default:
                return labelClasses;
        }
    }

    /**
	 * Get Scroll Height
	 */
    getScrollHeight() {
        const { location } = this.props;
        const appLayout = getAppLayout(location)
        switch (appLayout) {
            case 'app':
                return 'calc(100vh - 240px)';
            case 'agency':
                return 'calc(100vh - 380px)';
            case 'horizontal':
                return 'calc(100vh - 250px)';
            default:
                break;
        }
    }

    render() {
        const { labels } = this.props;
        return (
            <Scrollbars className="rct-scroll" autoHide style={{ height: this.getScrollHeight() }}>
                <div className="filters">
                    <List>
                        <ListItem
                            button
                            onClick={() => this.props.getAllTodoAction()}
                        >
                            <span className="filter-title"><IntlMessages id="components.all" /></span>
                        </ListItem>
                    </List>
                </div>
                <div className="filters">
                    <List subheader={<ListSubheader disableSticky>Filters</ListSubheader>}>
                        <ListItem
                            button
                            onClick={() => this.props.getCompletedTodosAction()}
                        >
                            <i className="ti-check-box mr-2"></i> <span className="filter-title"><IntlMessages id="widgets.done" /></span>
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => this.props.getDeletedTodosAction()}
                        >
                            <i className="ti-trash mr-2"></i> <span className="filter-title"><IntlMessages id="widgets.deleted" /></span>
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => this.props.getStarredTodosAction()}
                        >
                            <i className="ti-star mr-2"></i> <span className="filter-title"><IntlMessages id="widgets.starred" /></span>
                        </ListItem>
                    </List>
                </div>
                <div className="filters">
                    <List
                        className="list-unstyled"
                        subheader={<ListSubheader disableSticky>Labels</ListSubheader>}
                    >
                        {labels.map((label, key) => (
                            <ListItem
                                button
                                onClick={() => this.onFilterTodo(label.value)}
                                key={key}
                            >
                                <span className={this.getLabelClasses(label.value)}></span> <span className="filter-title"><IntlMessages id={label.name} /></span>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Scrollbars>
        );
    }
}

// map state to props
const mapStateToProps = ({ todoApp, settings }) => {
    const { labels } = todoApp;
    return { labels, settings };
};

export default withRouter(connect(mapStateToProps, {
    getAllTodoAction,
    getCompletedTodosAction,
    getDeletedTodosAction,
    getStarredTodosAction,
    activateFilterAction
})(TaskStatusFilter));
