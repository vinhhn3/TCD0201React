import React, { Component } from 'react';
import Posts from './Posts'
import { Route, Switch } from 'react-router-dom';
import ShareThought from './ShareThought'
import NotFound from './NotFound'
import About from './About'
import Register from './Register'
import Login from './Login'
class Main extends Component {
    render() {
        return (
            <main className="Main">
                    <Switch>
                        <Route path='/' exact component={Posts}></Route>
                        <Route path='/about' exact component={About}></Route>
                        <Route path='/sharethought' exact component={ShareThought}></Route>
                        <Route path='/register' exact component={Register}></Route>
                        <Route path='/login' exact component={Login}></Route>
                        <Route component={NotFound}></Route>
                    </Switch>
                    
            </main>
        );
    }
}

export default Main;
