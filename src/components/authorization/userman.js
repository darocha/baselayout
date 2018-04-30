import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Auth from './authorization.service'; 
import './authorization.css';
import logo from '../../logo.svg';

class Userman extends Component {

  constructor(props){
      super(props);

      this.state = {
          username: '',
          email: '',
          password: '',
          error: {field:null, message:''}
      }
  }    
  
  clearErrors(){
      this.setState({ error: {field:null, message:''}});
  }
   
  handleChange(value) {
    this.setState({email: value});
    this.setState({username: value}); 
  }

  componentDidMount()
  {
      console.log('this.props', this.props);
  }

  login = async (user) => {
    
    let results = await Auth.login(user);

    console.log(results);

    // update Redux store
    if (results.success) {
        this.props.setAuthenticateUser(results.user);
    }
  }

  validateForm() {
      
    this.clearErrors();
      
    if (this.state.email === ""){
        console.log('this.state.email', this.state.email);
        this.setState({error:{field:"email", message:"Email is required."}})
        return false;
    }

    if (this.state.password === ""){
        this.setState({error:{field:"password", message:"Password is required."}})
        return false;
    }
    
  }

  submit = (e) => {
    
    e.preventDefault();

    this.validateForm();
    
    console.log('form submitted', this.state);
    
    this.setState({username: this.state.email});

    this.login(this.state);

  }

  render() {
    return (
        <div className="layout-main flex flex-row flex-center">
            
            <form className="form-signin" onSubmit={(e)=>this.submit(e)}>
                <img className="mb-4" src={logo} alt="" style={{height:'100px'}}  />
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <div className="form-group">
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" onChange={(event)=> this.handleChange(event.target.value)} value={this.state.email} className="form-control" placeholder="Email address" required="" autoFocus="" />
                    {this.state.error.field==='email' &&
                        <small className="form-text text-error">Email is required</small>
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" onChange={(event)=> this.setState({password: event.target.value  })} value={this.state.password} className="form-control" placeholder="Password" required="" />
                    {this.state.error.field==='password' &&
                        <small className="form-text text-error">Password is required</small>
                    }
                </div>
                <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" onChange={(event)=> this.setState({remember: event.target.checked })} value="remember-me" checked={this.state.remember} /> Remember me
                </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit" >Sign in</button>
                <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
            </form>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
    user: state.user,
  });
  
const mapDispatchToProps = (dispatch) => ({
    setAuthenticateUser: (user) => dispatch({ type: 'AUTHENTICATED', user })
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);

