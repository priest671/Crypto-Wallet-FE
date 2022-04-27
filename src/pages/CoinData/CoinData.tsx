import React from "react";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

const CoinData = () => {
  const location = useLocation();
  const { state } = location;
  const locationState: any = state;
  let acronym: any;
  let uuid: any;

  let exchangeRate = useAppSelector((state) => state.coin.exchangeRate);

  if (locationState) {
    acronym = locationState.acronym;
    uuid = locationState.uuid;
  }

  return (
    <div>
      CoinData {acronym} and your very own {uuid}
      <h3>Converting at {exchangeRate}</h3>
    </div>
  );
};

export default CoinData;
