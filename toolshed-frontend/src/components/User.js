import React from 'react';
import '../User.css'
import { Link } from 'react-router-dom';

function User(props){
    console.log(props.id)
    return(
        <div>
            Hello {props.firstName}
        </div>
    )
}

export default User;