import { IonContent, IonPage } from "@ionic/react";
import React, { useEffect, useState } from "react";
import Coins from "../../components/Coins/Coins";
import Header from "../../components/Header/Header";
import styles from "./Marketplace.module.css";
import allCoins from "../../data/allCoins.json";
import axios from "axios";
import { backendLink } from "../../helper/BackendLink";
import { decodeError } from "../../helper/HelperFunctions";

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
