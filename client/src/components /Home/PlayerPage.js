import {Link} from "react-router-dom"
import React from "react"
// import MissionForm from "../MissionPage/MissionForm";
import {useState} from "react"
import Logout from "../Login/LogOut"


function PlayerPage({player,setUser}){
    
    
    return (
         
        <div>
            <h2>Welcome, {player.username}</h2>
            <ul>
                <li>
                <Link to="/Mission">Mission</Link>
                </li>
                <li>
                <Link to="/Games">Games</Link>
                </li>
                <li>
                <Link to="/Comment">Post</Link>
                </li>
                <li>
                <Link to="/MissionForm">New Mission</Link>    
                </li>
                <li>
                <Link to={`/players/${player.id}`}>Edit Profile</Link>
                </li>
            </ul> 
            <Logout player={player} setUser={setUser}/>
        </div>
    )
}


export default PlayerPage