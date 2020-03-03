import React from 'react';
import {Switch, Route} from 'react-router-dom'
import CadView from "./components/Views/Cad";
import './App.scss';

const App = () => {
    return (
        <Route render={({location}) => (
            <Switch>
                <Route exact path='/' component={CadView}/>
            </Switch>
        )}/>
    );
};

export default App;
