import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import Header from "../../components/Header/Header";

const Wallet = () => {
  return (
    <IonPage id="main">
      <IonContent>
        <Header title="Wallet" />
        <div className="container">
          <h1>Your Wallet</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Wallet;
