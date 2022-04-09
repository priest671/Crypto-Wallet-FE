// Ionic Imports
import { IonContent, IonPage } from "@ionic/react";

// React Imports
import React, { useEffect, useState } from "react";

// Helper Imports
import axios from "axios";
import { backendLink } from "../../helper/BackendLink";
import { decodeError } from "../../helper/HelperFunctions";

// Component Imports
import Coins from "../../components/Coins/Coins";
import Header from "../../components/Header/Header";

// Styles / Icons Imports
import styles from "./Marketplace.module.css";

const Marketplace = () => {
  let token = localStorage.getItem("token");
  const [coins, setCoins] = useState([]);

  const sendRequest = async () => {
    return await axios.get(`${backendLink}/coin`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  };

  const getCoins = async () => {
    try {
      const response = await sendRequest();
      let filteredCoins = response.data.coins.filter((coin: any) => coin.acronym !== "PKR");
      setCoins(filteredCoins);
    } catch (err) {
      let error = decodeError(err);
      throw error;
    }
  };

  useEffect(() => {
    getCoins();
  }, []);

  return (
    <IonPage id="main">
      <IonContent>
        <Header title="Marketplace" />
        <div className={styles["container"]}>
          <div className={styles["top-box"]}>
            <h3>
              Welcome to the <em>Marketplace</em>
            </h3>
            <p>Check out our latest crypto prices</p>
          </div>
          <div className={styles["coin-list"]}>
            <Coins allCoins={coins} />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Marketplace;
