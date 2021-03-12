import React from 'react';
import '../User.css'
import { Link } from 'react-router-dom';

function Home(props){
    return(
        <div>
           <h3>Please fill in the information below to Register</h3>
            <form id="signup" onSubmit={props.signup}>
                Name: <input type="text" 
                name="firstName" 
                defaultValue="First"
                value={props.firstName}
                onChange={props.signupOnChange}/>
                <input type="text" 
                name="lastName" 
                defaultValue="Last"
                value={props.lastName}
                onChange={props.signupOnChange}/>
                <br/>
                Username: <input type="text" name="username" 
                value={props.userame}
                onChange={props.signupOnChange}/><br/>
                Password: <input type="text" name="password" 
                value={props.password}
                onChange={props.signupOnChange}/><br/>
                Email (for notifications):
                <input type="email" 
                name="email" 
                defaultValue="optional"
                value={props.email}
                onChange={props.signupOnChange}
                /><br/>

                <input type="submit" name="" value="Signup" />
            </form>
        </div>
    )
}

export default Home;