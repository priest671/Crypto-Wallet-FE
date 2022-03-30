import axios from "axios";
import { authActions } from "./authentication";
import {} from "../User/user";
import { backendLink } from "../../helper/BackendLink";

interface loginDataType {
  phoneNumber: string;
  password: string;
}

export const sendLoginData = (loginData: loginDataType) => {
  return async (dispatch: any) => {
    const sendRequest = async () => {
      return await axios.post(`${backendLink}/auth/login`, loginData);
    };

    try {
      const response = await sendRequest();

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.user._id);
      return response;
    } catch (err: any) {
      // Validation Check.
      if (err.response.status === 422) {
        dispatch(authActions.logout());

        let errorMessage = JSON.stringify(err.response.data);
        errorMessage = errorMessage.split("Error: ")[1];
        errorMessage = errorMessage.split("<br>")[0];

        const error = new Error(errorMessage);
        error.statusCode = err.response.status;
        error.message = errorMessage;
        throw error;
      }

      // Authentication Check.
      if (err.response.status !== 200 && err.response.status !== 201) {
        dispatch(authActions.logout());

        let errorMessage = JSON.stringify(err.response.data);
        errorMessage = errorMessage.split("Error: ")[1];
        errorMessage = errorMessage.split("<br>")[0];

        const error = new Error(errorMessage);
        error.statusCode = err.response.status;
        error.message = errorMessage;
        throw error;
      }
    }
  };
};

interface registerationDataType {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const sendRegisterationData = (
  registerationData: registerationDataType
) => {
  return async (dispatch: any) => {
    const sendRequest = async () => {
      axios.post(`${backendLink}/auth/signup`, registerationData);
    };

    try {
      await sendRequest();
      //show success message
    } catch (err: any) {
      if (err.response.status === 422) {
        console.log("Validation Failed!");
        //useRef here to display Error
      }

      if (err.response.status !== 200 && err.response.status !== 201) {
        console.log("Creating a user failed!");
        //useRef here to display Error
      }
    }
  };
};

export const logout = () => {
  return async (dispatch: any) => {
    dispatch(authActions.logout());
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
  };
};
