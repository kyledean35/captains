import React, { Component } from 'react';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import Specials from './SpecialsComponent';
import Contact from './ContactComponent';
import HomeM from './HomeMobile';
import MenuM from './MenuMobile';
import SpecialsM from './SpecialsMobile';
import ContactM from './ContactMobile';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Header from './HeaderComponent';

class Main extends Component {
    render(){
        if ((window.innerWidth>1024)) {            
            return (
                <div>
                    <Header/>
                     <Switch>
                            <Route exact path='/home' render={() => <Home/>} />
                            <Route exact path='/menu' render={() => <Menu/>} />
                            <Route exact path='/specials' render={() => <Specials/>} />
                            <Route exact path='/contact' render={() => <Contact/>} />
                            <Redirect to='home'/>
                    </Switch>
                    <Footer/>
                </div>
            )
        } 
        else {
            return (
                <div>
                    <Header/>
                     <Switch>
                            <Route exact path='/home' render={() => <HomeM/>} />
                            <Route exact path='/menu' render={() => <MenuM/>} />
                            <Route exact path='/specials' render={() => <SpecialsM/>} />
                            <Route exact path='/contact' render={() => <ContactM/>} />
                            <Redirect to='home'/>
                    </Switch>
                </div>
            )
        }
    }
}

export default withRouter(Main);