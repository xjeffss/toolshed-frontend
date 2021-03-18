import React, { Component } from 'react';
import '../User.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

class Neighborhood extends Component{
    constructor(props){  
        super(props);
        this.state ={
            tools: [],
            users: []
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
    const response = await axios.get(`https://neighborhood-toolshed.herokuapp.com/${this.props.neighborhoodId}`)
    console.log(response.data)
return response.data
}
getHoodTools = async (users)=> {
    console.log(users)
    const newUsers = await users.map(async(user) => {
    console.log(user)
    const data = {
        id: user.userId
      };
      console.log(data)
    const response = await axios.post('http://localhost:3001/user/gettools'  || 'https://neighborhood-toolshed.herokuapp.com/user/gettools' , data);
    console.log(response.data)
    this.setState({
        tools:response.data
    })
        // user.tools = response.data;
      
      return user 
}) 
return newUsers
}
    render (){
console.log(this.state.users)
   
    return(
        <div className="main">
            {this.props.neighborhoodName} Neighborhood
            {this.state.tools.map(tool => (               
              <li> {tool.toolName} {this.props.firstName} {this.props.lastName}</li>
           )
        )}
        </div>

    )
}
 }
export default Neighborhood;