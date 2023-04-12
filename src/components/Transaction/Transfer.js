import React, { useState } from "react";
import useInput from "../../hooks/use-input";
const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const Transfer = () => {
  const [tokenAddress, setTokenAddress] = useState(
    "0xFca8b74A353521597a5aAb14259d7E3f9b6148dE"
  );
  const [isLoading, setIsLoading] = useState(false);
  const {
    value: amountValue,
    isValid: amountIsValid,
    hasError: amountHasError,
    valueChangeHandler: amountChangeHandler,
    inputBlurHandler: amountBlurHandler,
    reset: resetAmount,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  let formIsValid = false;

  if (amountIsValid && emailIsValid) {
    formIsValid = true;
  }
  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    let response = await fetch("/api/transaction/transfer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tokenAddress: tokenAddress,
        recepientEmail: emailValue,
        amountToTransfer: amountValue,
      }),
    });
    console.log(await response.json());
    // const result = response.data.user;
    // console.log(result);
    setIsLoading(false);
    if (response.status === 200) {
      alert("Transfer Successfully and sent transaction details to mail");
    } else {
      alert("Something Went Wrong, Try again");
    }

    resetAmount();
    resetEmail();
  };
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6  sm:pt-0 sm:justify-center  ">
        <div>
          <p className="text-2xl  text-black">
            Please enter details to transfer.
          </p>
        </div>
        <div className="w-full px-6 py-5 mt-5 overflow-hidden bg-gray shadow-md sm:max-w-md sm:rounded-lg border border-black-200">
          <form onSubmit={submitHandler}>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Token
              </label>
              <div className="flex flex-col items-start">
                <select
                  value={tokenAddress}
                  onChange={(e) => {
                    setTokenAddress(e.target.value);
                  }}
                  className="block w-full mt-2 border-gray-300 rounded-md shadow-sm bg-white focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option value="0xFca8b74A353521597a5aAb14259d7E3f9b6148dE">
                    VNC
                  </option>
                  <option value="0x9EB9510F15c8A43Db179B32b8EDb443411ccCD1d">
                    $
                  </option>
                  <option value="0xD0e7F2efEa724e2a0Fc1d592a7Fb5B6243918497">
                    USD
                  </option>
                </select>
              </div>
            </div>
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
                  name="recepientEmail"
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
            <div>
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Amount
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="number"
                  name="amountToTransfer"
                  value={amountValue}
                  onChange={amountChangeHandler}
                  onBlur={amountBlurHandler}
                  className="block w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                {amountHasError && (
                  <p className="text-red-700">Please enter a valid amount.</p>
                )}
              </div>
            </div>
            <div className="flex justify-center items-center mt-5">
              <button
                disabled={!formIsValid}
                type="submit"
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
              >
                Transfer
              </button>
            </div>
          </form>
        </div>
        {isLoading && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default Transfer;
