import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ResetPassword from './components/User/ResetPassword';
import ChangePassword from './components/User/ChangePassword';
import Dashboard from './components/UI/Dashboard';
import Deposit from './components/User/Deposit';
import Withdraw from './components/User/Withdraw';
import Transfer from './components/Transaction/Transfer';
import Transaction from './components/Transaction/GetTransactionDetail';
import AllTransactions from './components/Transaction/GetAllTransaction';
import GetUser from './components/User/GetUser';

function App() {
  return (
    <Routes>
    <Route  path="/" element={<Navigate to='/home' />} />
        <Route  path='/home' element={  <Home />} />
        <Route  path='/signup/' element={  <Signup />} />
        <Route  path='/login/' element={  <Login />} />
        <Route  path='/dashboard/' element={  <Dashboard />} />
        <Route  path='/resetPassword/' element={  <ResetPassword />} />
        <Route  path='/changePassword/' element={  <ChangePassword />} />
        <Route  path='/user/getUser/' element={  < GetUser/>} />
        <Route  path='/user/deposit/' element={  < Deposit/>} />
        <Route  path='/user/withdraw/' element={  < Withdraw/>} />
        <Route  path='/user/transfer' element={  < Transfer/>} />
        <Route  path='/user/getTransaction' element={  < Transaction/>} />
        <Route  path='/user/getAllTransaction' element={  < AllTransactions/>} />
        <Route path='*' element={ <NotFound />}/>
  </Routes>
  );
}

export default App;