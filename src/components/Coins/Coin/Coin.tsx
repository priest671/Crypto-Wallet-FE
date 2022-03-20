import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Coin.module.css";

interface coinProps {
  name: string | boolean;
  acronym: string;
}

const Coin = (props: coinProps) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (props.name) {
      const url = `https://api.coinbase.com/v2/prices/${props.acronym}-PKR/buy`;
      axios.get(url).then((res) => {
        setPrice(res.data.data.amount);
      });
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
      <div className={styles["middlebox"]}>
        <h3>{props.name}</h3>
      </div>
      <div className={styles["rightBox"]}>
        <h3>
          {/* {price} */}
          <em>{price}</em>
        </h3>
      </div>
    </div>
  );
};

export default Coin;
