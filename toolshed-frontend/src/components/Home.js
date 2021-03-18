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
        <div className="main">
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
                name='loginUsername'
                type='text'
                placeholder='username'
                value={this.props.loginUsername}
                onChange={this.props.loginOnChange}
            />
            <input
                name='loginPassword'
                type='password'
                placeholder='password'
                value={this.props.loginPassword}
                onChange={this.props.loginOnChange}
            /> 
            <input type='submit'  value='Login' />
            </form> 
            <div class="house-wrap">
		<div class="blue-block"></div>
		<div class="roof">	
			<div class="slant left">
				<div class="slant-shadow"></div>
			</div>
			<div class="slant right"></div>
			<div class="chimney"></div>
			<div class="smoke"></div>
			<div class="smoke two"></div>
			<div class="smoke three"></div>
			<div class="smoke four"></div>
			<div class="smoke five"></div>
			<div class="smoke six"></div>
			<div class="smoke seven"></div>
			<div class="smoke eight"></div>
			<div class="smoke nine"></div>
		</div>
		<div class="window circle-window"></div>
		<div class="window left">
			<div class="window-frame top"></div>
			<div class="window-frame bottom"></div>
			<div class="window-frame left"></div>
			<div class="window-frame right"></div>
			<div class="window-frame mullion"></div>
			<div class="window-shadow"></div>
			<div class="window-shadow vert"></div>
		</div>
		<div class="window right">
			<div class="window-frame top"></div>
			<div class="window-frame bottom"></div>
			<div class="window-frame left"></div>
			<div class="window-frame right"></div>
			<div class="window-frame mullion"></div>
			<div class="window-shadow"></div>
			<div class="window-shadow vert"></div>
		</div>
		<div class="window left bottom">
			<div class="window-frame top"></div>
			<div class="window-frame bottom"></div>
			<div class="window-frame left"></div>
			<div class="window-frame right"></div>
			<div class="window-frame mullion"></div>
			<div class="window-shadow"></div>
			<div class="window-shadow vert"></div>
		</div>
		<div class="window right bottom">
			<div class="window-frame top"></div>
			<div class="window-frame bottom"></div>
			<div class="window-frame left"></div>
			<div class="window-frame right"></div>
			<div class="window-frame mullion"></div>
			<div class="window-shadow"></div>
			<div class="window-shadow vert"></div>
		</div>
		<div class="door">
			<div class="panel top"></div>
			<div class="panel bottom"></div>
			<div class="hinge"></div>
			<div class="hinge bottom"></div>
			<div class="handle"></div>
			<div class="door-shadow"></div>
		</div>
	</div>
       
        </div>
    )
}
}
export default Home;