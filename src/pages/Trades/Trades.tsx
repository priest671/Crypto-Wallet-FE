import {
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import React from "react";
import Header from "../../components/Header/Header";
import styles from "./Trades.module.css";
import Button from "../../components/UI/Button/Button";
import { hasKey } from "../../helper/HelperFunctions";
import allCoins from "../../data/allCoins.json";

const Trades = () => {
  const [buyCurrency, setBuyCurrency] = React.useState<string>();
  const [buyAmount, setBuyAmount] = React.useState<string>();

  const [sellCurrency, setSellCurrency] = React.useState<string>();
  const [sellAmount, setSellAmount] = React.useState<string>();

  const buyFormSubmitHandler = (e: any) => {
    e.preventDefault();
    console.log(buyCurrency, buyAmount);
  };

  const sellFormSubmitHandler = (e: any) => {
    e.preventDefault();
    console.log(sellCurrency, sellAmount);
  };

  return (
    <IonPage id="main">
      <IonContent>
        <Header title="Trades" />
        <div className={styles["container"]}>
          <div className={styles["header"]}>
            <h3>
              <em>Buy</em> Crypto
            </h3>
            <p>At the most reasonable price</p>
          </div>

          <form onSubmit={buyFormSubmitHandler}>
            <div className={styles["item"]}>
              <IonItem>
                <IonLabel>Currency</IonLabel>
                <IonSelect
                  value={buyCurrency}
                  placeholder="Select Currency"
                  onIonChange={(e) => setBuyCurrency(e.detail.value)}
                >
                  {Object.keys(allCoins).map((key, index) => {
                    return (
                      <IonSelectOption key={index} value={key}>
                        {hasKey(allCoins, key) && allCoins[key]}
                      </IonSelectOption>
                    );
                  })}
                </IonSelect>
              </IonItem>
            </div>

            <div className={styles["item"]}>
              <IonItem>
                <IonLabel position="floating">Buy Amount (PKR)</IonLabel>
                <IonInput
                  type="number"
                  value={buyAmount}
                  onIonChange={(e) => setBuyAmount(e.detail.value!)}
                ></IonInput>
              </IonItem>
            </div>

            <div className={styles["footer"]}>
              <Button className="primary" btnClass="small">
                Buy
              </Button>
            </div>
          </form>
          <hr />

          <div className={styles["header"]}>
            <h3>
              <em>Sell</em> Crypto
            </h3>
            <p>At the most profitable price</p>
          </div>

          <form onSubmit={sellFormSubmitHandler}>
            <div className={styles["item"]}>
              <IonItem>
                <IonLabel>Currency</IonLabel>
                <IonSelect
                  value={sellCurrency}
                  placeholder="Select Currency"
                  onIonChange={(e) => setSellCurrency(e.detail.value)}
                >
                  {Object.keys(allCoins).map((key, index) => {
                    return (
                      <IonSelectOption key={index} value={key}>
                        {hasKey(allCoins, key) && allCoins[key]}
                      </IonSelectOption>
                    );
                  })}
                </IonSelect>
              </IonItem>
            </div>

            <div className={styles["item"]}>
              <IonItem>
                <IonLabel position="floating">Sell Amount (PKR)</IonLabel>
                <IonInput
                  type="number"
                  value={sellAmount}
                  onIonChange={(e) => setSellAmount(e.detail.value!)}
                ></IonInput>
              </IonItem>
            </div>

            <div className={styles["footer"]}>
              <Button className="primary" btnClass="small">
                Sell
              </Button>
            </div>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Trades;
