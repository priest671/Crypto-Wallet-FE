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

// const getPrice = async (acronym: string) => {
//   const sendRequest = async (acronym: string) => {
//     return await axios.get(`https://api.coinbase.com/v2/prices/${acronym}-PKR/buy`);
//   };

//   try {
//     await sendRequest(acronym).then((res) => {
//       // console.log(res.data.data.amount);
//       return res.data.data.amount;
//     });
//     // let price = response.data.data.amount * coin.quantity;
//     // price = parseFloat(price.toFixed(2));
//     // totalBalance += price;
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const updateBalance = (coins: any) => {
//   return async (dispatch: any) => {
//     try {
//       coins.forEach(async (coin: any) => {});
//       //TODO: make this async

//       let totalBalance = 0;
//       for (let coin of coins) {
//         let quantity = coin.quantity;

//         if (coin.coin.acronym !== "PKR") {
//           let price: any = await getPrice(coin.acronym).then(

//             price = Number(price.toFixed(2));
//             totalBalance += price * quantity;

//           );
//         }

//         let price = await getPrice(coin.coin.acronym).then((res) => {
//           console.log(price);
//           console.log("quantity", quantity);
//         });
//       }
//       await getPrice(coins).then((res) => {
//         console.log("res 2:", res);
//       });

//       console.log("dispatching...");
//       dispatch(walletActions.setBalance(totalBalance));
//     } catch (err: any) {
//       let error = decodeError(err);
//       throw error;
//     }
//   };
// };

export const updateBalance = (coins: any) => {
  return async (dispatch: any) => {
    try {
      console.log("update Balance...");
      console.log(coins);
      // dispatch(walletActions.setBalance(totalBalance));
    } catch (err: any) {
      let error = decodeError(err);
      throw error;
    }
  };
};
