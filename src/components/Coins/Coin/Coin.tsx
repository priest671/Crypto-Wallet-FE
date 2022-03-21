import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Coin.module.css";

interface coinProps {
  name: string | boolean;
  acronym: string;
  quantity: number;
}

const Coin = (props: coinProps) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (props.name && props.acronym !== "PKR") {
      const url = `https://api.coinbase.com/v2/prices/${props.acronym}-PKR/buy`;
      axios.get(url).then((res) => {
        let price = res.data.data.amount * props.quantity;
        price = Number(price.toFixed(2));
        setPrice(price);
      });
    } else if (props.name && props.acronym === "PKR") {
      setPrice(props.quantity);
    }
  }, []);

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["leftBox"]}>
        <img
          src={`images/${props.acronym}.png`}
          className={styles["coinPicture"]}
          alt="IMG"
        />
      </div>

      <div className={styles["leftMiddlebox"]}>
        <h3>{props.name}</h3>
      </div>

      <div className={styles["rightMiddlebox"]}>
        <h3>{props.quantity}</h3>
      </div>

      <div className={styles["rightBox"]}>
        <h3>{price}</h3>
      </div>
    </div>
  );
};

export default Coin;
