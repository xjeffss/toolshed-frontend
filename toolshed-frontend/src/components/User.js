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
            neighborhoodPasscode: this.props.neighborhoodPasscode,
            toolName: "",
            userId: null,
            tools: [],
            neighborhoods: []
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
    const userResponse = await axios.post('http://localhost:3001/user/gettools', data);
    const hoodResponse = await axios.post('http://localhost:3001/user/gethood', data);
    console.log(userResponse)
    this.setState ({
        tools: userResponse.data, 
        neighborhoods: hoodResponse.data
    }
    )
}

joinHood = async (e) => {
    e.preventDefault();
    const data = {
      neighborhoodName: this.state.neighborhoodName,
      neighborhoodPasscode: this.state.neighborhoodPasscode,
      userId: this.state.id,    
  };
    console.log(data);
    const response = await axios.post('http://localhost:3001/neighborhood/joinhood', data);
    console.log(response);
    this.setState ({
        neighborhoods:response
    })
};
joinHoodOnChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

render(){console.log(this.state.neighborhoods)

    return (
        <div>
        <div id="cloud-circle">   
        </div>
        <div id="cloud-circle2">   
        </div>
            <div className="greet">
                
            </div>
            <h2 >{this.props.firstName}'s Shed</h2>
        <div className="shed">
            <div className="lists">Here are your Tools
            {this.state.tools.map(tool => (               
              <li> {tool.toolName}<button onSubmit={this.deleteTools}>Delete Tool</button>
              </li>
           )
        )}</div>
            <div className="lists">Here are your Neighborhoods
            {this.state.neighborhoods.map(neighborhood => (               
              <Link to={`/neighborhood/${neighborhood.Neighborhood.id}`}>
                  <li> {neighborhood.Neighborhood.neighborhoodName}<button onSubmit={this.leaveHood}>Leave Neighborhood</button></li>
              </Link>
           )
        )}
        </div>        
        </div>
<div className="garagedoor">

        </div>
        <div className="create">
        <div className="createLocalHood">

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
            </div>
            <div  className="createLocalhood">

            <form onSubmit={this.props.addHood} >

            Create Neighborhood
            <br></br>
            <input
                name='neighborhoodName'
                type='text'
                placeholder='neighborhood'
                value={this.state.neighborhoodName}
                onChange={this.props.addHoodOnChange}
            />
            <br></br>
            <input
                name= 'neighborhoodPasscode'
                text= 'text'
                placeholder= 'passcode'
                value={this.state.neighborhoodPasscode}
                onChange={this.props.addHoodOnChange}               
            >
            </input>
            <br></br>
            <input type='submit' value='Create Neighborhood' />
            </form> 
            <br></br>
            </div>
            <div  className="createLocalhood">
            <form  onSubmit={this.joinHood} >
            Join Neighborhood
            <br></br>
            <input
                name='neighborhoodName'
                type='text'
                placeholder='neighborhood'
                value={this.state.neighborhoodName}
                onChange={this.joinHoodOnChange}
            />
            <br></br>
            <input
                name= 'neighborhoodPasscode'
                text= 'text'
                placeholder= 'passcode'
                value={this.state.neighborhoodPasscode}
                onChange={this.joinHoodOnChange}               
            >
            </input>
            <br></br>
            <input type='submit' value='Join Neighborhood' />
            
            </form> 
            
            </div>
            </div>
           
        </div>
    )
}
}

export default User;