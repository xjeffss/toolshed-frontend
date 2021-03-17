import React, { Component } from 'react';
import '../User.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

class Neighborhood extends Component{
    constructor(props){  
        super(props);
        this.state ={
            tools: [],
        }
    }

componentDidMount= async () =>{
    const users= await this.getNeighbors();
    const newUsers= await this.getTools(users);
    console.log(newUsers)
    this.setState( {
        users: newUsers,
  
    })
}
getNeighbors = async () => {
    const response = await axios.get(`http://localhost:3001/neighborhood/${this.props.neighborhoodId}`)
    console.log(response)
    return response;
}
getTools = async (users)=> {
    const newUsers = users.map(async(user) => {
    
    const data = {
        id: user.id
      };
      console.log(data)
    const response = await axios.post('http://localhost:3001/user/gettools', data);
    console.log(response.data)
      user.tools = response.data
      return user 
}) 
return newUsers
}
    render (){

   
    return(
        <div>
            A beautiful day in the neighborhood
            {this.state.tools.map(tool => (               
              <li> {tool.toolName}</li>
           )
        )}
        </div>

    )
}
 }
export default Neighborhood;