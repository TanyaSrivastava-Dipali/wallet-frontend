import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "../UI/Navbar";
import useInput from "../../hooks/use-input";
import axios from "axios";

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

const Verify = () => {
    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
      } = useInput(isEmail);

    const {
        value: otpValue,
        isValid: otpIsValid,
        hasError: otpHasError,
        valueChangeHandler: otpChangeHandler,
        inputBlurHandler: otpBlurHandler,
        reset: resetOtp,
      } = useInput(isNotEmpty);


      let formIsValid = false;

      if (emailIsValid && otpIsValid  ) {
        formIsValid = true;
      }

      const submitHandler = async(event) => {
        event.preventDefault();
        let response = await fetch("/api/user/verifyEmail",  {method: 'POST',
        headers: {'Content-Type': 'application/json'},body:JSON.stringify({
            email: emailValue,
            otp: otpValue
      })});
      
      
      console.log(response);
      if (response.status === 200) {
         alert("verified Email Successfully");
      } else if (response.status === 302) {
        alert("Email already verified");
     } else {
        alert("Something Went Wrong, Try again");
      }
    
      resetOtp();
        resetEmail();
      };
      const resendOtpHandler= async (e) =>{
        e.preventDefault();
        let response = await fetch("/api/user/getOtpForEmailConfirmation",  {method: 'POST',
        headers: {'Content-Type': 'application/json'},body:JSON.stringify({
            email:emailValue,
           
      })});
      console.log(response);
      if (response.ok) {
        alert("OPT sent successfully to registered email");
     } else {
       alert("Something Went Wrong, Try again");
     }
      }
    return (
        <div>
             <Navbar/>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-100">
                <div>
                <h3 className="text-4xl  text-black">
                           Welcome back!
                        </h3>
                        <p>Please enter your details to verify and get the joining reward.</p>
                 
                </div>
                <div className="w-full px-6 py-5 mt-5 overflow-hidden bg-gray shadow-md sm:max-w-md sm:rounded-lg border border-black-200">
                    <form  onSubmit={submitHandler}>
                        
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
                                    name="email"
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
                      disabled={!emailIsValid}
                      onClick={resendOtpHandler}
                      id="getOTP"
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-600 border border-transparent rounded-md active:bg-gray-900 false"
                            >
                                Resend Verification OTP
                            </button>
                            </div>
                        <div className="mt-5">
                            <label
                                htmlFor="otp"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                OTP
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="otp"
                                    value={otpValue}
                                    onChange={otpChangeHandler}
                                    onBlur={otpBlurHandler}
                                    className="block w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                                    {otpHasError && <p className="text-red-700">OTP can't be empty.</p>}
                            </div>
                        </div>
                        <div className="flex justify-center items-center mt-5">
                      <button
                                disabled={!formIsValid}
                                type="submit"
                                id="verify"
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                            >
                                Verify Email
                            </button>
                            </div>

                        <div className="flex items-center justify-between mt-5">
                            <Link
                                className="text-sm text-gray-600 underline hover:text-gray-900"
                               to='/signup'
                            >
                                Don't an account yet? Sign up
                            </Link>
                            <Link
                                className="text-sm text-gray-600 underline hover:text-gray-900"
                               to='/login'
                            >
                                Already verified? Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
  };
  
  export default Verify;