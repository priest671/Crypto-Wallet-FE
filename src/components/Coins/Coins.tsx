import React from "react";
import Coin from "./Coin/Coin";
import styles from "./Coins.module.css";

let allCoins = {
  BTC: "Bitcoin",
  ETH: "Ethereum",
  ETH2: "Ethereum 2",
  DOGE: "Dogecoin",
  ADA: "Cardano",
  SOL: "Solana",
  ATOM: "Cosmos",
  LTC: "Litecoin",
  SHIB: "SHIBA INU",
};

function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
  return key in obj;
}

const Coins = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["gridHeader"]}>
        <div className={styles["left"]}>
          <h3>Coin</h3>
        </div>
        <div className={styles["right"]}>
          <h3>Price (PKR)</h3>
        </div>
      </div>
      {Object.keys(allCoins).map((key, index) => {
        return (
          <Coin
            key={index}
            name={hasKey(allCoins, key) && allCoins[key]}
            acronym={key}
          />
        );
      })}
      {/* </div> */}
    </div>
  );
};

export default Coins;
