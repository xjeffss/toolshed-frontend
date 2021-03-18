import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import { Route, Link, withRouter, } from 'react-router-dom';

import Addhood from './components/Addhood';
import Neighborhood from './components/Neighborhood';
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
      email: '',
      id: null,
      toolName: '',
      toolBrand: '',
      category: '',
      details: '',
      neighborhoodName: '',
      neighborhoodPasscode: '',
      userId: null
    };
  }

  // componentDidMount = () => {
  //   this.getUser
  // }

  
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
      id: this.state.id
    };
    console.log(data);
    const response = await axios.post('http://localhost:3001/auth/login' || 'https://neighborhood-toolshed.herokuapp.com/auth/login', data);
    console.log(response.data);
    localStorage.setItem("userId", data.id)
    localStorage.setItem("username", data.username)
    localStorage.setItem("password", data.password)
    this.setState({
      firstName: response.data.firstName,
      lastName: response.data.lastName,  
      id: response.data.id
    }
    );
    this.props.history.push(`/user/${this.state.id}`)
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
    this.setState({
      firstName: response.data.firstName,
      lastName: response.data.lastName,  
      id: response.data.id
    }
    );
  };
addToolOnChange = (e) => {
  e.preventDefault();
  this.setState({
    [e.target.name]: e.target.value,
  });
};
addTool = async (e) => {
    e.preventDefault();
    const data = {
      toolName: this.state.toolName,
      toolBrand: this.state.toolBrand,
      category: this.state.category,
      details: this.state.details,
      userId: this.state.id
  };
    console.log(data);
    const response = await axios.post('http://localhost:3001/user/addtool', data);
    console.log(response);
    window.location.reload()
};

addHoodOnChange = (e) => {
  e.preventDefault();
  this.setState({
    [e.target.name]: e.target.value,
  });
};
addHood = async (e) => {
    e.preventDefault();
    const data = {
      neighborhoodName: this.state.neighborhoodName,
      neighborhoodPasscode: this.state.neighborhoodPasscode
  };
    console.log(data);
    const response = await axios.post('http://localhost:3001/neighborhood/addhood', data);
    console.log(response);
    window.location.reload()
};

  render(){   
    return (
      <div className="App">
        <h1>
           Neighborhood Toolshed
        </h1>
       
        <main>

          <Route exact path="/" render = {(routerProps) => (
            <Home 
            firstName = {this.state.firstName}
            lastName = {this.state.lastName}     
            username= {this.state.username}
            password= {this.state.password}
            email= {this.state.email}
            id = {this.state.id}
            signup= {this.signup}
            signupOnChange = {this.signupOnChange}
            login = {this.login}
            loginOnChange = {this.loginOnChange}
            {...routerProps} 
              />
            )}
            />
          <Route path="/neighborhood/:id" render = {(routerProps)=> (
            <Neighborhood
            firstName = {this.state.firstName}
            lastName = {this.state.lastName}
            neighborhoodId= {routerProps.match.params.id} 

          />)}
          />
          <Route path="/user/:id" render = {(routerProps)=> (
            <User
            
            firstName = {this.state.firstName}
            lastName = {this.state.lastName} 
            id = {this.state.id}
            toolName= {this.state.toolName}
            toolBrand= {this.state.toolBrand}
            category= {this.state.category}
            details= {this.state.details}
            userId= {this.state.id}
            addTool= {this.addTool}
            addToolOnChange= {this.addToolOnChange}
            neighborhoodName= {this.state.neighborhoodName}
            neighborhoodPasscode= {this.state.neighborhoodPasscode}
            addHood= {this.addHood}
            addHoodOnChange= {this.addHoodOnChange}
            signup= {this.signup}
            signupOnChange = {this.signupOnChange}
            login = {this.login}
            loginOnChange = {this.loginOnChange}
            {...routerProps}
            
          />)}
          />
        </main>

      </div>
    )
  }
  ;
}

export default withRouter(App);
