import React from "react";
// import { SocialIcon } from "react-social-icons";
// import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./style.module.css";
const NavbarMenu = () => {
  return (
    <div className={styles.Container}>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="d-flex justify-content-between"
      >
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#project">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarMenu;

{
  /* <SocialIcon
          url="https://twitter.com/jaketrent"
          bgColor="red"
          className="App-logo"
        /> */
}
{
  /* <SocialIcon
          network="pinterest"
          style={{ height: 150, width: 150 }}
          className="App-logo"
        />
        <SocialIcon
          network="twitter"
          style={{ height: 150, width: 150 }}
          className="App-logo"
        />
        <SocialIcon
          network="facebook"
          style={{ height: 150, width: 150 }}
          className="App-logo"
        />
        <SocialIcon
          network="instagram"
          style={{ height: 150, width: 150 }}
          className="App-logo"
        /> */
}

{
  /* <h1>
          <Typewriter words={["Hello", "Pinecone"]} loop={false} />
        </h1> */
}

{
  /* <img src={logo} className="App-logo" alt="logo" /> */
}
{
  /* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */
}
{
  /* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */
}
{
  /* <h1 style={{ fontWeight: "normal" }}>
        Life is simple{" "}
        <span style={{ color: "red", fontWeight: "bold" }}>
          Style will be inherited from the parent element
          <Typewriter
            words={["Eat", "Sleep", "Code", "Repeat!"]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1> */
}
