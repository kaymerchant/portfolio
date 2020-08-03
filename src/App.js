import React, { Component } from 'react';
import resumeData from "./resumeData"
import AboutMe from "../src/Components/AboutMe/AboutMe"
import Skills from "../src/Components/Skills/Skills"
import Portfolio from "../src/Components/Portfolio/Portfolio"
import Header from "../src/Components/Header/Header"
import Footer from '../src/Components/Footer/Footer'

class App extends Component {

  componentDidMount() {
    document.title = "Kanwal Merchant";
  }

  render() {
    return (
      <div>
        <Header/>
        <Skills/>
        <AboutMe/>
        <Portfolio/>
        <Footer/>
      </div>
    );
  }
  
}

export default App;


