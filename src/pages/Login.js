import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "../components/UI/Navbar";
const Login = () => {
    return (
        <div>
             <Navbar/>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-100">
                <div>
                <h3 className="text-4xl  text-black">
                           Welcome back!
                        </h3>
                        <p>Please enter your details.</p>
                 
                </div>
                <div className="w-full px-6 py-5 mt-5 overflow-hidden bg-gray shadow-md sm:max-w-md sm:rounded-lg border border-black-200">
                    <form>
                        
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
                                    className="block w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
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
                                    className="block w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center items-center mt-5">
                      <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                            >
                                Login
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
                               to='/signup'
                            >
                                Forget Password?
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
  };
  
  export default Login;