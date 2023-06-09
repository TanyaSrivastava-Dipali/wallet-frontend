import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../UI/Navbar";
import useInput from "../../hooks/use-input";
import axios from "axios";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const ResetPassword = () => {
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: resetTokenValue,
    isValid: resetTokenIsValid,
    hasError: resetTokenHasError,
    valueChangeHandler: resetTokenChangeHandler,
    inputBlurHandler: resetTokenBlurHandler,
    reset: resetresetToken,
  } = useInput(isNotEmpty);

  const {
    value: passValue,
    isValid: passIsValid,
    hasError: passHasError,
    valueChangeHandler: passChangeHandler,
    inputBlurHandler: passBlurHandler,
    reset: resetPass,
  } = useInput(isNotEmpty);

  const {
    value: confirmPassValue,
    isValid: confirmPassIsValid,
    hasError: confirmPassHasError,
    valueChangeHandler: confirmPassChangeHandler,
    inputBlurHandler: confirmPassBlurHandler,
    reset: resetConfirmPass,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (emailIsValid && resetTokenIsValid && passIsValid && confirmPassIsValid) {
    formIsValid = true;
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    let response = await fetch("/api/user/getResetPassOtpAndResetPassword", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: emailValue,
        passResetToken: resetTokenValue,
        pass: passValue,
        confirmPass: confirmPassValue,
        target: "resetPassword",
      }),
    });

    console.log(response);
    if (response.ok) {
      alert("password reset Successfully");
    } else {
      alert("User does not exist or Reset time expired");
    }

    resetPass();
    resetConfirmPass();
    resetresetToken();
    resetEmail();
  };
  const resendPassOTP = async (e) => {
    e.preventDefault();
    let response = await fetch("/api/user/getResetPassOtpAndResetPassword", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: emailValue,
        target: "getResetPassOtp",
      }),
    });
    console.log(response);
    if (response.ok) {
      alert("Reset password Token sent to email.kindly reset you password!");
    } else {
      alert("Something Went Wrong, Try again");
    }
  };
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-100">
        <div>
          <h3 className="text-4xl  text-black">Welcome back!</h3>
          <p>Please enter your details to reset Password</p>
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
                disabled={!emailIsValid}
                onClick={resendPassOTP}
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-600 border border-transparent rounded-md active:bg-gray-900 false"
              >
                Get password reset token
              </button>
            </div>
            <div className="mt-5">
              <label
                htmlFor="resetToken"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Password Reset Token
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="passResetToken"
                  value={resetTokenValue}
                  onChange={resetTokenChangeHandler}
                  onBlur={resetTokenBlurHandler}
                  className="block w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                {resetTokenHasError && (
                  <p className="text-red-700">resetToken can't be empty.</p>
                )}
              </div>
            </div>
            <div className="mt-5">
              <label
                htmlFor="currentPass"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="pass"
                  value={passValue}
                  onChange={passChangeHandler}
                  onBlur={passBlurHandler}
                  className="block w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                {passHasError && (
                  <p className="text-red-700">Password can't be empty.</p>
                )}
              </div>
            </div>
            <div className="mt-5">
              <label
                htmlFor="confirmNewPass"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Confirm New Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="confirmPass"
                  value={confirmPassValue}
                  onChange={confirmPassChangeHandler}
                  onBlur={confirmPassBlurHandler}
                  className="block w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                {confirmPassHasError && (
                  <p className="text-red-700">
                    Confirm Password can't be empty.
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-center items-center mt-5">
              <button
                disabled={!formIsValid}
                type="submit"
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
              >
                Reset Password
              </button>
            </div>

            <div className="flex items-center justify-between mt-5">
              <Link
                className="text-sm text-gray-600 underline hover:text-gray-900"
                to="/signup"
              >
                Don't an account yet? Sign up
              </Link>
              <Link
                className="text-sm text-gray-600 underline hover:text-gray-900"
                to="/verify"
              >
                Not verified yet? Verify to get joining reward
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
