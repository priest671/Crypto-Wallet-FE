import { IonContent, IonInput, IonItem, IonLabel, IonPage } from "@ionic/react";
import React, { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { loginAPI } from "../../store/Authentication/AuthenticationActions";
import { authActions } from "../../store/Authentication/Authentication";

import Header from "../../components/Header/Header";
import Button from "../../components/UI/Button/Button";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { getUserAPI } from "../../store/User/UserActions";
import { getWalletAPI } from "../../store/Wallet/WalletActions";

const Login = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useAppDispatch();

  const formSubmitHandler = async (e: any) => {
    e.preventDefault();

    try {
      let response = await dispatch(
        loginAPI({
          phoneNumber,
          password,
        })
      );
      if (response) {
        try {
          dispatch(
            authActions.login({
              isAuth: true,
              token: response.data.token,
              userId: response.data.user._id,
            })
          );

          dispatch(getUserAPI(response.data.token));
          dispatch(getWalletAPI(response.data.token));

          navigate("/");
        } catch (err: any) {
          console.log(err.statusCode);
          console.log(err.message);
        }
      }
    } catch (err: any) {
      console.log(err.statusCode);
      console.log(err.message);
    }
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
                  value={phoneNumber}
                  onIonChange={(e) => setPhoneNumber(e.detail.value!)}></IonInput>
              </IonItem>
            </div>

            <div className={styles["item"]}>
              <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput
                  type="password"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}></IonInput>
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
