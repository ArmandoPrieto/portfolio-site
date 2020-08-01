import React from "react";

class Experience extends React.Component {
  constructor(props) {
    super(props);
   
  }
  render() {
        return (

            <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
              <div class="w-100">
                <h2 class="mb-5">Experience</h2>

                <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div class="resume-content">
                    <h3 class="mb-0">Web Developer</h3>
                    <div class="subheading mb-3">Dynamic Healthcare Systems</div>
                    <p></p>
                  </div>
                  <div class="resume-date text-md-right">
                    <span class="text-primary">July 2019 - Present</span>
                  </div>
                </div>

                <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div class="resume-content">
                    <h3 class="mb-0">Software Engineer / Project Leader</h3>
                    <div class="subheading mb-3">SOS Telemedicine</div>
                    <p></p>
                  </div>
                  <div class="resume-date text-md-right">
                    <span class="text-primary">December 2011 - January 2013</span>
                  </div>
                </div>

                <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
                  <div class="resume-content">
                    <h3 class="mb-0">Web Design Intern</h3>
                    <div class="subheading mb-3">Caibco</div>
                    <p></p>
                  </div>
                  <div class="resume-date text-md-right">
                    <span class="text-primary">September 2008 - June 2010</span>
                  </div>
                </div>

              </div>

            </section>

        );
   
  }
  
}
export default Experience;
