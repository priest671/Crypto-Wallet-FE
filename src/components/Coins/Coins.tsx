import React from "react";
import Coin from "./Coin/Coin";
import styles from "./Coins.module.css";

interface coinsProps {
  allCoins: any;
}

const Coins = (props: coinsProps) => {
  let coins;
  let hasQuantity = false;

  if (props.allCoins) {
    coins = props.allCoins.map((coin: any, index: number) => {
      if (coin.quantity) {
        hasQuantity = true;
        return (
          <Coin
            key={index}
            name={coin.coin.name}
            acronym={coin.coin.acronym}
            quantity={coin.quantity}
          />
        );
      } else {
        return <Coin key={index} name={coin.name} acronym={coin.acronym} />;
      }
    });
  }

  return (
    <div className={styles["coins-wrapper"]}>
      <div className={styles["grid-header"]}>
        <div className={styles["coin"]}>
          <p className={styles["coin-heading"]}>Coin</p>
        </div>

        {hasQuantity && (
          <div className={styles["quantity"]}>
            <p className={styles["coin-heading"]}>QTY</p>
          </div>
        )}

        <div className={styles["price"]}>
          <p className={styles["coin-heading"]}>Price (PKR)</p>
        </div>
      </div>
      {coins}
    </div>
  );
};

export default Coins;
