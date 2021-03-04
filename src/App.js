import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import axios from 'axios';

import Navbar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects";

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
          
            <Projects />
            <hr class="m-0"/>
          
        </div>
            
        </div>
      
    );
  }
}

export default App;
