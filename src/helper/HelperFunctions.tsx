export function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
  return key in obj;
}

export const decodeError = (err: any) => {
  let errorMessage = JSON.stringify(err.response.data);
  errorMessage = errorMessage.split("Error: ")[1];
  errorMessage = errorMessage.split("<br>")[0];
  const error = new Error(errorMessage);
  error.statusCode = err.response.status;
  error.message = errorMessage;
  return error;
};

export const addStrings = (arg0: string, arg1: string) => {
  let total = parseFloat(arg0) + parseFloat(arg1);
  return total.toString();
};

export const subtractStrings = (arg0: string, arg1: string) => {
  let total = parseFloat(arg0) - parseFloat(arg1);
  return total.toString();
};
