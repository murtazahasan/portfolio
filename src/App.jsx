import React, { useEffect, useRef } from "react";
import { Contact, Header, Home, Project } from "./components";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { BsBoxArrowUpRight } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
// import style from "./App.module.css";
// import styles from "./components/Home.module.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const projectRef = useRef(null);
  const homeRef = useRef(null);
  const scrolltohome = () => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrolltoabout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrolltocontact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrolltoproject = () => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Header
        scrolltohome={scrolltohome}
        scrolltoabout={scrolltoabout}
        scrolltocontact={scrolltocontact}
        scrolltoproject={scrolltoproject}
      />

      {/* home */}

      <div
        style={{ backgroundColor: "#f9f9f1" }}
        className="container-fluid"
        ref={homeRef}
      >
        <div className="container col-xxl-8 px-4 py-3">
          <div className="row flex-lg-row-reverse align-items-center  py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                data-aos="flip-left"
                data-aos-duration="1000"
                src="Programming2.gif"
                alt="Vector Art"
                className="w-100"
              />
            </div>
            <div className="col-lg-6">
              <h1
                data-aos="flip-left"
                data-aos-duration="1000"
                className=" display-4 fw-bold rtuck text-body-emphasis lh-1 mb-3"
              >
                Front-End React Developer
              </h1>
              <p
                data-aos="flip-right"
                data-aos-duration="1500"
                className="lead fs-5 "
              >
                I am a skilled and passionate front-end developer with
                experience in creating visually appealing and user-friendly
                websites.
              </p>

              <div
                data-aos="flip-down"
                data-aos-duration="1200"
                className="btn-group"
              >
                <a
                  href="https://www.linkedin.com/in/murtazahasan786"
                  target="_blank"
                  className=" fs-1 fw-bold text-dark"
                >
                  <CiLinkedin />
                </a>

                <a
                  href="https://github.com/murtazahasan"
                  target="_blank"
                  className=" fs-1 text-dark ps-3"
                >
                  <FiGithub />
                </a>
              </div>
            </div>
            {/*  */}
            <div className="row mt-5 ">
              <div className="col-lg-8  d-flex align-items-center">
                <p className="fw-bold me-4 fs-5">Tech Stack</p>
                <div className=" d-flex me-4 border-start border-2 border-dark ps-3 pb-2 align-items-center">
                  <div className=" col-2   ">
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
                  <div className="col-2">
                    <img src="next-40.png" alt="delete" className="w-100" />
                  </div>
                  <div className="col-2">
                    <img src="typescript-40.png" alt="delete" className="w-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* about */}

      <div className="container col-xxl-8 px-4 py-5" ref={aboutRef}>
        <div className="row flex-lg-row- align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              data-aos="zoom-in-left"
              data-aos-duration="2000"
              src="Aboutme.gif"
              alt="Vector Art"
              className="w-100"
            />
          </div>
          <div className="col-lg-6">
            <h1
              data-aos="flip-up"
              data-aos-duration="1000"
              className="display-5 fw-bold text-body-emphasis lh-1 mb-3"
            >
              ABOUT ME
            </h1>
            <p data-aos="flip-left" data-aos-duration="1500" className="lead">
              Hey, my name is Murtaza, and I'm a Frontend Developer. My passion
              is to create and develop a clean UI/UX for my users.
            </p>
            <p data-aos="flip-down" data-aos-duration="1000" className="lead">
              I have experience in HTML, CSS, Bootstrap, Tailwind, JavaScript,
              React.js, Redux, Next.js, and TypeScript. I enjoy learning new
              technologies and frameworks, and I'm always looking for new
              challenges and opportunities to improve my skills.
            </p>
          </div>
        </div>
      </div>

      {/* project */}

      <div style={{ backgroundColor: "#f9f9f1" }} className="container-fluid ">
        {/* MyShop */}
        <div className="container col-xxl-8 px-4 py-5" ref={projectRef}>
          <h1
            data-aos="flip-left"
            data-aos-duration="1200"
            className="display-5 fw-bold text-body-emphasis lh-1 mb-3"
          >
            Projects
          </h1>
          <p
            data-aos="flip-down"
            data-aos-duration="1500"
            style={{ color: "#107c8f" }}
            className="fw-bold"
          >
            Each project is a unique piece of development
          </p>
          <div className="row align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src="ecom.PNG"
                className="d-block mx-lg-auto img-fluid"
                style={{ borderRadius: "6% 6% 6% 6%" }}
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1
                data-aos="zoom-in"
                data-aos-duration="1500"
                className="display-5 fw-bold text-body-emphasis lh-1 mb-3"
              >
                MyShop
              </h1>
              <p className="lead">
                A sleek and user-friendly e-commerce platform, offering seamless
                browsing and personalized shopping experiences. Explore our
                curated collection today!
              </p>
              <div
                data-aos="flip-right"
                data-aos-duration="1500"
                className="d-grid gap-2 d-md-flex mt-5 justify-content-md-start"
              >
                <span className="pt-4 fw-bold">code</span>
                <a
                  href="https://github.com/murtazahasan/MyShop.git"
                  target="_blank"
                  className=" fs-2 pt-2 text-black "
                >
                  <FiGithub />
                </a>
                <span className="pt-4 fw-bold">live demo</span>
                <a
                  href="https://my-shop-tau-six.vercel.app/"
                  target="_blank"
                  className=" fs-4 pt-3 text-black "
                >
                  <BsBoxArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* flavio restaurant */}
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src="restaurant.PNG"
                className="d-block mx-lg-auto img-fluid"
                style={{ borderRadius: "6% 6% 6% 6%" }}
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1
                data-aos="zoom-in"
                data-aos-duration="1500"
                className="display-5 fw-bold text-body-emphasis lh-1 mb-3"
              >
                FLAVIO
              </h1>
              <p className="lead">
                A delightful culinary journey where flavors come alive. Explore
                our menu, savor exquisite dishes, and experience the art of fine
                dining
              </p>
              <div
                data-aos="flip-right"
                data-aos-duration="1500"
                className="d-grid gap-2 d-md-flex mt-5 justify-content-md-start"
              >
                <span className="pt-4 fw-bold">code</span>
                <a
                  href="https://github.com/murtazahasan/FLAVIO-RESTAURANT"
                  target="_blank"
                  className=" fs-2 pt-2 text-black "
                >
                  <FiGithub />
                </a>
                <span className="pt-4 fw-bold">live demo</span>
                <a
                  href="https://flavio-restaurant.vercel.app/"
                  target="_blank"
                  className=" fs-4 pt-3  text-black "
                >
                  <BsBoxArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* MAT */}
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src="mat.PNG"
                className="d-block mx-lg-auto border img-fluid "
                style={{ borderRadius: "6% 6% 6% 6%" }}
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1
                data-aos="zoom-in"
                data-aos-duration="1500"
                className="display-5 fw-bold text-body-emphasis lh-1 mb-3"
              >
                MAT
              </h1>
              <p className="lead">
                A versatile animation library empowering creators to bring their
                visions to life. With MAT, you can seamlessly craft captivating
                animations using a variety of features.
              </p>

              <div
                data-aos="flip-right"
                data-aos-duration="1500"
                className="d-grid gap-2 d-md-flex mt-3 justify-content-md-start"
              >
                <span className="pt-4 fw-bold">code</span>
                <a
                  href="https://github.com/murtazahasan/MAT.git"
                  target="_blank"
                  className=" fs-2 pt-2 text-black "
                >
                  <FiGithub />
                </a>
                <span className="pt-4 fw-bold">live demo</span>
                <a
                  href="https://mat-alpha.vercel.app/"
                  target="_blank"
                  className=" fs-4 pt-3 text-black "
                >
                  <BsBoxArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* CAR RENTAL */}
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src="carrental.PNG"
                className="d-block mx-lg-auto img-fluid"
                style={{ borderRadius: "6% 6% 6% 6%" }}
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1
                data-aos="zoom-in"
                data-aos-duration="1500"
                className="display-5 fw-bold text-body-emphasis lh-1 mb-3"
              >
                CAR RENTAL
              </h1>
              <p className="lead">
                Unlock the road to convenience and adventure with our Car Rental
                platform. Whether you’re planning a cross-country journey or a
                weekend escape, our user-friendly website offers seamless
                bookings.
              </p>
              <div
                data-aos="flip-right"
                data-aos-duration="1500"
                className="d-grid gap-2 d-md-flex mt-5 justify-content-md-start"
              >
                <span className="pt-4 fw-bold">code</span>
                <a
                  href="https://github.com/murtazahasan/Car_Rental.git"
                  target="_blank"
                  className=" fs-2 pt-2 text-black "
                >
                  <FiGithub />
                </a>
                <span className="pt-4 fw-bold">live demo</span>
                <a
                  href="
                  https://car-rental-plum-eight.vercel.app/"
                  target="_blank"
                  className=" fs-4 pt-3  text-black "
                >
                  <BsBoxArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ORBIT-GUIDE */}
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src="space.PNG"
                className="d-block mx-lg-auto border img-fluid "
                style={{ borderRadius: "6% 6% 6% 6%" }}
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1
                data-aos="zoom-in"
                data-aos-duration="1500"
                className="display-5 fw-bold text-body-emphasis lh-1 mb-3"
              >
                ORBIT-GUIDE
              </h1>
              <p className="lead">
                Navigate the cosmos with our celestial compass. Explore
                astronomical wonders, planetary alignments, and cosmic events.
                Orbit Guide is your portal to the universe.
              </p>

              <div
                data-aos="flip-right"
                data-aos-duration="1500"
                className="d-grid gap-2 d-md-flex mt-3 justify-content-md-start"
              >
                <span className="pt-4 fw-bold">code</span>
                <a
                  href="https://github.com/murtazahasan/Orbit-Guide.git"
                  target="_blank"
                  className=" fs-2 pt-2 text-black "
                >
                  <FiGithub />
                </a>
                <span className="pt-4 fw-bold">live demo</span>
                <a
                  href="https://orbit-guide.vercel.app/"
                  target="_blank"
                  className=" fs-4 pt-3 text-black "
                >
                  <BsBoxArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact */}

      <div
        className="container  fw-medium ps-5 pb-5 mt-4 py-2"
        id="featured-3"
        ref={contactRef}
      >
        <h1
          data-aos="flip-down"
          data-aos-duration="1500"
          className="fw-bold pb-2 pe-10 "
        >
          CONTACT
        </h1>
        <h5 data-aos="flip-right" data-aos-duration="1500">
          I would be delighted to hear from you.
        </h5>
        <div className="row g-4 py-2 pe-10 align-items-center">
          <div className="feature col-lg-6 order-lg-2">
            <img
              data-aos="flip-up"
              data-aos-duration="2000"
              src="Sentmessage.gif"
              alt="Vector Art"
              className="img-fluid"
            />
          </div>
          <div className="feature col-lg-6 order-lg-1">
            <div className="row g-4">
              <div
                data-aos="flip-down"
                data-aos-duration="1000"
                className="feature col-md-6"
              >
                <img src="linkedinLogo.png" alt="Vector Art" className="" />
                <a
                  href="https://www.linkedin.com/in/murtazahasan786/"
                  className="text-decoration-none cursor-pointer"
                  target="_blank"
                >
                  <h3 className="fs-2 text-body-emphasis">linkedin</h3>
                </a>
                <a
                  className="text-reset fs-5 text-decoration-none cursor-pointer"
                  target="_blank"
                  href="https://www.linkedin.com/in/murtazahasan786/"
                >
                  linkedin
                </a>
              </div>
              <div
                data-aos="flip-up"
                data-aos-duration="1500"
                className="feature col-md-6 offset-md-6 offset-0 col-12 offset-xl-0 col-xl-6"
              >
                <img src="emailLogo.png" alt="Vector Art" className="" />

                <h3 className="fs-2 text-body-emphasis">Mail</h3>
                <a
                  className="text-reset fs-5 text-decoration-none cursor-pointer"
                  href="mailto:murtazahasan276@gmail.com"
                >
                  Murtazahasan276@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}

      <div className="container-fluid bg-dark text-white  pt-3 ">
        <footer className="d-flex pt-3 flex-wrap justify-content-between align-items-center">
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <p className="mb-3  pb-3  fw-bold pt-3 ">
              Copyright © 2024. All rights are reserved
            </p>
          </div>

          <div className="nav footer-1 col-md-4 mb-3 pb-3 justify-content-center d-flex">
            <a
              href="https://www.linkedin.com/in/murtazahasan786/"
              target="_blank"
              className=" fs-2 pt-2 text-white "
            >
              <CiLinkedin />
            </a>
            <a
              href="https://github.com/murtazahasan"
              target="_blank"
              className=" fs-2   pt-2 ps-2 text-white "
            >
              <FiGithub className="mb-1" />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
