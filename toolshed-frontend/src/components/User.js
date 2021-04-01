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
            toolId: "",
            neighborhoodName: this.props.neighborhoodName,
            neighborhoodPasscode: this.props.neighborhoodPasscode,
            neighborhoodId: this.props.neighborhoodId,
            joinNeighborhoodName: this.props.neighborhoodName,
            joinNeighborhoodPasscode: this.props.neighborhoodPasscode,
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
    // const userResponse = await axios.post('https://neighborhood-toolshed.herokuapp.com/user/gettools' ||'http://localhost:3001/user/gettools' , data);
    // const hoodResponse = await axios.post('https://neighborhood-toolshed.herokuapp.com/user/gethood' ||'http://localhost:3001/user/gethood' , data);
    const userResponse = await axios.post('http://localhost:3001/user/gettools' , data);
    const hoodResponse = await axios.post('http://localhost:3001/user/gethood' , data);
    console.log(userResponse)
    this.setState ({
        tools: userResponse.data, 
        neighborhoods: hoodResponse.data
    }
    )
}

deleteTool = async (e, tool) => {
    e.preventDefault();
    console.log("delete")
    const data = {
      toolId:tool.id,
      toolName: tool.toolName
  };
    console.log(data);
    // const response = await axios.post( 'https://neighborhood-toolshed.herokuapp.com/user/deletetool' || 'http://localhost:3001/user/deletetool', data);
    const response = await axios.post('http://localhost:3001/user/deletetool', data);
    console.log(response);
    // window.location.reload()
  };
  leaveHoodOnChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  leaveHood = async (e, neighborhood) => {
    e.preventDefault();
    console.log(neighborhood)
    const data = {
      neighborhoodId:neighborhood.Neighborhood.id,
      neighborhoodName: neighborhood.Neighborhood.neighborhoodName,
      userId: this.state.id
  };
    console.log(data);
    // const response = await axios.post('https://neighborhood-toolshed.herokuapp.com/neighborhood/leavehood' ||'http://localhost:3001/neighborhood/leavehood', data);
    const response = await axios.post('http://localhost:3001/neighborhood/leavehood', data);
    console.log(response);
    // window.location.reload()
  };
joinHood = async (e) => {
    e.preventDefault();
    const data = {
      neighborhoodName: this.state.joinNeighborhoodName,
      neighborhoodPasscode: this.state.joinNeighborhoodPasscode,
      userId: this.state.id,    
  };
    console.log(data);
    // const response = await axios.post( 'https://neighborhood-toolshed.herokuapp.com/neighborhood/joinhood' ||'http://localhost:3001/neighborhood/joinhood' , data);
    const response = await axios.post('http://localhost:3001/neighborhood/joinhood' , data);
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
  addHoodOnChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  addHood = async (e) => {
      e.preventDefault();
      const data = {
        neighborhoodName: this.state.neighborhoodName,
        neighborhoodPasscode: this.state.neighborhoodPasscode
    };
      console.log(data);
      // const response = await axios.post( 'https://neighborhood-toolshed.herokuapp.com/neighborhood/addhood' || 'http://localhost:3001/neighborhood/addhood', data);
      const response = await axios.post('http://localhost:3001/neighborhood/addhood', data);
      console.log(response);
      // window.location.reload()
  };
render(){console.log(this.state.neighborhoods)

    return (
        <div>
        <div id="cloud-circle">   
        </div>
        <div id="cloud-circle2">   
        </div>


        <div className="shed">
         <div className="roofLeft"></div> 
        <div className="roofRight"></div> 
        <div className="shedTop"></div>
            <div className="greet">
                {this.props.firstName}'s Shed
            </div>
            <div className="lists">
            <div className="list1">Your Tools
            {this.state.tools.map(tool => (               
              <li className="tools"> {tool.toolName}<form onSubmit={(e)=>this.deleteTool(e, tool)}><input className="toolButton" name="toolName" type="submit" value="Delete Tool"></input></form>
              </li>
           )
        )}</div>
            <div className="list2">Your Neighborhoods
            {this.state.neighborhoods.map(neighborhood => (               
              
                  <li className="neighborhoods"><Link to={`/neighborhood/${neighborhood.Neighborhood.id}`}> {neighborhood.Neighborhood.neighborhoodName}</Link>
                  <form onSubmit={(e)=>this.leaveHood(e, neighborhood)}><input className="toolButton" name="neighborhoodId" type="submit" value="Leave"></input></form></li>
              
           )
        )}
        </div> 
          </div>   
            <div className="garagedoor"></div>
        </div>
        <div className="grassBackground">
        <div className="create">
        <div className="createLocalhood">

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

            <form onSubmit={this.addHood} >

            Create Neighborhood
            <br></br>
            <input
                name='neighborhoodName'
                type='text'
                placeholder='neighborhood'
                value={this.state.neighborhoodName}
                onChange={this.addHoodOnChange}
            />
            <br></br>
            <input
                name= 'neighborhoodPasscode'
                text= 'text'
                placeholder= 'passcode'
                value={this.state.neighborhoodPasscode}
                onChange={this.addHoodOnChange}               
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
                name='joinNeighborhoodName'
                type='text'
                placeholder='neighborhood'
                value={this.state.joinNeighborhoodName}
                onChange={this.joinHoodOnChange}
            />
            <br></br>
            <input
                name= 'joinNeighborhoodPasscode'
                text= 'text'
                placeholder= 'passcode'
                value={this.state.joinNeighborhoodPasscode}
                onChange={this.joinHoodOnChange}               
            >
            </input>
            <br></br>
            <input type='submit' value='Join Neighborhood' />
            
            </form> 
            
            </div>
            </div>
            </div>
        </div>
    )
}
}

export default User;