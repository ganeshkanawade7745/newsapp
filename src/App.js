import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from "./Components/Navbar";
import News from "./Components/News";

export default class App extends Component {
  //react life cycle
  // constructor(){
  //   super();
  //   console.log("this is constructor")
  // }
  render() {
    // console.log("this is render function")
    return (
      <>
      <Navbar/>
      <News/>
      </>
    )
  }
}


