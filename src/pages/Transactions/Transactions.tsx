// Ionic Imports
import { IonContent, IonPage } from "@ionic/react";

// React Imports
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// Redux Imports

// Component Imports
import Header from "../../components/Header/Header";
import { useAppSelector } from "../../store/hooks";
import { getTransactionsAPI } from "../../store/User/UserActions";
import Transaction from "./Transaction/Transaction";

// Styles / Icons Imports
import styles from "./Transactions.module.css";

const Transactions = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const transactions = useAppSelector((state) => state.user.transactions);
  const phoneNumber = useAppSelector((state) => state.user.phoneNumber);

  let allTransactions;

  useEffect(() => {
    if (!token) {
      return;
    }
    dispatch(getTransactionsAPI(token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (transactions) {
    allTransactions = transactions.map((transaction: any) => (
      <Transaction
        key={transaction._id}
        owner={transaction.owner}
        coin={transaction.coin}
        quantity={transaction.quantity}
        type={transaction.type}
        terminal={transaction.terminal}
        phoneNumber={phoneNumber}
      />
    ));
  }

  return (
    <IonPage id="main">
      <IonContent>
        <Header title="Transactions" />
        <div className={styles["container"]}>
          <div className={styles["top-box"]}>
            <h3>
              Your <em>Transactions</em>
            </h3>
            <p>See yout transaction history</p>
          </div>
          <div className={styles["transactions-list"]}>
            <div className={styles["grid-header"]}>
              <div className={styles["type"]}>
                <p className={styles["transaction-heading"]}>Type</p>
              </div>

              <div className={styles["coin"]}>
                <p className={styles["transaction-heading"]}>Coin</p>
              </div>

              <div className={styles["quantity"]}>
                <p className={styles["transaction-heading"]}>QTY</p>
              </div>

              <div className={styles["terminal"]}>
                <p className={styles["transaction-heading"]}>To / From</p>
              </div>
            </div>

            {allTransactions}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Transactions;
