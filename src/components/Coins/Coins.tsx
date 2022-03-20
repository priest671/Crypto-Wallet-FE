import React from "react";
import Coin from "./Coin/Coin";
import styles from "./Coins.module.css";
import { hasKey } from "../../helper/HelperFunctions";

interface coinsProps {
  allCoins: { [key: string]: string };
}

const Coins = (props: coinsProps) => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["gridHeader"]}>
        <div className={styles["left"]}>
          <h3>Currency</h3>
        </div>
        <div className={styles["right"]}>
          <h3>Price (PKR)</h3>
        </div>
      </div>
      {Object.keys(props.allCoins).map((key, index) => {
        return (
          <Coin
            key={index}
            name={hasKey(props.allCoins, key) && props.allCoins[key]}
            acronym={key}
          />
        );
      })}
    </div>
  );
};

export default Coins;
