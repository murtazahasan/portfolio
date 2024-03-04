import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";


function Footer() {
  return (
    <div className="container-fluid bg-dark text-white ">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <p className="mb-3 mb-md-0 fw-bold  ">Copyright © 2024. All rights are reserved</p>
        </div>

        <ul className="nav col-md-4 justify-content-center list-unstyled d-flex">
          <div
        
            className=" fs-1 text-white "
          >
            <CiLinkedin />
          </div>
          <div
        
        className=" fs-1 text-white "
      >
            <FiGithub />
            </div>
               </ul>
      </footer>
    </div>
  )
}

export default Footer