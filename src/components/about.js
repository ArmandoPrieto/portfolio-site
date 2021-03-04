import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "A.",
      lastname: "Prieto",
      email: "prieto.arm at gmail.com",
      address: "Planet Earth",
      description: "Software Engineer",
    };
   
  }
  render() {
        return (
            <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
            <div class="w-100">
              <h1 class="mb-0">{this.state.name}
                <span class="text-primary">{this.state.lastname}</span>
              </h1>
              <div class="subheading mb-5">{this.state.address} 
                <a href="mailto:name@email.com"> {this.state.email}</a>
              </div>
              <p class="lead mb-5">{this.state.description}</p>
             
              <div class="social-icons">
                
                <a href="http://www.linkedin.com/in/armandoprieto">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/ArmandoPrieto">
                  <i class="fab fa-github"></i>
                </a>
                <a href="https://twitter.com/armandoprieto">
                  <i class="fab fa-twitter"></i>
                </a>
                
                
              </div>
            </div>
          </section>


        );
   
  }
  
}
export default About;
