import React from "react";
import styles from "./style.module.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Item = (props) => {
  return (
    <div className={styles.Card}>
      <Card className={styles.Medkue}>
        <Card.Body className={styles.Body}>
          <Card.Img variant="top" src={props.icon} style={{ width: "50px" }} />
          <Card.Title className="text-white">{props.name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
