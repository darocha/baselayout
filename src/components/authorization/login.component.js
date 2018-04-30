import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Auth from './authorization.service'; 
import './authorization.css';
import logo from '../../images/logo.svg';
import { buildLeftNavigation } from '../sidebar/LeftSidebarNav';

class Login extends Component {

  constructor(props){
      super(props);

      this.state = {
          username: '',
          email: '',
          password: '',
          remember: false,
          error: { field: null, message: '' },
          displayEmailField: false,
          displayRememberCheckbox:false
      }
  }    
  
  clearErrors(){
      this.setState({ error: {field:null, message:''}});
  }
   
  handleChange(value) {
    this.setState({email: value});
  }

  componentDidMount()
  {
      console.log('this.props', this.props);
  }    

  login = async (user) => {
    
    let results = await Auth.login(user);

    console.log(results);
          
    if (results.success) {

        // set the user on the Redux store 
        this.props.setAuthenticateUser(results.user);
        // build left navigation menu
        this.refreshNavigation();
        // redirect to home screen
        this.props.history.push('/'); 
    }
  }

    refreshNavigation() {

        // build left navigation
        let navItems = buildLeftNavigation();

        // notify redux
        this.props.buildLeftNav(navItems);

        this.props.setActive('Home');

    }


  validateForm() {
      
    this.clearErrors();

    /*
    if (this.state.email === ""){
        console.log('this.state.email', this.state.email);
        this.setState({error:{field:"email", message:"Email is required."}})
        return false;
    }*/

    if (this.state.username === "") {
        this.setState({ error: { field: "username", message: "Username is required." } })
        return false;
    }

    if (this.state.password === ""){
        this.setState({error:{field:"password", message:"Password is required."}})
        return false;
      }

      return true;
    
  }

  submit = (e) => {
    
    e.preventDefault();
      
    if (!this.validateForm()) {
        return false;
    }

    this.login({username: this.state.username, password: this.state.password });


  }

  render() {
    return (
        <div className="layout-main flex flex-row flex-center flex-top">
            
            <form className="form-signin" onSubmit={(e) => this.submit(e)}>
                <div className="text-center">
                    <img className="mb-4" src={logo} alt="" style={{ height: '100px' }} />
                </div>
                <h1 className="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
                {this.state.displayEmailField &&
                <div className="form-group">
                    <label htmlFor="inputEmail" className="sr-only">Email</label>
                    <input type="email" onChange={(event)=> this.handleChange(event.target.value)} value={this.state.email} className="form-control" placeholder="Email" required="" autoFocus="" />
                    {this.state.error.field==='email' &&
                        <small className="form-text text-error">Email is required</small>
                    }
                </div>}
                <div className="form-group">
                    <label htmlFor="inputUsername" className="sr-only">Username</label>
                    <input type="text" onChange={(event) => this.setState({ 'username': event.target.value })} value={this.state.username} className="form-control" placeholder="Username" required="" autoFocus="" />
                    {this.state.error.field === 'username' &&
                        <small className="form-text text-error">Username is required</small>
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" onChange={(event)=> this.setState({password: event.target.value  })} value={this.state.password} className="form-control" placeholder="Password" required="" />
                    {this.state.error.field==='password' &&
                        <small className="form-text text-error">Password is required</small>
                    }
                </div>
                {this.state.displayRememberCheckbox &&
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" onChange={(event) => this.setState({ remember: event.target.checked })} value="remember-me" checked={this.state.remember} /> Remember me
                    </label>
                    </div>}
                <button className="btn btn-lg btn-primary btn-block" type="submit" >Sign in</button>
                <p className="mt-5 mb-3 text-muted text-center">© 2017-2018</p>
            </form>
        </div>
    );
  }
}

/* Redux Code Start */

// make user object available on props
const mapStateToProps = (state) => ({
     ...state 
});

// make dispatch methods available on props  
const mapDispatchToProps = (dispatch) => ({
    setAuthenticateUser: (user) => dispatch({ type: 'AUTHENTICATED', user }),
    buildLeftNav: (navItems) => dispatch({ type: 'BUILD_LEFT_NAVIGATION', navItems }),
    setActive: (id) => dispatch({ type: 'SET_ACTIVE', id })
});

/* Redux Code End */

// add router (html5 history) to the Login component.
// access router methods using this.props.history   
Login = withRouter(Login);

// connect component, state and dispatch actions with Redux. 
export default connect(mapStateToProps, mapDispatchToProps)(Login);

