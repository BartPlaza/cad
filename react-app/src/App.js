import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import AuthView from './components/Views/Auth';
import ProfileView from "./components/Views/Profile";
import './App.scss';
import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Footer/Footer";
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class App extends Component {
    render() {
        return (
            <Route render={({location}) => (
                <div className="App">
                    <Navbar/>
                    <section className="section main">
                        <TransitionGroup>
                            <CSSTransition key={location.key} timeout={300} classNames='fade'>
                                <Switch location={location}>
                                    <Route path='/login' component={AuthView}/>
                                    <Route path='/home' component={ProfileView}/>
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    </section>
                    <Footer/>
                </div>
            )}/>
        );
    }
}

export default App;
