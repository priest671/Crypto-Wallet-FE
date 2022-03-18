import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import Header from "../../components/Header/Header";

const UserSetting = () => {
  return (
    <IonPage id="main">
      <IonContent>
        <Header title="Settings" />
        <div className="container">
          <h1>Change Your Settings</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default UserSetting;
