import {  NavLink } from 'react-router-dom';
import Navbar from './Navbar';
const Dashboard = () => {
    return (
  <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-white selection:bg-blue-600 selection:text-white">
    <Navbar/>
  <div className="flex flex-col relative w-screen">
      <div id="menu" className="bg-black min-h-screen z-10 text-white w-64 fixed left-0 h-screen overflow-y-scroll">
         <div id="profile" className="px-6 py-10">
          <p className="text-yellow-600">Welcome back,</p>
              <span className="text-sm md:text-base font-bold">
                  Edward Tompson
              </span>
         </div>
         <div id="nav" className="w-full px-6">
          <NavLink to="#" className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 bg-blue-800 hover:bg-white/5 transition ease-linear duration-150">

              <div className="flex flex-col">
                  <span className="text-lg font-bold leading-5 text-white">Change password</span>
                  <span className="text-sm text-white hidden md:block">Data Overview</span>
              </div>
          </NavLink>
          <NavLink to="#" className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150">

              <div className="flex flex-col">
                  <span className="text-lg text-white font-bold leading-5">Get User</span>
                  <span className="text-sm text-white hidden md:block">Database Manager</span>
              </div>
          </NavLink>
          <NavLink to="#" className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150">
              <div className="flex flex-col">
                  <span className="text-lg text-white font-bold leading-5">Get Balance</span>
                  <span className="text-sm text-white hidden md:block">Manage Cloud Storage</span>
              </div>
          </NavLink>
          <NavLink to="#" className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150">
              <div className="flex flex-col">
                  <span className="text-lg text-white font-bold leading-5">Transfer</span>
                  <span className="text-sm text-white hidden md:block">Manage Reports</span>
              </div>
          </NavLink>
          <NavLink to="#" className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150">
              <div className="flex flex-col">
                  <span className="text-lg text-white font-bold leading-5">Deposit</span>
                  <span className="text-sm text-white hidden md:block">Generate Security Keys</span>
              </div>
          </NavLink>
          <NavLink to="#" className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150">
              <div className="flex flex-col">
                  <span className="text-lg text-white font-bold leading-5">Withdraw</span>
                  <span className="text-sm text-white hidden md:block">Manage Extensions</span>
              </div>
          </NavLink>
          <NavLink to="#" className="w-full px-2 inline-flex space-x-2 items-center py-3 hover:bg-white/5 transition ease-linear duration-150">
              <div className="flex flex-col">
                  <span className="text-lg text-white font-bold leading-5">Get transaction detail</span>
                  <span className="text-sm text-white hidden md:block">Edit App Settings</span>
              </div>
          </NavLink>
          <NavLink to="#" className="w-full px-2 inline-flex space-x-2 items-center py-3 hover:bg-white/5 transition ease-linear duration-150">
              <div className="flex flex-col">
                  <span className="text-lg text-white font-bold leading-5">Get all transaction details</span>
                  <span className="text-sm text-white hidden md:block">Edit App Settings</span>
              </div>
          </NavLink>
          
         </div>
      </div>
      
      <div className="flex flex-col">
    fdgvhbjnk
    </div>
  </div>
</div>
    );
  };
  
  export default Dashboard;