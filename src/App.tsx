import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './App.css';

import { All } from "./component/Main"
import { SinglePokemon } from './component/SinglePokemon';

function App() {

    return (
        <Router >
            <Switch>
                <Route path="/" exact={true} >
                    <Redirect to="/1" />
                </Route>
                <Route path="/:gen" exact={true} component={All} />
                <Route path="/pokemon/:name" exact={true} component={SinglePokemon} />
            </Switch>
        </Router>
    );
}

export default App;
