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
    await this.getNeighborsTools();
}
getNeighborsTools = async () => {
    console.log(this.props.neighborhoodName)
    const response = await axios.get(`https://neighborhood-toolshed.herokuapp.com/neighborhood/${this.props.neighborhoodId}`)
    // const response = await axios.get(`http://localhost:3001/neighborhood/${this.props.neighborhoodId}`)
    console.log(response.data)
    this.setState({
        neighborhoodTools: response.data,
        dataLoaded: true,
    })
    console.log(this.state.neighborhoodTools)    
    return (this.state.neighborhoodTools)
}
render (){
    console.log(this.state.neighborhoodTools);
       if(this.state.dataLoaded){
        return(      
                <div className="list"> <div className="mainHood">{this.state.neighborhoodTools[0].Neighborhoods[0].neighborhoodName} Neighborhood</div>               
                    {this.state.neighborhoodTools.map(neighbors => (              
                    <li className="neighbor"> {neighbors.firstName} {neighbors.lastName}{neighbors.Tools.map(tool => (
                        <div className="toolList">{tool.toolName}</div>))} </li>
                        
                )
                )}<div className="grassBackgroundHood"></div>
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