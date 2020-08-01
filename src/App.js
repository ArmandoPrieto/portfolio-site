import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import axios from 'axios';

import Navbar from "./components/navbar";
import About from "./components/about";
import Experience from "./components/experience";
import Education from "./components/education";
import Awards from "./components/awards";
import Skills from "./components/skills";
import Interest from "./components/interest";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastname: "",
      age: 0,
    };
  }
  componentDidMount() {
    axios.get('https://portfolio-backend-prieto.herokuapp.com/test')
      .then(res => {
        this.setState({ 
                      name: res.data.userName,
                      lastname: res.data.userLastName,
                      age: res.data.age });
      });

  }
  render() {
    return (
      <div className="App">

       <Navbar />

        <div class="container-fluid p-0">
       
            <About />
            <hr class="m-0"/>
          
            <Experience />
            <hr class="m-0"/>

            <Education />
            <hr class="m-0"/>
            {/*
            <Skills />
            <hr class="m-0"/>

            <Interest />
            <hr class="m-0"/>

            <Awards />
            */}
        </div>
            
        </div>
      
    );
  }
}

export default App;
