import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import  Route  from 'react-router-dom/Route';
//import axios from 'axios';
import  User  from './component/users';
import  Create  from './component/create';


class App extends Component {
  render(){
    return (
      <div className="App">
        <Router>
          <div>
          <Route path="/create" exact strict Component={Create}/>
          <Route path="/user" exact strict Component={User}/>
          </div>
        </Router>
      </div>
      // <User/>
    )
  }
}

export default App;