import React from "react";

function Contact() {
  return (
    <div className="container  fw-medium ps-5  py-2" id="featured-3">
      <h1 className="pb-2 pe-10 ">CONTACT</h1>
      <h5>I would be delighted to hear from you.</h5>
      <div className="row g-4 py-2 pe-10 align-items-center">
        <div className="feature col-lg-6 order-lg-2">
          <img src="Sentmessage.gif" alt="Vector Art" className="img-fluid" />
        </div>
        <div className="feature col-lg-6 order-lg-1">
          <div className="row g-4">
            <div className="feature col-md-6">
              <img src="linkedinLogo.png" alt="Vector Art" className="" />

              <h3 className="fs-2 text-body-emphasis">linkedin</h3>
              <a
                className="text-reset fs-5"
                target="_blank"
                href="https://www.linkedin.com"
              >
                linkedin
              </a>
            </div>
 <div className="feature col-md-6 offset-md-6 offset-0 col-12 offset-xl-0 col-xl-6">
  <img src="emailLogo.png" alt="Vector Art" className="" />

  <h3 className="fs-2 text-body-emphasis">Mail</h3>
  <a
    className="text-reset fs-5"
    href="mailto:murtazahasan276@gmail.com"
  >
    Murtazahasan276@gmail.com
  </a>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;