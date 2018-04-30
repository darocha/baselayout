import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Auth from '../authorization/authorization.service';
import './LeftSidebarNav.css';

export function buildLeftNavigation() {

    let resources = Auth.getResourcesPermissions(true);

    var nav = [];

    resources.forEach(resource => {
        nav.push(resource);
    });

     nav.sort(function (a, b) { return a.orderIndex - b.orderIndex });


    return nav;
}

class LeftSidebarNav extends Component {

    handleClick = () => {
        console.log('this is:', this);
    }

    setActive = (event, itemId) => {
        this.props.setActive(itemId);
    }

    componentDidMount() {
        this.props.setActive('Home');
    }
    
    render() {
                
        return (
            <nav className="flex">
                <ul className="list-group list-group-flush">
                    {
                        this.props.leftNavigation.resources.map((item) => {

                            if (!item.url) {
                                return null;
                            }

                            return (
                                <li key={item.id}
                                    onClick={(event) => this.setActive(event, item.id)}
                                    className={"list-group-item" + (item.id === this.props.leftNavigation.active ? ' active' : '')}>
                                    <Link to={item.url || "/"}>{item.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = (state) => ({
      ...state  
});

// make dispatch methods available on props  
const mapDispatchToProps = (dispatch) => ({
    setActive: (id) => dispatch({ type: 'SET_ACTIVE',  id })
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftSidebarNav);
