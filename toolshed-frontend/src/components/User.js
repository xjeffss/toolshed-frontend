import React from 'react';
import '../User.css'
import { Link } from 'react-router-dom';

function User(props){
    console.log(props.id)
    return(
        <div>
            Hello {props.firstName}
            <form className ="addTool" onSubmit={props.addTool}>
                Tool Name: <input type="text" 
                name="toolName" 
                value={props.toolName}
                onChange={props.signupOnChange}/>
                <br/>
                Tool Brand: <input type="text" name="toolBrand" 
                value={props.toolBrand}
                onChange={props.signupOnChange}/><br/>
                Category: <input type="text" name="category" 
                value={props.category}
                onChange={props.signupOnChange}/><br/>
                Details:
                <input type="text" 
                name="details" 
                value={props.details}
                onChange={props.signupOnChange}
                /><br/>         
                    <input type="submit" name="" value="Add Tool" />    
            </form>
            <br></br>
            <form className="createLocalhood" onSubmit={props.createLocalhood} >
            Create Neighborhood
            <input
                name='neighborhood'
                type='text'
                placeholder='neighborhood'
                value={props.localhood}
                onChange={props.loginOnChange}
            />
            <input type='submit' value='Create Neighborhood' />
            </form> 
        </div>
    )
}

export default User;