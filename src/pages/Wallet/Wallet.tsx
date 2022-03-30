import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import Coins from "../../components/Coins/Coins";
import Header from "../../components/Header/Header";
import styles from "./Wallet.module.css";
import myCoins from "../../data/dummyCoins.json";
import { useAppSelector } from "../../store/hooks";

const Wallet = () => {
  let walletAddress = "0x08cb58736";
  let walletBalance = "10000";

  return (
    <IonPage id="main">
      <IonContent>
        <Header title="Wallet" />
        <div className={styles["container"]}>
          <div className={styles["top-box"]}>
            <h3>
              Your <em>Wallet</em>
            </h3>
            <p>Your Wallet Address: {walletAddress}</p>
          </div>

          <div className={styles["middle-box"]}>
            <h3>Balance: {walletBalance} PKR</h3>
          </div>

          <div className={styles["coin-list"]}>
            <Coins allCoins={myCoins} />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Wallet;
