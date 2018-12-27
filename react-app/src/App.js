import React, {Component} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import AuthView from './components/Views/Auth';
import RegisterView from './components/Views/Register';
import ProfileView from "./components/Views/Profile";
import TestView from "./components/Views/Test";
import ErrorView from "./components/Views/Error";
import './App.scss';
import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Footer/Footer";
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import PrivateRoute from "./components/Routing/PrivateRoute";
import {FormattedMessage} from "react-intl";

class App extends Component {
    render() {
        return (
            <Route render={({location}) => (
                <div className="App">
                    <Navbar/>
                    <TransitionGroup className="section main">
                        <CSSTransition key={location.key} timeout={300} classNames='fade' appear={true}>
                            <section className="content pages-wrapper">
                                <Switch location={location}>
                                    <Route path='/login' component={AuthView}/>
                                    <Route path='/register' component={RegisterView}/>
                                    <PrivateRoute path='/else' component={TestView}/>
                                    <PrivateRoute path='/profile' component={ProfileView}/>
                                    <Route path='/something_went_wrong' component={ErrorView}/>
                                </Switch>
                            </section>
                        </CSSTransition>
                    </TransitionGroup>
                    <Footer/>
                </div>
            )}/>
        );
    }
}

export default App;
