import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import CreateUser from './components/CreateUser';
import CheckUser from './components/CheckUser';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
    {/*  <BrowserRouter> */}
        <Switch>
          <Route exact path="/createuser">
            <CreateUser />
          </Route>
          <Route exact path="/checkuser">
            <CheckUser />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    {/*  </BrowserRouter>*/ }

      <Footer />
    </div>
  );
}

export default App;
