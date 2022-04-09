// Ionic Imports
import { IonContent, IonPage } from "@ionic/react";

// React Imports
import React, { useEffect } from "react";

// Component Imports
import Coins from "../../components/Coins/Coins";
import Header from "../../components/Header/Header";

// Styles Imports
import styles from "./Wallet.module.css";

// Redux Imports
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { updateBalance } from "../../store/Wallet/WalletActions";

const Wallet = () => {
  let walletAddress = useAppSelector((state) => state.wallet.address);
  let walletBalance = useAppSelector((state) => state.wallet.balance);
  let myCoins = useAppSelector((state) => state.wallet.coins);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateBalance());
  }, [dispatch, myCoins]);

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
