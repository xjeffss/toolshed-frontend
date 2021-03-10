import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
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
  render(){
    return (
      <div className="App">
        Neighborhood Toolshed
        <h3>Please fill in the information below to Register</h3>
            <form id="login" action="/users" method="POST">
                Name: <input type="text" name="firstName" defaultValue="First"/><input type="text" name="lastName" defaultValue="Last"/><br/>
                Username: <input type="text" name="username" /><br/>
                Password: <input type="text" name="password" /><br/>
                Email (for notifications):<input type="email" name="email" defaultValue="optional"/><br/>

                <input type="submit" name="" value="Submit"/>
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
