import axios from "axios";
import { userActions } from "./user";
import { backendLink } from "../../helper/BackendLink";

export const getUserAPI = (userId: string, token: string) => {
  return async (dispatch: any) => {
    const sendRequest = async () => {
      return await axios.get(`${backendLink}/user/${userId}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
    };

    try {
      const response = await sendRequest();
      dispatch(userActions.createUser(response.data.user));
    } catch (err: any) {
      let errorMessage = JSON.stringify(err.response.data);
      errorMessage = errorMessage.split("Error: ")[1];
      errorMessage = errorMessage.split("<br>")[0];

      const error = new Error(errorMessage);
      error.statusCode = err.response.status;
      error.message = errorMessage;
      throw error;
    }
  };
};
