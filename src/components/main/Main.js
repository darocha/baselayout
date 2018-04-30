import React, { Component } from 'react';
import LeftSidebar from '../sidebar/LeftSiderbar';
import RightSidebar from '../sidebar/RightSiderbar';
import CenterColumn from '../centercolumn/CenterColumn';
import init from '../../utils/swipe';

class Main extends Component {
  
  componentDidMount()
  {
      init();
  }

  render() {

    return (
        
        <div className="layout-main flex flex-row">
          <LeftSidebar />
          <CenterColumn />
          <RightSidebar />
        </div>
    );

  }

}

export default Main;
