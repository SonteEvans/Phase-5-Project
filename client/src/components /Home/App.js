import { Route, Switch } from "react-router-dom";
import React from "react";

import Header from "./Header"

import Comment from "../PostBox/Comment";
import LoginPage from "../Login/LoginPage"
import PlayerPage from "./PlayerPage"
import { useState, useEffect} from "react"
import Mission from "../MissionPage/Mission";
import GameSearch from "../Game/GameSearch";
import MissionForm from "../MissionPage/MissionForm";
import PlayerEditForm from "./PlayerEditForm";





function App(){
const [player, setUser] = useState(null)
const [games, setGame] = useState([])
const [search, setSearch] = useState("")
// const [missions, setMission] = useState([])


useEffect(() => {
    fetch("/me").then((r)=> {
        if(r.ok){
          r.json().then((player) => {
            setUser(player)
          })
        
        }
      })
    }, []);
    
    useEffect(()=>{
        fetch("/games")
        .then(r => r.json())
        .then(games => {
            setGame(games)})

    },[])

    
const filterGame  = games.filter(oneGame => oneGame.title.toLowerCase().includes(search.toLowerCase()))





if(!player) return <LoginPage onLogin={setUser}/>

return (
<div>
    <Header player={player}>
    </Header>
    <Switch>
        <Route exact path="/">
         <PlayerPage player={player} setUser={setUser}/>
        </Route>

        <Route exact path="/Games">
            <GameSearch games ={filterGame} setSearch ={setSearch} search={search}/>
        </Route>

         <Route exact path="/Mission">
            <Mission />
        </Route>

        <Route exact path="/LoginPage">
            <LoginPage />
        </Route>

        <Route exact path="/Comment">
         <Comment player={player}/>
        </Route>

        <Route exact path="/MissionForm">
        <MissionForm />
        </Route>

        <Route exact path="/players/:id">
        <PlayerEditForm  player={player} setUser={setUser}/>
        </Route>
    </Switch>
</div>
    )
}

export default App