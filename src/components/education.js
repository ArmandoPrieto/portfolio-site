import React from "react";

class Education extends React.Component {
  constructor(props) {
    super(props);
   
  }
  render() {
        return (
            <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
            <div class="w-100">
              <h2 class="mb-5">Education</h2>

              <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div class="resume-content">
                  <h3 class="mb-0">Central University of Venezuela</h3>
                  <div class="subheading mb-3">Bachelor of Science</div>
                  <div>Computer Science - Web Development Track</div>
                </div>
                <div class="resume-date text-md-right">
                  <span class="text-primary">October 2006 - May 2012</span>
                </div>
              </div>

              <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
                <div class="resume-content">
                  <h3 class="mb-0">Salesian High School - Sarria</h3>
                  <div class="subheading mb-3">Data science program</div>
                </div>
                <div class="resume-date text-md-right">
                  <span class="text-primary">August 2000 - May 2006</span>
                </div>
              </div>

            </div>
          </section>


        );
   }
}
export default Education;
