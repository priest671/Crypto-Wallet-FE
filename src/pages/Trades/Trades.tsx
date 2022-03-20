import { IonContent, IonInput, IonItem, IonLabel, IonPage } from "@ionic/react";
import React from "react";
import Header from "../../components/Header/Header";
import styles from "./Trades.module.css";
import Button from "../../components/UI/Button/Button";

const Trades = () => {
  const [currency, setCurrency] = React.useState<string>();
  const [amount, setAmount] = React.useState<string>();

  const buyFormSubmitHandler = (e: any) => {
    e.preventDefault();
    console.log(amount, currency);
  };

  const sellFormSubmitHandler = (e: any) => {
    e.preventDefault();
    console.log(currency, amount);
  };

  return (
    <IonPage id="main">
      <IonContent>
        <Header title="Trades" />
        <div className={styles["container"]}>
          <div className={styles["header"]}>
            <h3>Buy Crypto</h3>
            <p>At the most reasonable price</p>
          </div>

          <form onSubmit={buyFormSubmitHandler}>
            <div className={styles["item"]}>
              <IonItem>
                <IonLabel position="floating">Amount</IonLabel>
                <IonInput
                  type="number"
                  value={amount}
                  onIonChange={(e) => setAmount(e.detail.value!)}
                ></IonInput>
              </IonItem>
            </div>

            <div className={styles["footer"]}>
              <Button className="primary">Buy</Button>
            </div>
          </form>

          <div className={styles["header"]}>
            <h3>Sell Crypto</h3>
            <p>At the most profitable price</p>
          </div>

          <form onSubmit={sellFormSubmitHandler}>
            <div className={styles["item"]}>
              <IonItem>
                <IonLabel position="floating">Amount</IonLabel>
                <IonInput
                  type="number"
                  value={amount}
                  onIonChange={(e) => setAmount(e.detail.value!)}
                ></IonInput>
              </IonItem>
            </div>

            <div className={styles["footer"]}>
              <Button className="primary">Sell</Button>
            </div>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Trades;
