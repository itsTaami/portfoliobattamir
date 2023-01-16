import React from "react";
// import { SocialIcon } from "react-social-icons";
// import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
const NavbarMenu = () => {
  return (
    <div className={styles.Container}>
      <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
        <Navbar.Brand className="mx-5 text-white">
          <Link to="/home" className=" text-white text-decoration-none fs-2">
            <h2>Portofolio</h2>
          </Link>
        </Navbar.Brand>

        <Nav className="justify-content-around me-5 w-25">
          <Nav.Link className=" text-center">
            <Link to="/about" className=" text-white text-decoration-none fs-5">
              About
            </Link>
          </Nav.Link>
          <Nav.Link className=" text-center">
            <Link
              to="/skills"
              className=" text-white text-decoration-none fs-5"
            >
              Skills
            </Link>
          </Nav.Link>
          <Nav.Link className=" text-center">
            <Link
              to="/project"
              className=" text-white text-decoration-none fs-5"
            >
              Project
            </Link>
          </Nav.Link>
          <Nav.Link className=" text-center">
            <Link
              to="/contact"
              className=" text-white text-decoration-none fs-5"
            >
              Contact
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavbarMenu;
