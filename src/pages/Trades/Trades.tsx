import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import Header from "../../components/Header/Header";

const Trades = () => {
  return (
    <IonPage id="main">
      <IonContent>
        <Header title="Trades" />
        <div className="container">
          <h1>Buy or Sell Crypto</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Trades;
