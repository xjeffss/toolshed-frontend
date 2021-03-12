import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import { Route, Link, Redirect } from 'react-router-dom';

import Addhood from './components/Addhood';
import Neighborhood from './components/Neighborhood';
import Register from './components/Register';
import User from './components/User';
import Home from './components/Home';

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
        <main>
          <Route exact path="/" render = {() => (
                 <Home 

                 />
          )} 
          />
          <Route path="/Register" render = {() => (
            <Register 
            firstName = {this.state.firstName}
            lastName = {this.state.lastName}     
            username= {this.state.username}
            password= {this.state.password}
            email= {this.state.email}
              
              />
            )}
            />
          <Route path="/Neighborhood/:id" render = {()=> (
            <Neighborhood

          />)}
          />

        </main>
      <br></br>

        <form className="login" onSubmit={this.login}>
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
