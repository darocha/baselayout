import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';
import Logout from '../authorization/Logout.component';

// lazy load components on demand with Loadable. 
// Webpack will create a chunk js file for each Component and load then as needed
let AsyncScreens = {
    Home: getAsyncScreen('Home/Home'),
    PVStation: getAsyncScreen('PVStation/PVStation'),
    ExceptionStation: getAsyncScreen('ExceptionStation/ExceptionStation'),
    BaggingStation: getAsyncScreen('BaggingStation/BaggingStation'),
    OrderBagging: getAsyncScreen('BaggingStation/OrderBagging'),
    PickStationAutomatic: getAsyncScreen('PickStation/PickStationAutomatic'),
    PickStationManual: getAsyncScreen('PickStation/PickStationManual'),
    Login: getAsyncScreen('Login/Login')  
};

export function getAsyncScreen(screenName) {

  const AsyncScreen = Loadable({
    loader: () => import(/* webpackChunkName: 'screen' */ './'+ screenName),
    loading() {
      return <div className="screen text-center">Loading...</div>
    }
  });

  return AsyncScreen;
}

class Screens extends Component {
    
    componentDidMount() {
      window.addEventListener('keyup', event => this.switchScreen(event));
    }

    switchScreen(event) {

      let altKey = event.altKey;
      let key = parseInt(event.key, 10);

      const navigateTo = this.props.history.push; 
      
      if (altKey) {
      
        if (key===0) {
            navigateTo('/'); 
        }
        else if (key > 0 && key < 10) {

            switch (key) {

                case 1: navigateTo('/'); this.props.setActive('Home'); break;
                case 2: navigateTo('/pick'); this.props.setActive('PickStationAutomatic'); break;
                case 3: navigateTo('/pick/manual'); this.props.setActive('PickStationManual'); break;
                case 4: navigateTo('/bagging'); this.props.setActive('BaggingStation'); break;
                case 5: navigateTo('/bagging/order'); this.props.setActive('OrderBagging'); break;
                case 6: navigateTo('/pv'); this.props.setActive('PVStation'); break;
                case 7: navigateTo('/exception'); this.props.setActive('Exception'); break;
               
                case 8: navigateTo('/login'); this.props.setActive('Login'); break;

                default: navigateTo('/'); this.props.setActive('Home');  break;

          }
        } 
      }
    }

    componentWillUnmount(){
        window.removeEventListener('keyup', this.switchScreen);
    }

    render() {
      return (
        <Switch>
          <Route exact path='/' component={AsyncScreens.Home}/>
          <Route path='/pv' component={AsyncScreens.PVStation} />
          <Route path='/bagging' exact component={AsyncScreens.BaggingStation} />
          <Route path='/bagging/order' component={AsyncScreens.OrderBagging} />
          <Route path='/pick' exact component={AsyncScreens.PickStationAutomatic} />
          <Route path='/pick/manual' component={AsyncScreens.PickStationManual} />
          <Route path='/exception' component={AsyncScreens.ExceptionStation} />
          <Route path='/login' component={AsyncScreens.Login} />
          <Route path='/logout' component={Logout} />
        </Switch>
    )
  }
}


const mapStateToProps = (state) => ({
    ...state
}); 

const mapDispatchToProps = (dispatch) => ({
    setActive: (id) => dispatch({ type: 'SET_ACTIVE', id })
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Screens));

