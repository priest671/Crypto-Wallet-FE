import { IonContent, IonInput, IonItem, IonLabel, IonPage } from "@ionic/react";
import React from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/UI/Button/Button";
import styles from "./Login.module.css";

const Login = () => {
  const [phone, setPhone] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();

  const formSubmitHandler = (e: any) => {
    e.preventDefault();
    console.log(phone, password);
  };

  return (
    <IonPage id="main">
      <IonContent>
        <Header title="Login" />
        <div className={styles["container"]}>
          <div className={styles["header"]}>
            <h3>
              <em>Login</em> Your Account
            </h3>
            <p>To start using Pak Wallet</p>
          </div>

          <form onSubmit={formSubmitHandler}>
            <div className={styles["item"]}>
              <IonItem>
                <IonLabel position="floating">Phone Number</IonLabel>
                <IonInput
                  type="number"
                  value={phone}
                  onIonChange={(e) => setPhone(e.detail.value!)}
                ></IonInput>
              </IonItem>
            </div>

            <div className={styles["item"]}>
              <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput
                  type="password"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                ></IonInput>
              </IonItem>
            </div>

            <div className={styles["footer"]}>
              <Button className="primary" btnClass="small">
                Login
              </Button>
            </div>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
