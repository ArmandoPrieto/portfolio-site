import React from "react";

class Projects extends React.Component {
  constructor(props) {
    super(props);
   
  }
  render() {
        return (
            <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="projects">
            <div class="w-100">
              <h2 class="mb-5">Fun stuff</h2>

              <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div class="resume-content">
                  <h3 class="mb-0">P1: Tic tac toe</h3>
                  <div>
                    <p>Tic tac toe with memory using React.js, <a href="https://armandoprieto.github.io/react/">play</a>
                    </p>
                  </div>
                </div>
                <div class="resume-date text-md-right">
                  <span class="text-primary">...</span>
                </div>
              </div>

              <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div class="resume-content">
                  <h3 class="mb-0">P2: Digital clock</h3>
                  <div>
                    <p>The Clock is made with jCanvas. jCanvas is a jQuery plugin that makes the HTML5 canvas easy to work with.
                    The lighting effect is a transformation over the color background and it's pretty good looking.</p>
                    <p>Check it out, <a href="https://armandoprieto.github.io/digitalClock/">here</a></p>
                  </div>
                </div>
                <div class="resume-date text-md-right">
                  <span class="text-primary">...</span>
                </div>
              </div>
              
              <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div class="resume-content">
                  <h3 class="mb-0">P3: Android things</h3>
                  <div>
                    <p>
                      <ul>
                        <li><a href="https://github.com/ArmandoPrieto/udacity-popular-movies">Popular movies app</a></li>
                        <li><a href="https://github.com/ArmandoPrieto/udacity-sandwich-club">Sandwich club app</a></li>
                        <li><a href="https://github.com/ArmandoPrieto/uadacity-bakingApp">Baking app</a></li>
                        
                      </ul>
                    </p>
                  </div>
                </div>
                <div class="resume-date text-md-right">
                  <span class="text-primary">...</span>
                </div>
              </div>

            </div>
          </section>


        );
   }
}
export default Projects;
