import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/UI/Home';
import NotFound from './components/UI/NotFound';
import Header from './components/containers/Header';
import Sports from './components/containers/Sports';
import Work from './components/containers/Work';
import Entertainment from './components/containers/Entertainment';
import Login from './components/containers/Login';
// import Profile from './components/UI/Profile';
import ProtectedRoute from './components/containers/ProtectedRoute';

function App() {
  let catergoriesWrapper = () => {
    return (
      <div className="row">
        <Sports />
        <Work />
        <Entertainment />
      </div>
    )
  }
  let wrapper = (Component: any) => {
    return <Component />
  }
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact render={() => (wrapper(Login))} />
          {/* <Route path="/profile" exact component={Profile} /> */}
          {/* <Route path="/profile" exact render={(props: any) =>
            props.loggedIn ? (
              Profile
            ) : (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: { from: props.location }
                  }}
                />
              )
          } /> */}
          <Route path="/tasks" exact render={() => (catergoriesWrapper())} />
          <ProtectedRoute />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
