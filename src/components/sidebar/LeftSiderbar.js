import React, { Component } from 'react';
import LeftSidebarNav from './LeftSidebarNav';
import './LeftSidebarNav.css';

class LeftSidebar extends Component {

  render() {

      return (
        <div id="leftSidebar" className="layout-sidebar layout-left-sidebar">
            <div className="screen layout-iconbar"></div>
            <div className="screen">
              <LeftSidebarNav />
            </div>
        </div>
    );

  }

}

export default LeftSidebar;
