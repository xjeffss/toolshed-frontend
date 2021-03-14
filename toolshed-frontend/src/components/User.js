import React, { Component } from 'react';
import '../User.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

class User extends Component {
    constructor(props){  console.log(props)
        super(props);
            console.log(props) 
        this.state = {
            user: props.username,
            id: this.props.id,
            toolName: "",
            userId: null,
            tools: []
        }    
    }   

getTools = async () => {
    console.log(this.props.id)
    const data = {
        id: this.props.id
      };
      console.log(data)
    const response = await axios.get('http://localhost:3001/user/gettools', data);
    console.log(response)
    this.setState=({
        tools: [response.toolName]
    })
}

render(){
    return(
        <div>
             <h2 className="greet">Hello {this.props.firstName}
                 </h2>
            <div onClick={this.getTools}>
                Here are your Tools
       
            </div>
            <div className="create">

            <form className ="addTool" onSubmit={this.props.addTool}>
                Tool Name: <input type="text" 
                name="toolName" 
                value={this.props.toolName}
                onChange={this.props.addToolOnChange}/>
                <br/>
                Tool Brand: <input type="text" name="toolBrand" 
                value={this.props.toolBrand}
                onChange={this.props.addToolOnChange}/><br/>
                Category: <input type="text" name="category" 
                value={this.props.category}
                onChange={this.props.addToolOnChange}/><br/>
                Details:
                <input type="text" 
                name="details" 
                value={this.props.details}
                onChange={this.props.addToolOnChange}
                /><br/>         
                <input type="submit" value="Add Tool" />    
            </form>
            <br></br>
            <form className="createLocalhood" onSubmit={this.props.addHood} >
            Create Neighborhood
            <input
                name='neighborhoodName'
                type='text'
                placeholder='neighborhood'
                value={this.props.neighborhoodName}
                onChange={this.props.addHoodOnChange}
            />
            <input type='submit' value='Create Neighborhood' />
            </form> 
            </div>
            
        </div>
    )
}
}

export default User;