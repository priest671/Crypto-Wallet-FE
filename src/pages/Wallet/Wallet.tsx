// Ionic Imports
import { IonContent, IonPage } from "@ionic/react";

// React Imports
import React, { useEffect } from "react";

// Component Imports
import Coins from "../../components/Coins/Coins";
import Header from "../../components/Header/Header";
import PieChart from "../../components/PieChart/Pie";

// Styles Imports
import styles from "./Wallet.module.css";

// Redux Imports
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { updateBalance } from "../../store/Wallet/WalletActions";

const Wallet = () => {
  let walletAddress = useAppSelector((state) => state.wallet.address);
  let walletBalance = useAppSelector((state) => state.wallet.balance);
  let myCoins = useAppSelector((state) => state.wallet.coins);
  let coinPrices = useAppSelector((state) => state.wallet.prices);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateBalance(myCoins));
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
            <p>
              Balance (RS): <span>{walletBalance}</span>
            </p>
          </div>

          <div className={styles["pie-chart"]}>
            <PieChart data={coinPrices} />
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
