import React, { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

function App() {



  return (
    <div >

      <Router>
        <Switch>
          <Route exact path="/" component={ComponentA} />
          <Route exact path="/componentb" component={ComponentB} />
          <Route exact path="/componentc" component={ComponentC} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
