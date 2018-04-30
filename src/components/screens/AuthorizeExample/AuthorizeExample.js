import React, { Component } from 'react';
import { connect } from 'react-redux';
import Authorize, { Public, Protected } from '../../authorization/Authorize.component';

class AuthorizeExample extends Component {
    
  render() {

    return (
        <div className="screen">
            <div>
               <h1>Authorization Example</h1>
            </div>
            <Authorize resource="PrivateData">
                <Protected>
                    <div>
                          private data
                    </div>
                </Protected>
                <Public>
                    <div>
                        You don't have permission to access private data.
                    </div>
                </Public>
            </Authorize>
        </div>
    );

  }

}


const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(AuthorizeExample);

