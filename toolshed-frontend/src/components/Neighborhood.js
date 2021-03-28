import React, { Component } from 'react';
import '../User.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

class Neighborhood extends Component{
    constructor(props){  
        super(props);
        this.state ={
            neighborhoodName: this.props.neighborhoodName,
            tools: [],
            users: [],
            firstName: "",
            lastName: ""
        }
    }

componentDidMount= async () =>{
    
    const users= await this.getNeighbors();
    console.log(users)
    const newUsers= await this.getHoodTools(users);
    console.log(newUsers)
    this.setState( {
        users: newUsers,
  
    }
    )
}
getNeighbors = async () => {
    console.log(this.props.neighborhoodId)
    // const response = await axios.get(`https://neighborhood-toolshed.herokuapp.com/neighborhood/${this.props.neighborhoodId}`)
    const response = await axios.get(`http://localhost:3001/neighborhood/${this.props.neighborhoodId}`)
    console.log(response.data)
return response.data
}
getHoodTools = async (users)=> {
    console.log(users)
    const newUsers = await users.map(async(user) => {
    console.log(user)
    const data = {
        id: user.userId,
        firstName: user.firstName,
        lastName: user.lastName
      };
      console.log(data)
    // const toolResponse = await axios.post('https://neighborhood-toolshed.herokuapp.com/user/gettools'   || 'http://localhost:3001/user/gettools', data);
    // const userResponse = await axios.post('https://neighborhood-toolshed.herokuapp.com/user/getusers'   || 'http://localhost:3001/user/getusers', data);
    const toolResponse = await axios.post( 'http://localhost:3001/user/gettools', data);
    const userResponse = await axios.post( 'http://localhost:3001/user/getusers', data);
    console.log(toolResponse.data)
    this.setState({
        tools:toolResponse.data,
        user:userResponse.data,
    })
        // user.tools = response.data;
      console.log(this.state.firstName)
      return user 
}) 
return newUsers
}
    render (){
console.log(this.state.firstName)
   
    return(
        <div className="main">
            {this.props.neighborhoodName} Neighborhood
            {this.state.tools.map(tool => (               
              <li> {tool.toolName} {this.state.user.map(toolUser => (<div>{toolUser.firstName} {toolUser.lastName}</div>))}</li>
                  
           )
        )}
        </div>

    )
}
 }
export default Neighborhood;