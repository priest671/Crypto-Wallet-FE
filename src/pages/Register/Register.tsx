import { IonContent, IonInput, IonItem, IonLabel, IonPage } from "@ionic/react";
import React from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/UI/Button/Button";
import styles from "./Register.module.css";

const Register = () => {
  const [name, setName] = React.useState<string>();
  const [phone, setPhone] = React.useState<string>();
  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [confirmPassword, setConfirmPassword] = React.useState<string>();

  const formSubmitHandler = (e: any) => {
    e.preventDefault();
    console.log(name, phone, email, password, confirmPassword);
  };

  return (
    <IonPage id="main">
      <IonContent>
        <Header title="Register" />
        <div className={styles["container"]}>
          <div className={styles["header"]}>
            <h3>Register Account</h3>
            <p>Get your own Wallet now !</p>
          </div>

          <form onSubmit={formSubmitHandler}>
            <div className={styles["item"]}>
              <IonItem>
                <IonLabel position="floating">Full Name</IonLabel>
                <IonInput
                  type="text"
                  value={name}
                  onIonChange={(e) => setName(e.detail.value!)}
                ></IonInput>
              </IonItem>
            </div>

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
                <IonLabel position="floating">Email</IonLabel>
                <IonInput
                  type="email"
                  value={email}
                  onIonChange={(e) => setEmail(e.detail.value!)}
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

            <div className={styles["item"]}>
              <IonItem>
                <IonLabel position="floating">Confirm Password</IonLabel>
                <IonInput
                  type="password"
                  value={confirmPassword}
                  onIonChange={(e) => setConfirmPassword(e.detail.value!)}
                ></IonInput>
              </IonItem>
            </div>

            <div className={styles["footer"]}>
              <Button className="primary">Register</Button>
            </div>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
