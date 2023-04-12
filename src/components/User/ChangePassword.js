import { React, useState } from "react";
import { Navigate } from "react-router-dom";
import useInput from "../../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const ChangePassword = () => {
  const [stateChanged, setStateChanged] = useState(false);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: passValue,
    isValid: passIsValid,
    hasError: passHasError,
    valueChangeHandler: passChangeHandler,
    inputBlurHandler: passBlurHandler,
    reset: resetPass,
  } = useInput(isNotEmpty);
  const {
    value: newPassValue,
    isValid: newPassIsValid,
    hasError: newPassHasError,
    valueChangeHandler: newPassChangeHandler,
    inputBlurHandler: newPassBlurHandler,
    reset: resetNewPass,
  } = useInput(isNotEmpty);
  const {
    value: cNewPassValue,
    isValid: cNewPassIsValid,
    hasError: cNewPassHasError,
    valueChangeHandler: cNewPassChangeHandler,
    inputBlurHandler: cNewPassBlurHandler,
    reset: resetcNewPass,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (emailIsValid && passIsValid && newPassIsValid && cNewPassIsValid) {
    formIsValid = true;
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    let response = await fetch("/api/user/changepassword", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: emailValue,
        currentPass: passValue,
        newPass: newPassValue,
        confirmNewPass: cNewPassValue,
      }),
    });

    const result = await response.json();
    console.log(result);
    if (result.status === "Success") {
      setStateChanged(true);
      alert("password changed Successfully.Please login to use its services");
      console.log(stateChanged);
    } else {
      alert("Something Went Wrong, Try again");
    }

    resetPass();
    resetEmail();
    resetNewPass();
    resetcNewPass();
  };
  //   if (stateChanged) {
  //       return <Navigate replace to="/login" />;
  //     }
  return (
    <div>
      {stateChanged ? (
        <Navigate replace to="/login" />
      ) : (
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0">
          <div>
            <h3 className="text-4xl  text-black">Welcome back!</h3>
            <p>Please enter your details.</p>
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
                    name="currentPass"
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
                  htmlFor="newPassword"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  New Password
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="password"
                    name="newPass"
                    value={newPassValue}
                    onChange={newPassChangeHandler}
                    onBlur={newPassBlurHandler}
                    className="block w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  {newPassHasError && (
                    <p className="text-red-700">New Password can't be empty.</p>
                  )}
                </div>
              </div>
              <div className="mt-5">
                <label
                  htmlFor="confirmNewPass"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Confirn New Password
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="password"
                    name="confirmNewPass"
                    value={cNewPassValue}
                    onChange={cNewPassChangeHandler}
                    onBlur={cNewPassBlurHandler}
                    className="block w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  {cNewPassHasError && (
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
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangePassword;
