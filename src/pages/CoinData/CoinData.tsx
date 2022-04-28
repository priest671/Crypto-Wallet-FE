import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useAppSelector } from "../../store/hooks";
import styles from "./CoinData.module.css";

const CoinData = () => {
  const location = useLocation();
  const { state } = location;
  const locationState: any = state;
  let coinInfo: any;

  let exchangeRate = useAppSelector((state) => state.coin.exchangeRate);

  if (locationState) {
    coinInfo = locationState.coinInfo;
  }

  console.log(coinInfo);

  return (
    <IonPage id="main">
      <IonContent>
        <Header title={coinInfo.name} />
        <div className={styles["container"]}>
          <div className={styles["top-box"]}>
            <h3>
              Welcome to the <em>{coinInfo.name}</em>
            </h3>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CoinData;
