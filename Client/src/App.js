import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
/* import Dashboard from './components/Dashboard/Dashboard';
import AddRecharge from './components/Recharge/AddRecharge';
import AddMobileBanking from './components/Mobile Banking/AddMobileBanking';
import AddSimPurchase from './components/Sim Purchase/AddSimPurchase';
import AddDirectBank from './components/Direct Bank/AddDirectBank';
import NewCargoOrder from './components/Cargo/NewCargoOrder';
import PendingRecharge from './components/Recharge/PendingRecharge';
import AddMerchant from './components/Merchant/AddMerchant';
import PendingMerchant from './components/Merchant/PendingMerchant';
import RejectedMerchant from './components/Merchant/RejectedMerchant';
import AllMerchant from './components/Merchant/AllMerchant';
import RejectedRecharge from './components/Recharge/RejectedRecharge';
import AllRecharge from './components/Recharge/AllRecharge';
import PendingMobileBanking from './components/Mobile Banking/PendingMobileBanking';
import RejectedMobileBanking from './components/Mobile Banking/RejectedMobileBanking';
import AllMobileBanking from './components/Mobile Banking/AllMobileBanking';
import PendingSimPurchase from './components/Sim Purchase/PendingSimPurchase';
import RejectedSimPurchase from './components/Sim Purchase/RejectedSimPurchase';
import AllSimPurchase from './components/Sim Purchase/AllSimPurchase';
import PendingBankTransfer from './components/Direct Bank/PendingBankTransfer';
import RejectedBankTransfer from './components/Direct Bank/RejectedBankTransfer';
import AllBankTransfer from './components/Direct Bank/AllBankTransfer';
import PendingCargoOrder from './components/Cargo/PendingCargoOrder';
import RejectedCargoOrder from './components/Cargo/RejectedCargoOrder';
import AllCargoOrder from './components/Cargo/AllCargoOrder';
import AddBalance from './components/Balance/AddBalance';
import BalanceRequest from './components/Balance/BalanceRequest';
import RejectedBalance from './components/Balance/RejectedBalance';
import AllBalance from './components/Balance/AllBalance';
import ViewMerchant from './components/Merchant/ViewMerchant';
import EditMerchant from './components/Merchant/EditMerchant';
import OpenSupport from './components/Support/OpenSupport';
import PendingSupport from './components/Support/PendingSupport';
import AllSupport from './components/Support/AllSupport'; */
// import Login from './components/Login/Login';
import Login from './components/Admin/Login/Login'
import AuthProvider from './Context/AuthProvider/AuthProvider';
import axios from 'axios';
import AdminPrivateRoute from './AdminPrivateRoute';
import Register from './components/Admin/Login/Register';

function App() {
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.post['Accept'] = 'application/json';
  // axios.defaults.withCredentials = true;
  axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization = token ? token : "";
    return config;
  })
  const userInfo = localStorage.getItem('user')
  const userData = (JSON.parse(userInfo))
  return (
    <div >
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              {localStorage.getItem("token") ? <Redirect to={userData.role === 1 ? "/admin/dashboard" : "/merchant/dashboard"} /> : <Login />}
            </Route>
            <Route exact path="/register">
              {localStorage.getItem("token") ? <Redirect to={userData.role === 1 ? "/admin/dashboard" : "/merchant/dashboard"} /> : <Register />}
            </Route>


            {/*      {
              !localStorage.getItem("token") ? <Route exact path="/register">
                <Register></Register>
              </Route> : <Redirect to={userData.role === 1 ? "/admin/dashboard" : "/merchant/dashboard"} />
            } */}
            <Route exact path="/login">
              {localStorage.getItem("token") ? <Redirect to={userData.role === 1 ? "/admin/dashboard" : "/merchant/dashboard"} /> : <Login />}
            </Route>
            <AdminPrivateRoute path="/" name="Admin" />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
