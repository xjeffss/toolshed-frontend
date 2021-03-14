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
                onChange={props.addToolOnChange}/>
                <br/>
                Tool Brand: <input type="text" name="toolBrand" 
                value={props.toolBrand}
                onChange={props.addToolOnChange}/><br/>
                Category: <input type="text" name="category" 
                value={props.category}
                onChange={props.addToolOnChange}/><br/>
                Details:
                <input type="text" 
                name="details" 
                value={props.details}
                onChange={props.addToolOnChange}
                /><br/>         
                <input type="submit" value="Add Tool" />    
            </form>
            <br></br>
            <form className="createLocalhood" onSubmit={props.addHood} >
            Create Neighborhood
            <input
                name='neighborhoodName'
                type='text'
                placeholder='neighborhood'
                value={props.neighborhoodName}
                onChange={props.addHoodOnChange}
            />
            <input type='submit' value='Create Neighborhood' />
            </form> 
        </div>
    )
}

export default User;