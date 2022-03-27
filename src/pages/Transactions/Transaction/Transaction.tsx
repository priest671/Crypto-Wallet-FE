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
  return <p>Transaction {props.id}</p>;
};

export default Transaction;
