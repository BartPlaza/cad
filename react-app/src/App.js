import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import AuthView from './components/Views/Auth';
import RegisterView from './components/Views/Register';
import ProfileView from "./components/Views/Profile";
import CadView from "./components/Views/Cad";
import ErrorView from "./components/Views/Error";
import './App.scss';
import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Footer/Footer";
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import PrivateRoute from "./components/Routing/PrivateRoute";

class App extends Component {
    render() {
        return (
            <Route render={({location}) => (
                <Switch>
                    <Route exact path='/cad' component={CadView}/>
                    <div className="App">
                        <Navbar/>
                        <TransitionGroup className="section main">
                            <CSSTransition key={location.key} timeout={300} classNames='fade' appear={true}>
                                <section className="content pages-wrapper">
                                    <Switch location={location}>
                                        <Route path='/login' component={AuthView}/>
                                        <Route path='/register' component={RegisterView}/>
                                        <PrivateRoute path='/profile' component={ProfileView}/>
                                        <Route path='/something_went_wrong' component={ErrorView}/>
                                    </Switch>
                                </section>
                            </CSSTransition>
                        </TransitionGroup>
                        <Footer/>
                    </div>
                </Switch>
            )}/>
        );
    }
}

export default App;
