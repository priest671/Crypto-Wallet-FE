import { IonContent, IonPage } from "@ionic/react";
import React from "react";

import Header from "../../components/Header/Header";

const UserHome = () => {
  console.log(".....User Logged In.....");
  return (
    <IonPage id="main">
      <IonContent>
        <Header title="Home" />
        <div className="container">
          <h1>User Home</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default UserHome;
