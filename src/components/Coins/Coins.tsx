import React from "react";
import Coin from "./Coin/Coin";
import styles from "./Coins.module.css";

function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
  return key in obj;
}

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
