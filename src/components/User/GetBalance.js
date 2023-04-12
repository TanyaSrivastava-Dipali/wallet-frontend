import React, { useState } from "react";
import axios from "axios";
import useInput from "../../hooks/use-input";

const GetBalance = () => {
  const isEmail = (value) => value.includes("@");
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);
  const [balance, setBalance] = useState([]);

  const submitHandler = async (event) => {
    event.preventDefault();
    // const response = await AxiosInstance(`api/user/getUser/${inputEmail}`);
    const response = await axios.get(
      `http://localhost:3000/api/user/getBalance/${emailValue}`,
      {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    const result = response.data.bal;
    console.log(result);
    const tokenBalance = [];
    for (const key in result) {
      tokenBalance.push({
        Token: result[key][0],
        Balance: result[key][1],
      });
    }
    setBalance(tokenBalance);
  };
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0">
        <div>
          <p className="text-2xl  text-black">
            Please enter user email to get balance.
          </p>
        </div>
        <div className="w-full px-6 py-5 mt-5 overflow-hidden bg-gray shadow-md sm:max-w-md sm:rounded-lg border border-black-200">
          <form onSubmit={submitHandler}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  value={emailValue}
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
                  className="block w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                {emailHasError && (
                  <p className="text-red-700">
                    Please enter a valid email address.
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-center items-center mt-5">
              <button
                disabled={emailHasError}
                type="submit"
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
              >
                Get Balance
              </button>
            </div>
          </form>
        </div>
        <div>
          {balance[0] && (
            <p>
              {balance.map((id) => (
                <ul className="mt-10 text-blue-900">
                  <li>
                    <b className="text-red-900">Token Name:</b> {id.Token}
                  </li>
                  <li>
                    <b className="text-red-900">Balance:</b> {id.Balance}
                  </li>
                </ul>
              ))}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetBalance;
