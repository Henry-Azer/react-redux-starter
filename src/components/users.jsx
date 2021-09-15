import React, { Component } from "react";

import { connect } from "react-redux";

import { userList, clearUserList } from "../store/actions";

class users extends Component {
    componentDidMount() {
        this.props.dispatch(userList());
    }

    componentWillUnmount() {
        this.props.dispatch(clearUserList());
    }

    render() {
        console.log(this.props.users);
        return <div>User!</div>;
    }
}

function mapStateToProps(state) {
    return {
        users: state.users,
    };
}

export default connect(mapStateToProps)(users);
