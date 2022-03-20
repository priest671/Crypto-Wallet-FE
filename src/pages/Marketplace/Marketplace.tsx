import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import Coins from "../../components/Coins/Coins";
import Header from "../../components/Header/Header";
import styles from "./Marketplace.module.css";

const Marketplace = () => {
  return (
    <IonPage id="main">
      <IonContent>
        <Header title="Marketplace" />
        <div className={styles["container"]}>
          <div className={styles["topBox"]}>
            <h3>
              Welcome to the <em>Marketplace</em>
            </h3>
            <p>Check out our most reasonable crypto prices</p>
          </div>
          <div className={styles["coinList"]}>
            <Coins />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Marketplace;
