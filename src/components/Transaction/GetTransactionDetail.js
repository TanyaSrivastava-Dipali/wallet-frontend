import axios from "axios";
import React, { useState } from "react";
import AxiosInstance from "../../utils/axiosInstance";
import useInput from "../../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== '';

const Transaction = () => {

  const {
    value: hashValue,
    isValid: hashIsValid,
    hasError: hashHasError,
    valueChangeHandler: hashChangeHandler,
    inputBlurHandler: hashBlurHandler,
    reset: resetHash,
  } = useInput(isNotEmpty);
  
const [transactionDetail, setTransactionDetail] = useState({
ReceiverWalletAddress: '',
SenderWalletAddress: '',
amount: '',
ethTRXHash: '',
receiver: '',
sender: '',
token: '',
trxTimeStamp: ''
  });
 

  const submitHandler = async (event) => {
    event.preventDefault();
    const response = await axios.get(`http://localhost:3000/api/transaction/getTransactionDetail/${hashValue}`,{withCredentials: true,headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
  }});
    console.log("response",response);
    const result = response.data.transaction;
    console.log(result);
    setTransactionDetail({
 ReceiverWalletAddress: result.ReceiverWalletAddress,
SenderWalletAddress: result.SenderWalletAddress,
amount: result.amount,
ethTRXHash: result.ethTRXHash,
receiver: result.receiver,
sender: result.sender,
token: result.token,
trxTimeStamp: result.trxTimeStamp
    });
   
     resetHash();
  };
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center  sm:pt-0">
      <div>
          <p className="text-2xl  text-black">
            Please enter transaction hash to get detail.
          </p>
        </div>
        <div className="w-full px-6 py-5 mt-5 overflow-hidden bg-gray shadow-md sm:max-w-md sm:rounded-lg border border-black-200">
         
      <form  onSubmit={submitHandler}>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Transaction Hash
              </label>
              <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="trxHash"
                                    value={hashValue}
                                    onChange={hashChangeHandler}
                                    onBlur={hashBlurHandler}
                                    className="block w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                                  {hashHasError && <p className="text-red-700">Please enter a valid Token address.</p>}
                            </div>
            </div>
            <div className="flex justify-center items-center mt-5">
              <button
               disabled={hashHasError}
                type="submit"
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
              >
                Get transaction detail
              </button>
            </div>
          </form>
          </div>
        {transactionDetail.amount && <ul className="mt-10 text-blue-900"><li><b className="text-red-900"> Sender:</b> {transactionDetail.sender}</li>
        <li><b className="text-red-900">Receiver:</b> {transactionDetail.receiver}</li>
        <li> <b className="text-red-900">SenderWalletAddress: </b>{transactionDetail.SenderWalletAddress}</li>
        <li><b className="text-red-900"> ReceiverWalletAddress:</b> {transactionDetail.ReceiverWalletAddress}</li>
        <li><b className="text-red-900">Transaction Hash: </b>{transactionDetail.ethTRXHash}</li>
        <li><b className="text-red-900">Token name : </b>{transactionDetail.token}</li>
        <li><b className="text-red-900">Transaction trxTimeStamp </b>{transactionDetail.trxTimeStamp}</li>
        </ul>}
      </div>
    </div>
  );
};

export default Transaction;
