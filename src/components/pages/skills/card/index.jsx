import React from "react";
import items from "../../../data/data";
import Item from "../item";
import styles from "./style.module.scss";

const Carditem = () => {
  return (
    <div className={styles.Item}>
      {items.map((item) => (
        <Item key={item.name} name={item.name} icon={item.icon} />
      ))}
    </div>
  );
};

export default Carditem;
