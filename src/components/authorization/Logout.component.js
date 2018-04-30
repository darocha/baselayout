import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Logout extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

        this.props.logout();
        this.props.resetLeftNavigation();

        console.log(this.props);
        // this.props.history.push('/'); 
    }

    componentWillReceiveProps(props) {
        this.props.logout();
        this.props.resetLeftNavigation();

        console.log(this.props);
        this.props.history.push('/'); 
    }

    render() {
        return (<div className="screen">
            <h1>You are logged out.</h1>
        </div>);
    }
}

/* Redux Code Start */

// make user object available on props
const mapStateToProps = (state) => ({
    ...state
});

// make dispatch methods available on props  
const mapDispatchToProps = (dispatch) => ({
    logout: (user) => dispatch({ type: 'LOGOUT', user: {} }),
    resetLeftNavigation: (navItems) => dispatch({ type: 'RESET_LEFT_NAVIGATION', navItems:[] })
});

/* Redux Code End */

// add router (html5 history) to the Login component.
// access router methods using this.props.history   
Logout = withRouter(Logout);

// connect component, state and dispatch actions with Redux. 
export default connect(mapStateToProps, mapDispatchToProps)(Logout);
