import React, { Component } from 'react';
// import * as Auth from '../../services/authorization/authorization';

class RightSidebar extends Component {
  
  render() {

    return (
        // Auth.can('rightsidebar') &&
        <div id="rightSidebar" className="layout-sidebar layout-right-sidebar collapsed">
            <div className="screen"></div>
        </div>
    );

  }

}

export default RightSidebar;
