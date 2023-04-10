import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "../components/UI/Navbar";
import useInput from "../hooks/use-input";
import AxiosInstance from "../utils/axiosInstance";

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

export default function Signup() {
    const {
        value: nameValue,
        isValid: nameIsValid,
        hasError: nameHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetName,
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
        value: cpassValue,
        isValid: cpassIsValid,
        hasError: cpassHasError,
        valueChangeHandler: cpassChangeHandler,
        inputBlurHandler: cpassBlurHandler,
        reset: resetcPass,
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

      if (nameIsValid && passIsValid  && cpassIsValid && emailIsValid) {
        formIsValid = true;
      }
    
      const submitHandler = async(event) => {
        event.preventDefault();
     if (passValue !== cpassValue) {
            alert("password and confirm password didn't match");
         } 
         else{
        let response = await AxiosInstance.post("/api/user/register", {
            name:nameValue,
            email: emailValue,
            pass: passValue,
            confirmPass: cpassValue,
            role:"admin"
      });
      console.log(response);
      if (response.status === 201) {
         alert("user Signed up Successfully");
      } else {
        alert("Something Went Wrong, Try again");
      }
      resetName();
      resetPass();
      resetcPass();
      resetEmail();
         }

      };
    return (
        <div>
            <Navbar/>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-100">
                <div>
                        <h3 className="text-4xl  text-black">
                            Signup for an account
                        </h3>
                 
                </div>
                <div className="w-full px-6 py-5 mt-5 overflow-hidden bg-gray shadow-md sm:max-w-md sm:rounded-lg border border-black-200">
                    <form onSubmit={submitHandler}>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-base font-medium text-gray-700 undefined"
                            >
                                Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    value={nameValue}
                                    onChange={nameChangeHandler}
                                    onBlur={nameBlurHandler}
                                    className="block w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                                          {nameHasError && <p className="text-red-700">Please enter a first name.</p>}
                            </div>
                        </div>
                        <div className="mt-5">
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
                                              {passHasError && <p className="text-red-700">Password can't be empty.</p>}
                            </div>
                        </div>
                        <div className="mt-5">
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Confirm Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="confirmPass"
                                    value={cpassValue}
                                    onChange={cpassChangeHandler}
                                    onBlur={cpassBlurHandler}
                                    className="block w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                                                                        {cpassHasError && <p className="text-red-700">Confirm Password can't be empty.</p>}
                            </div>
                        </div>
                        <div className="flex items-center justify-end mt-5">
                            <Link
                                className="text-sm text-gray-600 underline hover:text-gray-900"
                               to='/Login'
                            >
                                Already have an account? Log in
                            </Link>
                            <button
                                disabled={!formIsValid}
                                type="submit"
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                                
                            >
                                Signup
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}