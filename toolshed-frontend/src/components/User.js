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
            neighborhoodName: this.props.neighborhoodName,
            toolName: "",
            userId: null,
            tools: [],
        }    
    }   
componentDidMount= () => {
    this.getTools();

}
getTools = async () => {
    console.log(this.props.id)
    
    const data = {
        id: this.props.id
      };
      console.log(data)
    const response = await axios.post('http://localhost:3001/user/gettools', data);
    console.log(response.data)
    this.setState ({
        tools: response.data, 
    }
    )
}
joinHood = async (e) => {
    e.preventDefault();
    const data = {
      neighborhoodName: this.state.neighborhoodName,
      userId: this.state.id,
      toolId: 1
      
  };
    console.log(data);
    const response = await axios.post('http://localhost:3001/neighborhood/joinhood', data);
    console.log(response);
};

render(){console.log(this.state.tools)

    return (
        <div>   
            <div>
            <h2 className="greet">{this.props.firstName}'s Shed
                </h2>
            </div>
        <div className="shed">
            <div className="lists">Here are your Tools
            {this.state.tools.map(tool => (               
              <li> {tool.toolName}</li>
           )
        )}</div>
            <div className="lists">Here are your Tools
            {this.state.tools.map(tool => (               
              <li> {tool.toolName}</li>
           )
        )}</div>
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
            <br></br>
            <input
                name='neighborhoodName'
                type='text'
                placeholder='neighborhood'
                value={this.props.neighborhoodName}
                onChange={this.props.addHoodOnChange}
            />
            <br></br>
            <input
                name= 'neighborhoodPasscode'
                text= 'text'
                placeholder= 'passcode'
                value={this.props.neighborhoodPasscode}
                onChange={this.props.addHoodOnChange}               
            >
            </input>
            <br></br>
            <input type='submit' value='Create Neighborhood' />
            </form> 
            </div>
           
        </div>
    )
}
}

export default User;