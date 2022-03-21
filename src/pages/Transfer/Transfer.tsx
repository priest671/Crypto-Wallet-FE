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
import styles from "./Transfer.module.css";
import Button from "../../components/UI/Button/Button";
import { hasKey } from "../../helper/HelperFunctions";
import allCoins from "../../data/allCoins.json";

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
            <h3>
              <em>Transfer</em> Crypto
            </h3>
            <p>Send amount from your wallet</p>
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
                <IonLabel>Currency</IonLabel>
                <IonSelect
                  value={currency}
                  placeholder="Select Currency"
                  onIonChange={(e) => setCurrency(e.detail.value)}
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
                <IonLabel position="floating">Send Amount (PKR)</IonLabel>
                <IonInput
                  type="number"
                  value={amount}
                  onIonChange={(e) => setAmount(e.detail.value!)}
                ></IonInput>
              </IonItem>
            </div>

            <div className={styles["footer"]}>
              <Button className="primary" btnClass="small">
                Send
              </Button>
            </div>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Transfer;
