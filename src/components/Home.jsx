import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
// import AOS from "aos";

function Home() {
  return (
    <>
      <div style={{ backgroundColor: "#f9f9f1" }} className="container-fluid">
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img src="Programming2.gif" alt="Vector Art" className="w-100" />
            </div>
            <div className="col-lg-6">
              <h1
                className={` ${styles.bigtext} display-5 fw-bold  text-body-emphasis lh-1 mb-3`}
              >
                Front-End React Developer
              </h1>
              <p className="lead fs-5 ">
                I am a skilled and passionate front-end developer with
                experience in creating visually appealing and user-friendly
                websites.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <Link
                  to="https://www.linkedin.com"
                  target="_blank"
                  className=" fs-2 text-dark"
                >
                  <CiLinkedin />
                </Link>
                <Link
                  to="https://www.github.com"
                  target="_blank"
                  className=" fs-2 text-dark px-4  "
                >
                  <FiGithub />
                </Link>
              </div>
            </div>
            {/*  */}
            <div className="row mt-5 ">
              <div className="col-lg-8 text-center d-flex align-items-center">
                <p className="fw-bold display-7">Tech Stack |</p>
                <div
                  className={` ${styles.right} row d-flex me-4 align-items-center`}
                >
                  <div className="col-2   ">
                    <img src="html-40.png" alt="Vector Art" className="w-100" />
                  </div>
                  <div className="col-2">
                    <img src="css-40.png" alt="Vector Art" className="w-100" />
                  </div>
                  <div className="col-2">
                    <img
                      src="bootstrap-40.png"
                      alt="Vector Art"
                      className="w-100"
                    />
                  </div>
                  <div className="col-2">
                    <img
                      src="tailwind-40.png"
                      alt="Vector Art"
                      className="w-100"
                    />
                  </div>
                  <div className="col-2">
                    <img src="js-40.png" alt="Vector Art" className="w-100" />
                  </div>
                  <div className="col-2">
                    <img
                      src="react-40.png"
                      alt="Vector Art"
                      className="w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* about */}

      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row- align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="Aboutme.gif" alt="Vector Art" className="w-100" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              ABOUT ME
            </h1>
            <p className="lead">
              {" "}
              Hey, my name is Murtaza, and I'm a Frontend Developer. My passion
              is to create and develop a clean UI/UX for my users.
            </p>

            <p className="lead">
              {" "}
              I have experience in HTML, CSS, JavaScript, React, and Bootstrap.
              I enjoy learning new technologies and frameworks, and I'm always
              looking for new challenges and opportunities to improve my skills.
            </p>
          </div>
        </div>
      </div>
      {/* project */}

      {/* contact */}
    </>
  );
}

export default Home;
