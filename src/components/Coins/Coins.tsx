import React from "react";
import Coin from "./Coin/Coin";
import styles from "./Coins.module.css";
import { hasKey } from "../../helper/HelperFunctions";

interface singleCoinType {
  name: string;
  acronym: string;
  quantity: number;
}

interface coinsProps {
  allCoins: { [key: string]: singleCoinType };
}

const Coins = (props: coinsProps) => {
  const coins = Object.keys(props.allCoins).map((key, index) => {
    if (hasKey(props.allCoins, key)) {
      return (
        <Coin
          key={index}
          name={props.allCoins[key].name}
          acronym={props.allCoins[key].acronym}
          quantity={props.allCoins[key].quantity}
        />
      );
    }
  });

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["gridHeader"]}>
        <div className={styles["left"]}>
          <h3>Currency</h3>
        </div>
        <div className={styles["middle"]}>
          <h3>QTY</h3>
        </div>

        <div className={styles["right"]}>
          <h3>Price (PKR)</h3>
        </div>
      </div>
      {coins}
    </div>
  );
};

export default Coins;
