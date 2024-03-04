import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

function Project() {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="imgdelete.PNG"
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">MAT</h1>
          <p className="lead">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and{" "}
          </p>
          <span className="fw-bold"> React</span>
          <span className="ps-4 fw-bold">Bootstrap</span>
          <div className="d-grid gap-2 d-md-flex mt-5 justify-content-md-start">
            <span className="pt-4 fw-bold">code</span>
          
              <FiGithub />
          
            <span className="pt-4 fw-bold">live demo</span>
            
           
              <CiLinkedin />
           {" "}
          </div>
        </div>
      </div>
    </div>

    //   <div className="container px-10 ms-8 mt-5 mb-5" >
    //   <div className="row g-0">
    //     <div className="col-md-4 pe-1 py-5">
    //       <img src="imgdelete.PNG" className="img-fluid rounded-start" alt="..."/>
    //     </div>
    //     <div className="col-md-8 px-8 py-5">
    //       <div className="col-md-8 card-body">
    //         <h5 className="card-title">Card title</h5>
    //         <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //         <p className=""> React</p>
    //         <p className=""> Bootstrap</p>
    //       </div>
    //       <button type="button" className="btn btn-outline-secondary my-5 mx-4">Default</button>
    //       <button type="button" className="btn btn-outline-secondary my-5 mx-4">Default</button>

    //     </div>
    //   </div>
    // </div>
  );
}

export default Project;
