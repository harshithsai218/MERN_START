import React from 'react';
import {BrowserRouter as Router ,Route, Redirect,Switch} from "react-router-dom";

import Users from './Users/Pages/Users';
import NewPlaces from './Places/Pages/NewPlaces';
import UserPlaces from './Places/Pages/UserPlaces';
import MainNavigation from './Shared/Components/Navigation/MainNavigation';
const App = () =>{
    return <Router>
      <MainNavigation/> 
      <main>
      <Switch>
        <Route path="/" exact>
          <Users/> 
        </Route>;
        <Route path="/:userId/places">
          <UserPlaces/>
        </Route>
        <Route path="/places/new" exact>
          <NewPlaces/> 
        </Route>;
        <Redirect to = "/" />;
        </Switch> 
        </main>
    </Router>;
}; 

export default App;
