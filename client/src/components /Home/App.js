import { Route, Switch } from "react-router-dom";
import React from "react";

import Header from "./Header"

// import NewMission from "./addMission/NewMission"
// import Gamepage from "./Game/Gamepage"
// import MissionPage from "./Mission/MissionPage"
// import PartyPage from "./MissionParty/PartyPage"
import Comment from "../PostBox/Comment";
import LoginPage from "../Login/LoginPage"
import PlayerPage from "./PlayerPage"
import { useState, useEffect} from "react"
import Mission from "../MissionPage/Mission";
// import Game from "../Game/Games";
import GameSearch from "../Game/GameSearch";
import GameList from "../Game/GameList";
// import { useHistory } from "react-router-dom"




function App(){
const [player, setUser] = useState(null)
const [games, setGame] = useState([])
const [search, setSearch] = useState("")
// let history = useHistory()

useEffect(() => {
    fetch("/me").then((r)=> {
        if(r.ok){
          r.json().then((player) => {
            // console.log(player)
            setUser(player)
          })
        //   history.push('/')
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


// if (!games) return 


if(!player) return <LoginPage onLogin={setUser}/>

return (
<div>
    <Header player={player}>
    </Header>
    <Switch>

        <Route exact path="/">
         <PlayerPage player={player}/>
        </Route>

        {/* <Route path="/search">
            <Search games = {"filterGame"} search={search} setSearch={setSearch}/>
        </Route> */}

        <Route exact path="/Games">
            <GameSearch games ={filterGame} setSearch ={setSearch} search={search}/>
        </Route>

         <Route exact path="/Mission">
            <Mission />
         {/* <Comment player={player}/> */}
        </Route>

        {/* <Route exact path="/LoginPage">
            <LoginPage />
        </Route> */}

        <Route exact path="/Comment">
         <Comment player={player}/>
        </Route>

        {/* <Route>
            <PlayerPage path="/PlayerPage"/>
        </Route> */}
    </Switch>
</div>
    )
}

export default App