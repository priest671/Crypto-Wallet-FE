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
    } else {
      return null;
    }
  });

  return (
    <div className={styles["coins-wrapper"]}>
      <div className={styles["grid-header"]}>
        <div className={styles["coin"]}>
          <p className={styles["coin-heading"]}>Currency</p>
        </div>
        <div className={styles["quantity"]}>
          <p className={styles["coin-heading"]}>QTY</p>
        </div>

        <div className={styles["price"]}>
          <p className={styles["coin-heading"]}>Price (PKR)</p>
        </div>
      </div>
      {coins}
    </div>
  );
};

export default Coins;
