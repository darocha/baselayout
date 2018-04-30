import React, { Component } from 'react';
import { connect } from 'react-redux';

class Authorize extends Component {

    publicComponent() {
        if (this.props.children && this.props.children.length > 1) {
            return this.props.children[1];
        }
        return null;
    }

    protectedComponent() {
        if (this.props.children && this.props.children.length > 0) {
            return this.props.children[0];
        }
        return null;
    }

    render() {

        let { user, resource } = this.props;

        if (!user.can(resource)) {
            return this.publicComponent();
        }

        return this.protectedComponent();
    }

}

export const Protected = (props) => {
    return (<div>{props.children}</div>);
}

export const Public = (props) => {
    return (<div>{props.children}</div>);
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(Authorize);


