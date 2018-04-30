import React, { Component } from 'react';
import { connect } from 'react-redux';

class ExceptionStation extends Component {
    
  render() {

    return (
        <div className="screen">
            <div>
               <h1>Exception Station</h1>
            </div>
        </div>
    );

  }

}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(ExceptionStation);

