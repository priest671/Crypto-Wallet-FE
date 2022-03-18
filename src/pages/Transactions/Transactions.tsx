import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import Header from "../../components/Header/Header";

const Transactions = () => {
  return (
    <IonPage id="main">
      <IonContent>
        <Header title="Transactions" />
        <div className="container">
          <h1>See Your Previous Transactions</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Transactions;
