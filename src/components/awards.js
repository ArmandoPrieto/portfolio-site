import React from "react";

class Awards extends React.Component {
  constructor(props) {
    super(props);
   
  }
  render() {
        return (
            <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
                <div class="w-100">
                    <h2 class="mb-5">Awards &amp; Certifications</h2>
                    <ul class="fa-ul mb-0">
                        <li>
                        <i class="fa-li fa fa-trophy text-warning"></i>
                        Google Analytics Certified Developer</li>
                        <li>
                        <i class="fa-li fa fa-trophy text-warning"></i>
                        Mobile Web Specialist - Google Certification</li>
                       
                    </ul>
                </div>
            </section>
        );
   
  }
  
}
export default Awards;
