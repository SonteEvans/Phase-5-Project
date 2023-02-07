import React from 'react';
// import './App.css';
// import { useState, useEffect } from "react";
import { Switch, Route} from "react-router-dom"

import LoginPage from "./LoginPage"
import GamePage from "./Games/GamePage"
import MissionPage from "./Mission/MissionPage"
import MissionParty from "./MissionParty/party"
import PostPage from "./Posts/PostPage"

function App() {
  return (
    <div>
      <Switch>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </div>
  ),
}

export default App