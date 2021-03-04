import React from "react";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Armando",
      lastname: "Prieto",
      age: 0,
    };
   
  }
  render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
              <span class="d-block d-lg-none">{this.state.name} {this.state.lastname }</span>
              <span class="d-none d-lg-block">
                <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src={require('../img/profile.jpg')} alt=""/>
              </span>
            </a>
           
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#about">Contact</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#projects">Fun stuff</a>
                </li>
              
              </ul>
              
            </div>  
          </nav>


        );
   
  }
  
}
export default Navbar;
