import React from "react";
import { useOutsideClick } from "./useOutsideClick"; // Import the custom hook
import styles from "./Header.module.css";

export default function Header({
  scrolltoabout,
  scrolltocontact,
  scrolltoproject,
  scrolltohome,
}) {
  const navbarRef = useOutsideClick(() => {
    // This function will be called when clicking outside the navbar
    const navbar = document.querySelector(".navbar-collapse");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  });

  const handleLinkClick = (callback) => {
    setTimeout(() => {
      if (callback) {
        callback();
      }
    }, 0);
  };

  return (
    <nav className="navbar h-5 navbar-expand-lg bg-white sticky-top" ref={navbarRef}>
      <div className="container-fluid">
        <a
          className={` ${styles.myLogo}  navbar-brand  fs-1 fw-bolder `}
          href="#"
        >
          Murtaza
        </a>

        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse  navbar-collapse"
          id="navbarSupportedContent"
          ref={navbarRef}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li
              className={`${styles.mynav} nav-item`}
              onClick={() => handleLinkClick(scrolltohome)}
            >
              <a className="nav-link fw-bold" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item" onClick={() => handleLinkClick(scrolltoabout)}>
              <a className="nav-link fw-bold" href="#">
                About
              </a>
            </li>
            <li className="nav-item" onClick={() => handleLinkClick(scrolltoproject)}>
              <a className="nav-link fw-bold" href="#">
                Projects
              </a>
            </li>
            <li className="nav-item" onClick={() => handleLinkClick(scrolltocontact)}>
              <a className="nav-link fw-bold" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

