/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React, { Component } from "react";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import AOS from "aos";
import "aos/dist/aos.css";
//import Routes from "./routes";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { BrowserRouter,Route, Router } from "react-router-dom";
//import { Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import BaseLayout from "./layouts/BaseLayout";
import Routes from './routes'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    AOS.init();
  }
  render() {
    return (
     <div>
      
       <Routes/>
       
      </div>
    );
  }
}

export default App;
