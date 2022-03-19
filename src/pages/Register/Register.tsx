import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import Header from "../../components/Header/Header";

const Register = () => {
  return (
    <IonPage id="main">
      <IonContent>
        <Header title="Register" />
        <div className="container">
          <h1>Register</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
