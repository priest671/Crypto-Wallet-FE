import React from "react";
import { useLocation } from "react-router-dom";

const CoinData = () => {
  const location = useLocation();
  const { state } = location;
  const locationState: any = state;
  let acronym: any;

  if (locationState) {
    acronym = locationState.acronym;
  }

  return <div>CoinData {acronym}</div>;
};

export default CoinData;
