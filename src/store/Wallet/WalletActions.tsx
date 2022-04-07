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

export const updateBalance = (coins: any) => {
  return async (dispatch: any) => {
    try {
      //TODO: make this async
      let totalBalance = 0;
      coins.forEach((coin: any) => {
        if (coin.coin.acronym !== "PKR") {
          const url = `https://api.coinbase.com/v2/prices/${coin.coin.acronym}-PKR/buy`;
          axios.get(url).then((res) => {
            let price = res.data.data.amount * coin.quantity;
            price = parseFloat(price.toFixed(2));
            totalBalance += price;
            console.log("not PKR", totalBalance);
          });
        } else if (coin.coin.acronym === "PKR") {
          totalBalance += parseFloat(coin.quantity);
          console.log("PKR", totalBalance);
        }
      });

      dispatch(walletActions.setBalance(totalBalance));
    } catch (err: any) {
      let error = decodeError(err);
      throw error;
    }
  };
};
