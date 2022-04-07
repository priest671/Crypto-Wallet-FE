import axios from "axios";
import { walletActions } from "./Wallet";
import { backendLink } from "../../helper/BackendLink";
import { decodeError } from "../../helper/HelperFunctions";

export const getWalletAPI = (token: string) => {
  return async (dispatch: any) => {
    const sendRequest = async () => {
      return await axios.get(`${backendLink}/wallet/`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
    };

    try {
      const response = await sendRequest();
      dispatch(walletActions.initializeWallet(response.data.wallet));
    } catch (err: any) {
      let error = decodeError(err);
      throw error;
    }
  };
};

const getTotalBalance = async (coins: any) => {
  const sendRequest = async (acronym: string) => {
    return await axios.get(`https://api.coinbase.com/v2/prices/${acronym}-PKR/buy`);
  };

  let totalBalance = 0;
  coins.forEach(async (coin: any) => {
    if (coin.coin.acronym !== "PKR") {
      const response = await sendRequest(coin.coin.acronym);
        let price = response.data.data.amount * coin.quantity;
        price = parseFloat(price.toFixed(2));
        totalBalance += price;
        console.log("not PKR", totalBalance);
      
    } else if (coin.coin.acronym === "PKR") {
      totalBalance += parseFloat(coin.quantity);
      console.log("PKR", totalBalance);
    }
  });

  return totalBalance;
}

export const updateBalance = (coins: any) => {
  return async (dispatch: any) => {
    try {
      //TODO: make this async

      let totalBalance: any;
      totalBalance = await getTotalBalance(coins);


     console.log("dispatching...");
      dispatch(walletActions.setBalance(totalBalance));
    } catch (err: any) {
      let error = decodeError(err);
      throw error;
    }
  };
};
