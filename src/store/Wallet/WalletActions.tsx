import axios from "axios";
import { walletActions } from "./Wallet";
import { backendLink } from "../../helper/BackendLink";
import { decodeError } from "../../helper/HelperFunctions";
import { useAppSelector } from "../hooks";

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

export const getPrice = async (acronym: string) => {
  const sendRequest = async (acronym: string) => {
    return await axios.get(`https://api.coinbase.com/v2/prices/${acronym}-PKR/buy`);
  };

  try {
    const response = await sendRequest(acronym);
    return response.data.data.amount;
  } catch (err: any) {
    console.log(err);
  }
};

export const updateBalance = () => {
  return async (dispatch: any) => {
    try {
      dispatch(walletActions.setBalance(0));
      let myCoins = useAppSelector((state) => state.wallet.coins);
      myCoins.forEach(async (coin: any, coinIndex: any) => {
        let quantity = coin.quantity;
        let price;
        if (coin.coin.acronym !== "PKR") {
          price = await getPrice(coin.coin.acronym);
          price = price * quantity;
        } else {
          price = parseFloat(quantity);
        }
        price = parseFloat(price.toFixed(2));
        dispatch(walletActions.appendBalance(price));
      });
    } catch (err: any) {
      console.log(err);
    }
  };
};

export const resetWallet = () => {
  return async (dispatch: any) => {
    dispatch(walletActions.resetWallet());
  };
};
