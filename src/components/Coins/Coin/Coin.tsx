import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Coin.module.css";

interface coinProps {
  name: string | boolean;
  acronym: string;
  quantity?: number;
}

const Coin = (props: coinProps) => {
  const [price, setPrice] = useState(0);
  const [displayQuantity, setDisplayQuantity] = useState<any>();

  useEffect(() => {
    let quantity = 1;

    if (props.quantity) {
      quantity = props.quantity;
    }

    if (props.name && props.acronym !== "PKR") {
      const url = `https://api.coinbase.com/v2/prices/${props.acronym}-PKR/buy`;
      axios.get(url).then((res) => {
        let price = res.data.data.amount * quantity;
        price = Number(price.toFixed(2));
        setPrice(price);

        setDisplayQuantity(Number(quantity).toFixed(6));
      });
    } else if (props.name && props.acronym === "PKR") {
      setPrice(quantity);
      setDisplayQuantity(Number(quantity));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles["wrapper"]}>
      <div className={`${styles["item"]} ${styles["coin"]}`}>
        <div className={styles["coin-picture"]}>
          <img src={`images/${props.acronym}.png`} alt="IMG" />
        </div>

        <p className={styles["coin-name"]}>{props.name}</p>
      </div>

      <div className={`${styles["item"]} ${styles["quantity"]}`}>
        <p>{props.quantity && displayQuantity}</p>
      </div>

      <div className={`${styles["item"]} ${styles["price"]}`}>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Coin;
