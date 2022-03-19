import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import Header from "../../components/Header/Header";

const Transfer = () => {
  return (
    <IonPage id="main">
      <IonContent>
        <Header title="Transfer" />
        <div className="container">
          <h1>Send Crypto to someone else</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Transfer;
