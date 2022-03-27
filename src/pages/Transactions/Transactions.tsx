import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import Header from "../../components/Header/Header";
import Transaction from "./Transaction/Transaction";
import styles from "./Transactions.module.css";

let allTransactions = [
  {
    id: 1,
    coin: "BTC",
    quantity: "0.0001",
    date: "2020-01-01",
    type: "send",
    to: "0x08cb58736",
    from: "0x08cb58736",
  },
  {
    id: 2,
    coin: "ETH",
    quantity: "0.01",
    date: "2020-01-01",
    type: "recieve",
    to: "0x08cb58736",
    from: "0x08cb58736",
  },

  {
    id: 3,
    coin: "SOL",
    quantity: "30.00",
    date: "2020-01-01",
    type: "send",
    to: "0x08cb58736",
    from: "0x08cb58736",
  },

  {
    id: 4,
    coin: "ATOM",
    quantity: "50.00",
    date: "2020-01-01",
    type: "recieve",
    to: "0x08cb58736",
    from: "0x08cb58736",
  },

  {
    id: 5,
    coin: "USDT",
    quantity: "100.00",
    date: "2020-01-01",
    type: "send",
    to: "0x08cb58736",
    from: "0x08cb58736",
  },
  {
    id: 6,
    coin: "LTC",
    quantity: "1.00",
    date: "2020-01-01",
    type: "recieve",
    to: "0x08cb58736",
    from: "0x08cb58736",
  },
];

const Transactions = () => {
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
                <p className={styles["transaction-heading"]}>Currency</p>
              </div>

              <div className={styles["quantity"]}>
                <p className={styles["transaction-heading"]}>QTY</p>
              </div>

              <div className={styles["destination"]}>
                <p className={styles["transaction-heading"]}>Destination</p>
              </div>
            </div>

            {allTransactions.map((transaction) => (
              <Transaction
                key={transaction.id}
                id={transaction.id}
                coin={transaction.coin}
                quantity={transaction.quantity}
                date={transaction.date}
                type={transaction.type}
                to={transaction.to}
                from={transaction.from}
              />
            ))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Transactions;
