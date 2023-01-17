import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import Button from "react-bootstrap/Button";
import styles from "./contact.module.css";

import Form from "react-bootstrap/Form";

export default class Contact extends Component {
  render() {
    return (
      <div id="contact" className={styles.contact}>
        <div className={styles.top}>
          <div className={styles.text}>
            <h1 style={{ color: "#10e956" }}>contact.</h1>
            <p style={{ fontSize: "25px" }}>
              Get in touch with me via social media or email.
            </p>
            <div className={styles.icon}>
              <div className={styles.iconbody}>
                <SocialIcon network="twitter" />
                <h5>Twitter</h5>
              </div>
              <div className={styles.iconbody}>
                <SocialIcon network="facebook" />
                <h5>Facebook</h5>
              </div>
              <div className={styles.iconbody}>
                <SocialIcon network="linkedin" />
                <h5>Linkedin</h5>
              </div>
              <div className={styles.iconbody}>
                <SocialIcon network="instagram" />
                <h5>Instagram</h5>
              </div>
            </div>
          </div>
          <div className={styles.img}>
            <img
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
              alt=""
              className={styles.img}
            />
          </div>
        </div>
        <div className={styles.bot}>
          <h1 style={{ color: "#10e956" }}>Send me an email</h1>
          <div className={styles.input}>
            <div className={styles.left}>
              <Form>
                <Form.Group className="mb-4" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="Name" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Form>
            </div>
            <div className={styles.right}>
              <Form>
                <Form.Group className="mb-3" controlId="ControlTextarea1">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" style={{ height: "135px" }} />
                </Form.Group>
              </Form>
              <Button variant="primary" type="submit" className={styles.btn}>
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
