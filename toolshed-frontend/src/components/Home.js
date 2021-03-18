import React, { Component } from 'react';
import '../Home.css'
import { Route, withRouter, Link } from 'react-router-dom';
import User from './User';

class Home extends Component {
    constructor(props){  
        console.log(props.id) 
    super(props);
    this.state = {
        user: props.username,
        id: props.id
    }
     
}
render(){
    return(
        <div >
           <h3 >Please fill in the information below to Register</h3>
           <br></br>
           <div className="homepage">
            <form className ="signup" onSubmit={(e) => this.props.signup(e, this.state)}>
                Name: <input type="text" 
                name="firstName" 
                placeholder="First"
                value={this.props.firstName}
                onChange={this.props.signupOnChange}/>
                <input type="text" 
                name="lastName" 
                placeholder="Last"
                value={this.props.lastName}
                onChange={this.props.signupOnChange}/>
                <br/>
                Username: <input type="text" name="username" 
                value={this.props.userame}
                onChange={this.props.signupOnChange}/><br/>
                Password: <input type="password" name="password" 
                value={this.props.password}
                onChange={this.props.signupOnChange}/><br/>
                Email (for notifications):
                <input type="email" 
                name="email" 
                placeholder="optional"
                value={this.props.email}
                onChange={this.props.signupOnChange}
                /><br/>
               
                <input type="submit" name="" value="Signup" />
                
               
            </form>
            </div>
            <br></br>
            <h3> Already a Member?  Log in HERE</h3>
             <br></br>
            <form className="login" onSubmit={(e) => this.props.login(e, this.state)}>
            
            <input
                name='username'
                type='text'
                placeholder='username'
                value={this.props.username}
                onChange={this.props.loginOnChange}
            />
            <input
                name='password'
                type='password'
                placeholder='password'
                value={this.props.password}
                onChange={this.props.loginOnChange}
            /> 
            <input type='submit'  value='Login' />
            </form> 
       
        </div>
    )
}
}
export default Home;