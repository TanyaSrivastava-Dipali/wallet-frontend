import {React,useState,useEffect} from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Navbar from './Navbar';
import ChangePassword from '../User/ChangePassword';
import GetUser from '../User/GetUser';
import GetBalance from '../User/GetBalance';
import Deposit from '../User/Deposit';
import Withdraw from '../User/Withdraw';
import Transfer from '../Transaction/Transfer';
import Transaction from '../Transaction/GetTransactionDetail';
import AllTransactions from '../Transaction/GetAllTransaction';

const Dashboard = () => {
    const [loginStatus,setLoginStatus]=useState(true);
    const [component, changeComponent] = useState('');
    const changeHandler=(e)=>{
        changeComponent(e.target.value);
    }
    const logoutHandler =async (event) => {
     const response = await axios.get("http://localhost:3000/api/user/logout",{withCredentials: true,headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
    }});   
      console.log(response);
        if (response.status === 200){
            setLoginStatus(false);
            return <Navigate replace to="/login" />;
         } else {
           alert("Something Went Wrong, Try again");
         }
      };
      if (!loginStatus) {
        return <Navigate replace to="/login" />;
        }
    return (
        <div class="flex flex-col fixed">
            <div className='relative'>
            <Navbar/>
            </div>
     
  <div className="bg-slate-100 overflow-x-scroll w-screen h-screen antialiased text-white selection:bg-blue-600 selection:text-white">
  <div className=" relative flex-1 flex flex-row min-h-0 border-r border-gray-200 pt-0">
      <div id="menu" className="bg-black min-h-screen z-10 text-white w-64 fixed left-0 h-screen overflow-y-scroll">
         <div id="profile" className="px-6 py-10">
          <p className="text-yellow-600">Welcome back,</p>
              <span className="text-sm md:text-base font-bold">
                  Edward Tompson
              </span>
         </div>
         <div id="nav" className="w-full px-6">
          <button onClick={changeHandler} value="changePass" className="w-full px-2 font-bold  inline-flex space-x-2 items-center border-b border-yellow-900 py-3 bg-black hover:bg-gray-900 transition ease-linear duration-150">
                 Change password

          </button>
          <button onClick={changeHandler} value="getUser" className="w-full px-2 mt-5 font-bold inline-flex space-x-2 items-center border-b border-yellow-900 py-3  bg-black hover:bg-gray-900  transition ease-linear duration-150">
  Get User
  </button>

          
          <button  onClick={changeHandler} value="getBalance" className="w-full px-2 mt-5 text-lg font-bold inline-flex space-x-2 items-center border-b border-yellow-900 py-3  bg-black hover:bg-gray-900  transition ease-linear duration-150">
Get Balance

          </button>
          <button onClick={changeHandler} value="transfer" className="w-full px-2 mt-5 text-lg font-bold inline-flex space-x-2 items-center border-b border-yellow-900 py-3  bg-black hover:bg-gray-900  transition ease-linear duration-150">
             Transfer

          </button>
          <button onClick={changeHandler} value="deposit" className="w-full px-2 mt-5 text-lg font-bold inline-flex space-x-2 items-center border-b border-yellow-900 py-3  bg-black hover:bg-gray-900  transition ease-linear duration-150">
               Deposit

          </button>
          <button onClick={changeHandler} value="withdraw" className="w-full px-2 mt-5 text-lg font-bold inline-flex space-x-2 items-center border-b border-yellow-900 py-3  bg-black hover:bg-gray-900  transition ease-linear duration-150">
       Withdraw

          </button>
          <button onClick={changeHandler} value="trxDetail" className="w-full px-2 mt-5 text-lg font-bold inline-flex space-x-2 items-center border-b border-yellow-900 py-3  bg-black hover:bg-gray-900  transition ease-linear duration-150">
            Get trx detail

          </button>
          <button onClick={changeHandler} value="allTrx" className="w-full px-2 mt-5 text-lg font-bold inline-flex space-x-2 items-center border-b border-yellow-900 py-3  bg-black hover:bg-gray-900  transition ease-linear duration-150">
                Get all Transactions

          </button>
          <button onClick={logoutHandler} className="w-full px-2 mt-5 text-lg font-bold inline-flex space-x-2 items-center border-b border-yellow-900 py-3  bg-black hover:bg-gray-900  transition ease-linear duration-150">
          Logout

          </button>
         </div>
      </div>
      <div className=' ml-80 mr-10 w-full text-justify items-center text-black'> 
      {(component === "changePass") ? <ChangePassword/> : (component === "getUser") ? <GetUser/> : (component === "getBalance") ? <GetBalance/> :
      (component === "transfer") ? <Transfer/> :(component === "deposit") ? <Deposit/> :(component === "withdraw") ? <Withdraw/> :
      (component === "trxDetail") ? <Transaction/> :<AllTransactions/>
}
      </div>
</div>
</div>
</div>
    );
  };
  
  export default Dashboard;