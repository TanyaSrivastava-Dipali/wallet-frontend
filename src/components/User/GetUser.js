import React, { useState } from "react";
import AxiosInstance from "../../utils/axiosInstance";

const GetUser = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [userDetail, setUserDetail] = useState({
name:'',
role:'',
walletAddress:'',
email:'',
isEmailVerified:''
  });
  const submitHandler = async (event) => {
    event.preventDefault();
    // const response = await AxiosInstance(`api/user/getUser/${inputEmail}`);
    const response = await fetch(`http://localhost:3000/api/user/getUser/${inputEmail}`,{method: 'GET',
    headers: {'Content-Type': 'application/json'}});
   console.log(response);
    const result = response.data.user;
    console.log(result);
    setUserDetail({name:result.name,
    role:result.role,
    walletAddress:result.walletAddress,
    email:result.email,
    isEmailVerified:result.isEmailVerified?'true':'false'
  });
  };
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6  sm:pt-0 bg-gray-100">
        <div>
          <p className="text-2xl  text-black">
            Please enter user email to get details.
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
                  className="block w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={inputEmail}
                  onChange={(event) => {
                    const newEmail = event.target.value;
                    setInputEmail(newEmail);
                  }}
                />
              </div>
            </div>
            <div className="flex justify-center items-center mt-5">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
              >
                Get User
              </button>
            </div>
          </form>
        </div>

        {userDetail.name && <ul className="mt-10 text-blue-900"><li><b className="text-red-700"> Name:</b> {userDetail.name}</li>
        <li><b className="text-red-700">Role:</b> {userDetail.role}</li>
        <li> <b className="text-red-700">Wallet Address: </b>{userDetail.walletAddress}</li>
        <li><b className="text-red-700"> Email:</b> {userDetail.email}</li>
        <li><b className="text-red-700">Email verification status: </b>{userDetail.isEmailVerified}</li>
        </ul>}
      </div>
    </div>
  );
};

export default GetUser;
