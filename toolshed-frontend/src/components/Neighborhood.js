import React, { Component } from 'react';
import '../Neighborhood.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

class Neighborhood extends Component{
    constructor(props){  
        super(props);
        this.state ={
            neighborhoods: "",
            tools: [],
            users: [],
            firstName: "",
            lastName: "",
            userHood:""
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
    console.log(this.props.neighborhoodName)
    const response = await axios.get(`https://neighborhood-toolshed.herokuapp.com/neighborhood/${this.props.neighborhoodId}`)
    // const response = await axios.get(`http://localhost:3001/neighborhood/${this.props.neighborhoodId}`)
    console.log(response.data)
    this.setState({
        neighborhoods: response.data.Neighborhood,
    })
    console.log(this.state.neighborhoods)    
return response.data
}
getHoodTools = async (users)=> {
    console.log(users)
    const newUsers = await users.map(async(user) => {
    console.log(user)
    this.setState({
        userHood:user.Neighborhood
    })
    const data = {
        id: user.userId,
        firstName: user.firstName,
        lastName: user.lastName
      };
    const toolResponse = await axios.post('https://neighborhood-toolshed.herokuapp.com/user/gettools'   || 'http://localhost:3001/user/gettools', data);
    const userResponse = await axios.post('https://neighborhood-toolshed.herokuapp.com/user/getusers'   || 'http://localhost:3001/user/getusers', data);
    // const toolResponse = await axios.post( 'http://localhost:3001/user/gettools', data);
    // const userResponse = await axios.post( 'http://localhost:3001/user/getusers', data);
    console.log(userResponse.data)
    this.setState({
        tools:toolResponse.data,
        user:userResponse.data,
    })
console.log(this.state.user)
      return user 
}) 

return newUsers
}
    render (){
console.log(this.state.userHood)
   
    return(
        <div className="mainHood">
            {this.state.userHood.neighborhoodName} Neighborhood
            {this.state.tools.map(tool => (               
              <li className="toolList">{tool.toolName} --{this.state.user.map(toolUser => (
              <div >{toolUser.firstName} {toolUser.lastName}</div>))}</li>
                  
           )
        )}
        </div>

    )
}
 }
export default Neighborhood;