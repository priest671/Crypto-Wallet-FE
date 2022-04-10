import axios from "axios";
import { backendLink } from "../../helper/BackendLink";
import { decodeError } from "../../helper/HelperFunctions";

export const createCoinAPI = (token: string, coinName: string, coinAcroynm: string) => {
  return async (dispatch: any) => {
    const sendRequest = async () => {
      return await axios.post(
        `${backendLink}/coin/`,
        {
          name: coinName,
          acronym: coinAcroynm,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
    };
    try {
      const response = await sendRequest();
      console.log(response);
    } catch (err: any) {
      let error = decodeError(err);
      throw error;
    }
  };
};

export const updateCoinAPI = (token: string, coinName: string, coinAcroynm: string) => {
  return async (dispatch: any) => {
    const sendRequest = async () => {
      return await axios.put(
        `${backendLink}/coin/`,
        {
          name: coinName,
          acronym: coinAcroynm,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
    };
    try {
      const response = await sendRequest();
      console.log(response);
    } catch (err: any) {
      let error = decodeError(err);
      throw error;
    }
  };
};

export const deleteCoinAPI = (token: string, coin: string) => {
  return async (dispatch: any) => {
    const sendRequest = async () => {
      return await axios.delete(`${backendLink}/coin/${coin}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
    };
    try {
      const response = await sendRequest();
      console.log(response);
    } catch (err: any) {
      let error = decodeError(err);
      throw error;
    }
  };
};

export const getCoinsAPI = (token: string) => {
  return async (dispatch: any) => {
    const sendRequest = async () => {
      return await axios.get(`${backendLink}/coin`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
    };
    try {
      const response = await sendRequest();
      let filteredCoins = response.data.coins.filter((coin: any) => coin.acronym !== "PKR");
      return filteredCoins;
    } catch (err: any) {
      let error = decodeError(err);
      throw error;
    }
  };
};
