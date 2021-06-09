import React from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
import Main from './Main/Main';
import Aside from '../Aside/Aside';
import Posts from '../publications/Posts/Posts';
import Detail from '../publications/Detail/Detail';
import Input from '../publications/CreatePost/Input';
import Footer from '../Footer/Footer';
import Loader from './Loader/Loader';
// import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const Profile = React.lazy(() => import('../Profile/Profile'));

function render(title, Cmp) {
  return function ({ match }) {
    debugger;
    return <Main title={title}><Cmp match={match} /></Main>
  };
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Loader local={true} isLoading={false} />
        <Navigation />
        <div className="Container">
          <Aside />
          <Switch>
            <Route path="/" exact><Redirect to="/posts" /></Route>
            <Route path="/posts" render={render('Publications', Posts)} />
            <Route path="/post/:id" render={render('Posts', Detail)} />
            <Route path="/create-posts">
              <Main title="Share your thoughts..."><Input /></Main>
            </Route>
            <Route path="/profile">
              <Main title="Profile">
                <React.Suspense fallback={<Loader isLoading={true} />}>
                  <Profile></Profile>
                </React.Suspense>
              </Main>
            </Route>
            <Route path="/login">
              <Main title="Login"><Login /></Main>
            </Route>
            <Route path="/register">
              <Main title="Register"><Register /></Main>
            </Route>
            <Route path="*">
              <Main title="Not Found"><NotFound /></Main>
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
