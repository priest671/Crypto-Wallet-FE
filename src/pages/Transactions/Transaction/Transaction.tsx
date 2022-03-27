import React from "react";

interface TransactionsProps {
  id: number;
  coin: string;
  quantity: string;
  date: string;
  type: string;
  to: string;
  from: string;
}

const Transaction = (props: TransactionsProps) => {
  return (
    // <div className={styles["wrapper"]}>
    //   <div className={`${styles["item"]} ${styles["coin"]}`}>
    //     {/* <div className={styles["coin-picture"]}>
    //                 <img src={`images/${props.acronym}.png`} alt="IMG" />
    //             </div> */}
    //     <p className={styles["coin-name"]}>Amount</p>
    //   </div>
    //   <div className={`${styles["item"]} ${styles["quantity"]}`}>
    //     <p>to</p>
    //   </div>
    //   <div className={`${styles["item"]} ${styles["price"]}`}>
    //     <p>from</p>
    //   </div>
    // </div>
    <p>Transaction {props.id}</p>
  );
};

export default Transaction;
