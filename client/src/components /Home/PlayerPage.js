import {Link} from "react-router-dom"
import React from "react"
// import MissionForm from "../MissionPage/MissionForm";
import {useState} from "react"
import Logout from "../Login/LogOut"


function PlayerPage({player,setUser}){
    
    
    return (
         
        <div class="btn-group" role="group" aria-label="Basic example">
            <h2>Welcome, {player.username}</h2>
            <ul class="nav nav-pills">
                <li class="btn btn-primary" >
                <Link to="/Mission">Mission</Link>
                </li>
                <li class="btn btn-primary">
                <Link to="/Games">Games</Link>
                </li>
                <li class="btn btn-primary">
                <Link to="/Comment">Post</Link>
                </li>
                <li class="btn btn-primary">
                <Link to="/MissionForm">New Mission</Link>    
                </li>
                <li class="btn btn-primary">
                <Link to={`/players/${player.id}`}>Edit Profile</Link>
                </li>
            </ul> 
            <Logout player={player} setUser={setUser}/>
        </div>
    )
}


export default PlayerPage