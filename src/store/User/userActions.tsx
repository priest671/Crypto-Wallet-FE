import axios from "axios";
import { userActions } from "./user";
import { backendLink } from "../../helper/BackendLink";

export const fetchUser = (userId: string, token: string) => {
  return async (dispatch: any) => {
    const sendRequest = async () => {
      const response = await axios.get(
        `${backendLink}/user/getUser/${userId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      return response;
    };

    try {
      const response = await sendRequest();
      dispatch(userActions.createUser(response.data.user));
    } catch (error) {
      console.log("Failed to fetch user data!");
    }
  };
};
