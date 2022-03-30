import { IonContent, IonInput, IonItem, IonLabel, IonPage } from "@ionic/react";
import axios from "axios";
import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/UI/Button/Button";
import styles from "./Register.module.css";

const Register = () => {
  const [name, setName] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const [error, setError] = useState<string>();
  const [errorStatus, setErrorStatus] = useState<string>();

  const formSubmitHandler = (e: any) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/auth/register", {
        name,
        phoneNumber,
        email,
        password,
        confirmPassword,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        // console.log(typeof err.response.data);
        let errorMessage = JSON.stringify(err.response.data);
        errorMessage = errorMessage.split("Error: ")[1];
        errorMessage = errorMessage.split(".")[0];

        setError(errorMessage);
        setErrorStatus(err.response.status);
      });
  };

  return (
    <IonPage id="main">
      <IonContent>
        <Header title="Register" />
        <div className={styles["container"]}>
          <div className={styles["header"]}>
            <h3>
              <em>Register</em> Account
            </h3>
            <p>Get your own wallet now</p>
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
                  value={phoneNumber}
                  onIonChange={(e) => setPhoneNumber(e.detail.value!)}
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
              <Button className="primary" btnClass="small">
                Register
              </Button>
            </div>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
