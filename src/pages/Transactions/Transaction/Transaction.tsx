import React from "react";
import styles from "./Transaction.module.css";
import { MdCallReceived, MdOutlineCallMade } from "react-icons/md";

interface TransactionsProps {
  id: number;
  coin: string;
  quantity: string;
  date: string;
  type: string;
  terminal: string;
}

const Transaction = (props: TransactionsProps) => {
  let transactionType;

  if (props.type === "send") {
    transactionType = (
      <div className={`${styles["type-icon"]} ${styles["send"]}`}>
        <MdOutlineCallMade />
      </div>
    );
  } else {
    transactionType = (
      <div className={`${styles["type-icon"]} ${styles["receive"]}`}>
        <MdCallReceived />
      </div>
    );
  }

  return (
    <div className={styles["transaction-wrapper"]}>
      <div className={`${styles["item"]} ${styles["type"]}`}>
        {transactionType}
      </div>

      <div className={`${styles["item"]} ${styles["coin"]}`}>
        <div className={styles["coin-picture"]}>
          <img src={`images/${props.coin}.png`} alt="IMG" />
        </div>
        <p className={styles["coin-name"]}>{props.coin}</p>
      </div>

      <div className={`${styles["item"]} ${styles["quantity"]}`}>
        <p>{props.quantity}</p>
      </div>

      <div className={`${styles["item"]} ${styles["terminal"]}`}>
        <p>{props.terminal}</p>
      </div>
    </div>
  );
};

export default Transaction;
