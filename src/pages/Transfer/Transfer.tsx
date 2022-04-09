// Ionic Imports
import {
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";

// React Imports
import React from "react";

// Redux Imports

// Component Imports
import Header from "../../components/Header/Header";
import Button from "../../components/UI/Button/Button";

// Styles Imports
import styles from "./Transfer.module.css";

//TODO: To be removed
import { hasKey } from "../../helper/HelperFunctions";
import myCoins from "../../data/dummyCoins.json";

const Transfer = () => {
  const [walletAddress, setWalletAddress] = React.useState<string>();
  const [amount, setAmount] = React.useState<string>();
  const [currency, setCurrency] = React.useState<string>();

  const options = Object.keys(myCoins).map((key, index) => {
    if (hasKey(myCoins, key)) {
      return (
        <IonSelectOption key={index} value={myCoins[key].acronym}>
          {myCoins[key].name}
        </IonSelectOption>
      );
    } else {
      return null;
    }
  });

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
                  onIonChange={(e) => setWalletAddress(e.detail.value!)}></IonInput>
              </IonItem>
            </div>

            <div className={styles["item"]}>
              <IonItem>
                <IonLabel>Currency</IonLabel>
                <IonSelect
                  value={currency}
                  placeholder="Select Currency"
                  onIonChange={(e) => setCurrency(e.detail.value)}>
                  {options}
                </IonSelect>
              </IonItem>
            </div>

            <div className={styles["item"]}>
              <IonItem>
                <IonLabel position="floating">Send Amount (PKR)</IonLabel>
                <IonInput
                  type="number"
                  value={amount}
                  onIonChange={(e) => setAmount(e.detail.value!)}></IonInput>
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
