import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Navbar from "../components/UI/Navbar";
import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const Login = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [user, setUser] = useState("");
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

  let formIsValid = false;

  if (emailIsValid && passIsValid) {
    formIsValid = true;
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    let response = await fetch("/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: emailValue,
        pass: passValue,
      }),
    });
    const res = await response.json();
    if (response.status === 200) {
      setLoginStatus(true);
      setUser(res.name);
    } else {
      alert("Something Went Wrong, Try again");
    }

    resetPass();
    resetEmail();
  };
  //   if (loginStatus) {
  //     return <Navigate replace to="/dashboard" state={ {user:user, isLoggedIn:loginStatus}}/>;
  //     }
  return (
    <div>
      <Navbar />
      {loginStatus ? (
        <Navigate
          replace
          to="/dashboard"
          state={{ user: user, isLoggedIn: loginStatus }}
        />
      ) : (
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-100">
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
                  htmlFor="password"
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
              <div className="flex justify-center items-center mt-5">
                <button
                  disabled={!formIsValid}
                  type="submit"
                  className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                >
                  Login
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
                  to="/signup"
                >
                  Forget Password?
                </Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
