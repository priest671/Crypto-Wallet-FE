import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import Header from "../../components/Header/Header";

const Marketplace = () => {
  return (
    <IonPage id="main">
      <IonContent>
        <Header title="Marketplace" />
        <div className="container">
          <h1>Current Value of Cryptos</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Marketplace;
