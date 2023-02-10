import React from 'react';
import MainBody from './components/MainBody'
import Login from './components/Header.js';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
class App extends React.Component {
        constructor() {
          super()
        }
      
        render() {
          return ( <Router>
              <Login></Login>
              <MainBody></MainBody>
              <Footer></Footer>
          </Router>)
        }
    }
    
export default App;