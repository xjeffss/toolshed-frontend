import React from 'react';
import '../User.css'
import { Link } from 'react-router-dom';

function Register(props){
    return(
        <div>
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
        </div>
    )
}

export default Register;