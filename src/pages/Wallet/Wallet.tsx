import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import Coins from "../../components/Coins/Coins";
import Header from "../../components/Header/Header";
import styles from "./Wallet.module.css";
import myCoins from "../../data/dummyCoins.json";

const Wallet = () => {
  let walletAddress = "0x08cb58736";
  let walletBalance = "130000";

  return (
    <IonPage id="main">
      <IonContent>
        <Header title="Wallet" />
        <div className={styles["container"]}>
          <div className={styles["topBox"]}>
            <h3>
              Your <em>Wallet</em>
            </h3>
            <p>Your Wallet Address: {walletAddress}</p>
          </div>

          <div className={styles["middleBox"]}>
            <h3>Balance: {walletBalance} PKR</h3>
          </div>

          <div className={styles["coinList"]}>
            <Coins allCoins={myCoins} />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Wallet;
