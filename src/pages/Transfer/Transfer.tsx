import { IonContent, IonInput, IonItem, IonLabel, IonPage } from "@ionic/react";
import React from "react";
import Header from "../../components/Header/Header";
import styles from "./Transfer.module.css";
import Button from "../../components/UI/Button/Button";

const Transfer = () => {
  const [walletAddress, setWalletAddress] = React.useState<string>();
  const [amount, setAmount] = React.useState<string>();
  const [currency, setCurrency] = React.useState<string>();

  const formSubmitHandler = (e: any) => {
    e.preventDefault();
    console.log(walletAddress, amount, currency);
  };

  return (
    <IonPage id="main">
      <IonContent>
        <Header title="Transfer" />
        <div className={styles["container"]}>
          <div className={styles["header"]}>
            <h3>Transfer Crypto Currency</h3>
            <p>Send amount from your Wallet</p>
          </div>

          <form onSubmit={formSubmitHandler}>
            <div className={styles["item"]}>
              <IonItem>
                <IonLabel position="floating">Wallet Address</IonLabel>
                <IonInput
                  type="text"
                  value={walletAddress}
                  onIonChange={(e) => setWalletAddress(e.detail.value!)}
                ></IonInput>
              </IonItem>
            </div>

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
              <Button className="primary">Transfer Crypto</Button>
            </div>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Transfer;
