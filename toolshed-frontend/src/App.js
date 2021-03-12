import React, {Component, Link, Route} from 'react';
import axios from 'axios';
import './App.css';

import Addhood from './components/Addhood';
import Neighborhood from './components/Neighborhood';
import Register from './components/Register';
import User from './components/User';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      email: ''
    };
  }
  loginOnChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  login = async (e) => {
    e.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log(data);
    const response = await axios.post('http://localhost:3001/auth/login', data);
    console.log(response);
  };
  signupOnChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  signup = async (e) => {
    e.preventDefault();
    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,      
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    };
    console.log(data);
    const response = await axios.post('http://localhost:3001/auth/signup', data);
    console.log(response);
  };
  render(){
    return (
      <div className="App">
        Neighborhood Toolshed
        <h3>Please fill in the information below to Register</h3>
            <form id="signup" onSubmit={this.signup}>
                Name: <input type="text" 
                name="firstName" 
                defaultValue="First"
                value={this.state.firstName}
                onChange={this.signupOnChange}/>
                <input type="text" 
                name="lastName" 
                defaultValue="Last"
                value={this.state.lastName}
                onChange={this.signupOnChange}/>
                <br/>
                Username: <input type="text" name="username" 
                value={this.state.userame}
                onChange={this.signupOnChange}/><br/>
                Password: <input type="text" name="password" 
                value={this.state.password}
                onChange={this.signupOnChange}/><br/>
                Email (for notifications):
                <input type="email" 
                name="email" 
                defaultValue="optional"
                value={this.state.email}
                onChange={this.signupOnChange}
                /><br/>

                <input type="submit" name="" value="Signup" />
            </form>
      <br></br>

        <form onSubmit={this.login}>
          <input
            name='username'
            type='text'
            placeholder='username'
            value={this.state.username}
            onChange={this.loginOnChange}
          />
          <input
            name='password'
            type='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.loginOnChange}
          />
          <input type='submit' value='Login' />
        </form>
      </div>
    )
  }
  ;
}

export default App;
