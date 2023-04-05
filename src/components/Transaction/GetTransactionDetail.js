  import axios from "axios";
import React, { useState } from "react";
import AxiosInstance from "../../utils/axiosInstance";

const Transaction = () => {
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
  const trxHash="0x6857ba6ffc75504a66a17d6b39976a45e687e58147d849b4de6208e0aa7e420b";
  const onClickHandler = async () => {
    const response = await axios.get('http://localhost:3000/api/transaction/getTransactionDetail/0x6857ba6ffc75504a66a17d6b39976a45e687e58147d849b4de6208e0aa7e420b',{withCredentials: true,headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
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
  };
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6  sm:pt-0 bg-gray-100">
        <div>
          <p className="text-2xl  text-black">
            click below to see transaction detail .
          </p>
        </div>
        <div className="w-full px-6 py-5 mt-5 overflow-hidden bg-gray shadow-md sm:max-w-md sm:rounded-lg border border-black-200">
         
              <button
                onClick={onClickHandler}
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
              >
                Get Transaction Detail
              </button>
        </div>

        {transactionDetail.amount && <ul className="mt-10 text-blue-900"><li><b className="text-red-700"> Sender:</b> {transactionDetail.sender}</li>
        <li><b className="text-red-700">Receiver:</b> {transactionDetail.receiver}</li>
        <li> <b className="text-red-700">SenderWalletAddress: </b>{transactionDetail.SenderWalletAddress}</li>
        <li><b className="text-red-700"> ReceiverWalletAddress:</b> {transactionDetail.ReceiverWalletAddress}</li>
        <li><b className="text-red-700">Transaction Hash: </b>{transactionDetail.ethTRXHash}</li>
        <li><b className="text-red-700">Token name : </b>{transactionDetail.token}</li>
        <li><b className="text-red-700">Transaction trxTimeStamp </b>{transactionDetail.trxTimeStamp}</li>
        </ul>}
      </div>
    </div>
  );
};

export default Transaction;
