import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import AuthView from './components/Views/Auth';
import './App.scss';
import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Footer/Footer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar/>
                <section className="section main">
                    <Switch>
                        <Route path='/login' component={AuthView}/>
                    </Switch>
                </section>
                <Footer/>
            </div>
        );
    }
}

export default App;
