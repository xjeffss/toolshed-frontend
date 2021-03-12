import React from 'react';
import '../Home.css'
import { Link } from 'react-router-dom';

function Home(props){
    return(
        <div>
           <h3 className ="signup">Please fill in the information below to Register</h3>
           <br></br>
            <form className ="signup" onSubmit={props.signup}>
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
                Password: <input type="password" name="password" 
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
            <br></br>

            <form className="login" onSubmit={props.login}>
            <input
                name='username'
                type='text'
                placeholder='username'
                value={props.username}
                onChange={props.loginOnChange}
            />
            <input
                name='password'
                type='password'
                placeholder='password'
                value={props.password}
                onChange={props.loginOnChange}
            />
            <input type='submit' value='Login' />
            </form>
        </div>
    )
}

export default Home;