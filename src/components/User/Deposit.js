import React, { useState } from "react";
import useInput from "../../hooks/use-input";
import AxiosInstance from "../../utils/axiosInstance";
const isNotEmpty = (value) => value.trim() !== '';

const Deposit = () => {
  const {
    value: addressValue,
    isValid: addressIsValid,
    hasError: addressHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddress,
  } = useInput(isNotEmpty);

const {
    value: amountValue,
    isValid: amountIsValid,
    hasError: amountHasError,
    valueChangeHandler: amountChangeHandler,
    inputBlurHandler: amountBlurHandler,
    reset: resetAmount,
  } = useInput(isNotEmpty);


  let formIsValid = false;

  if (addressIsValid && amountIsValid  ) {
    formIsValid = true;
  }
  const submitHandler = async (event) => {
    event.preventDefault();
    let response = await fetch("/api/user/deposit",  {method: 'POST',
    headers: {'Content-Type': 'application/json'},body:JSON.stringify({
        tokenAddress: addressValue,
        amount: amountValue
  })});
  
  console.log(response);
    // const result = response.data.user;
    // console.log(result);
    if (response.status === 200) {
        alert("amount deposited Successfully");
     } else {
       alert("Something Went Wrong, Try again");
     }
   
     resetAddress();
     resetAmount();
  };
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6  sm:pt-0 bg-gray-100">
        <div>
          <p className="text-2xl  text-black">
            Please enter details to deposit.
          </p>
        </div>
        <div className="w-full px-6 py-5 mt-5 overflow-hidden bg-gray shadow-md sm:max-w-md sm:rounded-lg border border-black-200">
          <form  onSubmit={submitHandler}>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Token
              </label>
              <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="tokenAddress"
                                    value={addressValue}
                                    onChange={addressChangeHandler}
                                    onBlur={addressBlurHandler}
                                    className="block w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                                  {addressHasError && <p className="text-red-700">Please enter a valid Token address.</p>}
                            </div>
            </div>
            <div >
                            <label
                                htmlFor="amount"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Amount
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="number"
                                    name="amount"
                                    value={amountValue}
                                    onChange={amountChangeHandler}
                                    onBlur={amountBlurHandler}
                                    className="block w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                                  {amountHasError && <p className="text-red-700">Please enter a valid amount.</p>}
                            </div>
                        </div>
            <div className="flex justify-center items-center mt-5">
              <button
               disabled={!formIsValid}
                type="submit"
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
              >
                Deposit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
