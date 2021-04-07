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
            userHood:"",
            neighborhoodTools: "",
            dataLoaded: false
        }
    }

componentDidMount= async () =>{
    
    const users= await this.getNeighborsTools();
    console.log(users)
    const newUsers= await this.getHoodTools(users);
    console.log(newUsers)
    this.setState( {
        users: newUsers,
  
    }
    )
}
getNeighborsTools = async () => {
    // const response = await axios.get(`https://neighborhood-toolshed.herokuapp.com/neighborhood/${this.props.neighborhoodId}`)
    const response = await axios.get(`http://localhost:3001/neighborhood/${this.props.neighborhoodId}`)
    console.log(response.data)
    this.setState({
        neighborhoodTools: response.data,
        dataLoaded: true,
    })
    console.log(this.state.neighborhoodTools)    
    return (this.state.neighborhoodTools)
}
getHoodTools = async (users)=> {
    console.log(users)
    const newUsers = await users.map(async(user) => {
    console.log(user)
    this.setState({
        userHood:user.Neighborhood
    })
    const data = {
        id: user.id,
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
console.log(this.state.userHood)
      return user 
}) 

return newUsers
}
    render (){
console.log(this.state.neighborhoodTools);
   if(this.state.dataLoaded){
    return(
            
            <div className="mainHood">
                {this.state.neighborhoodTools[0].Neighborhoods[0].neighborhoodName} Neighborhood
                {this.state.neighborhoodTools.map(neighbors => (              
                <li className="toolList"> {neighbors.Tools.map(tool => (
                    <div>{tool.toolName}</div>))} --{neighbors.firstName} {neighbors.lastName}</li>
                    
            )
            )}
            </div>

        )
    }
   else {    return (
        <div>
            Data Loading
        </div>
    )
    
 }  } }
export default Neighborhood;