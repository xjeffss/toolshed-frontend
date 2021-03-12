import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import { Route, Link, Redirect } from 'react-router-dom';

import Addhood from './components/Addhood';
import Neighborhood from './components/Neighborhood';
import Register from './components/Home';
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

          <Route path="/" render = {() => (
            <Home 
            firstName = {this.state.firstName}
            lastName = {this.state.lastName}     
            username= {this.state.username}
            password= {this.state.password}
            email= {this.state.email}
            signup= {this.signup}
            signupOnChange = {this.signupOnChange}
            login = {this.login}
            loginOnChange = {this.loginOnChange}
              
              />
            )}
            />
          <Route path="/Neighborhood/:id" render = {()=> (
            <Neighborhood

          />)}
          />

        </main>

      </div>
    )
  }
  ;
}

export default App;
