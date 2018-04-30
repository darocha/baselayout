import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import { connect } from 'react-redux';

class Navbar extends Component {

    render() {

        return (

            <nav className="top-navbar navbar navbar-expand-lg navbar-light">

                <a className="navbar-brand" href="/">
                    <img src={logo} className="App-logo" alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#link">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#dropdown" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#action1">Action</a>
                                <a className="dropdown-item" href="#action2">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#action3">Something else here</a>
                            </div>
                        </li>
                    </ul>

                </div>

                {!this.props.user.isAuthenticated &&
                    <a className ="btn btn-default mb-3 mb-md-0 ml-md-3" href="/login">Login</a>
                }

                {this.props.user.isAuthenticated &&
                    <a className="btn btn-default mb-3 mb-md-0 ml-md-3" href="/logout">Logout</a>
                }

            </nav>
        );
    }
}

// make user object available on props
const mapStateToProps = (state) => ({
    ...state
});

export default connect(mapStateToProps)(Navbar);

