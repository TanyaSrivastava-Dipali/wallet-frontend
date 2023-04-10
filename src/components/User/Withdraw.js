import React, { useState } from "react";
import useInput from "../../hooks/use-input";
const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

const Withdraw = () => {
  const [tokenAddress, setTokenAddress] = useState("0x5FbDB2315678afecb367f032d93F642f64180aa3");
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

  if ( amountIsValid && emailIsValid ) {
    formIsValid = true;
  }
  const submitHandler = async (event) => {
    event.preventDefault();
    let response = await fetch("/api/user/withdraw",  {method: 'POST',
    headers: {'Content-Type': 'application/json'},body:JSON.stringify({
        tokenAddress: tokenAddress,
        toEmail:emailValue,
        amount: amountValue,
  })});
  console.log(response);
    // const result = response.data.user;
    // console.log(result);
    if (response.status === 200) {
        alert("amount Withdrawn Successfully");
     } else {
       alert("Something Went Wrong, Try again");
     }
   
 
     resetAmount();
     resetEmail();
  };
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center  sm:pt-0 ">
        <div>
          <p className="text-2xl  text-black">
            Please enter details to Withdraw.
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
              <select value={tokenAddress} onChange={ (e) => {
    setTokenAddress(e.target.value);
              }}    className="block w-full mt-2 border-gray-300 rounded-md shadow-sm bg-white focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
        <option value="0x5FbDB2315678afecb367f032d93F642f64180aa3">VNC</option>
        <option value="0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512">$</option>
        <option value="0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0">USD</option>
      </select>

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
                        <div >
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="toEmail"
                                    value={emailValue}
                                    onChange={emailChangeHandler}
                                    onBlur={emailBlurHandler}
                                    className="block w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                                  {emailHasError && <p className="text-red-700">Please enter a valid email address.</p>}
                            </div>
                        </div>
            <div className="flex justify-center items-center mt-5">
              <button
               disabled={!formIsValid}
                type="submit"
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
              >
                Withdraw
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
