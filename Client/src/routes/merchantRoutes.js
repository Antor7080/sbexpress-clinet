import Dashboard from '../components/Merchant/Dashboard/Dashboard'
import AddRecharge from '../components/Merchant/Recharge/AddRecharge';
import AddMobileBanking from '../components/Merchant/Mobile Banking/AddMobileBanking';
import AddSimPurchase from '../components/Merchant/Sim Purchase/AddSimPurchase';
import AddDirectBank from '../components/Merchant/Direct Bank/AddDirectBank';
import NewCargoOrder from '../components/Merchant/Cargo/NewCargoOrder';
import PendingRecharge from '../components/Merchant/Recharge/PendingRecharge';
import RejectedRecharge from '../components/Merchant/Recharge/RejectedRecharge';
import AllRecharge from '../components/Merchant/Recharge/AllRecharge';
import PendingMobileBanking from '../components/Merchant/Mobile Banking/PendingMobileBanking';
import RejectedMobileBanking from '../components/Merchant/Mobile Banking/RejectedMobileBanking';
import AllMobileBanking from '../components/Merchant/Mobile Banking/AllMobileBanking';
import PendingSimPurchase from '../components/Merchant/Sim Purchase/PendingSimPurchase';
import RejectedSimPurchase from '../components/Merchant/Sim Purchase/RejectedSimPurchase';
import AllSimPurchase from '../components/Merchant/Sim Purchase/AllSimPurchase';
import PendingBankTransfer from '../components/Merchant/Direct Bank/PendingBankTransfer';
import RejectedBankTransfer from '../components/Merchant/Direct Bank/RejectedBankTransfer';
import AllBankTransfer from '../components/Merchant/Direct Bank/AllBankTransfer';
import PendingCargoOrder from '../components/Merchant/Cargo/PendingCargoOrder';
import RejectedCargoOrder from '../components/Merchant/Cargo/RejectedCargoOrder';
import AllCargoOrder from '../components/Merchant/Cargo/AllCargoOrder';
import AddBalance from '../components/Merchant/Balance/AddBalance';
import BalanceRequest from '../components/Merchant/Balance/BalanceRequest';
import RejectedBalance from '../components/Merchant/Balance/RejectedBalance';
import AllBalance from '../components/Merchant/Balance/AllBalance';
import OpenSupport from '../components/Merchant/Support/OpenSupport';
import PendingSupport from '../components/Merchant/Support/PendingSupport';
import AllSupport from '../components/Merchant/Support/AllSupport';
import Error from '../Error/Error';


const merchantRoutes = [

    { path: '/merchant', exact: true, name: 'Merchant' },
    { path: '/merchant/dashboard', exact: true, name: 'Dashboard', component: Dashboard },

    { path: '/merchant/add-recharge', exact: true, name: 'AddRecharge', component: AddRecharge },
    { path: '/merchant/add-mobile-banking', exact: true, name: 'AddMobileBanking', component: AddMobileBanking },

    { path: '/merchant/add-balance', exact: true, name: 'AddBalance', component: AddBalance },
    { path: '/merchant/balance-request', exact: true, name: 'BalanceRequest', component: BalanceRequest },
    { path: '/merchant/rejected-balance', exact: true, name: 'RejectedBalance', component: RejectedBalance },
    { path: '/merchant/all-balance', exact: true, name: 'AllBalance', component: AllBalance },
    { path: '/merchant/pending-recharge', exact: true, name: 'PendingRecharge', component: PendingRecharge },
    { path: '/merchant/rejected-recharge', exact: true, name: 'RejectedRecharge', component: RejectedRecharge },
    { path: '/merchant/all-recharge', exact: true, name: 'AllRecharge', component: AllRecharge },
    { path: '/merchant/pending-mobile-banking', exact: true, name: 'PendingMobileBanking', component: PendingMobileBanking },
    { path: '/merchant/rejected-mobile-banking', exact: true, name: 'RejectedMobileBanking', component: RejectedMobileBanking },

    { path: '/merchant/all-mobile-banking', exact: true, name: 'AllMobileBanking', component: AllMobileBanking },
    { path: '/merchant/add-sim-purchase', exact: true, name: 'AddSimPurchase', component: AddSimPurchase },
    { path: '/merchant/pending-sim-purchase', exact: true, name: 'PendingSimPurchase', component: PendingSimPurchase },
    { path: '/merchant/rejected-sim-purchase', exact: true, name: 'RejectedSimPurchase', component: RejectedSimPurchase },
    { path: '/merchant/all-sim-purchase', exact: true, name: 'AllSimPurchase', component: AllSimPurchase },
    { path: '/merchant/add-direct-bank', exact: true, name: 'AddDirectBank', component: AddDirectBank },
    { path: '/merchant/pending-bank-transfer', exact: true, name: 'PendingBankTransfer', component: PendingBankTransfer },
    { path: '/merchant/rejected-bank-transfer', exact: true, name: 'RejectedBankTransfer', component: RejectedBankTransfer },
    { path: '/merchant/all-bank-transfer', exact: true, name: 'AllBankTransfer', component: AllBankTransfer },

    { path: '/merchant/new-cargo-order', exact: true, name: 'NewCargoOrder', component: NewCargoOrder },
    { path: '/merchant/pending-cargo-order', exact: true, name: 'PendingCargoOrder', component: PendingCargoOrder },
    { path: '/merchant/rejected-cargo-order', exact: true, name: 'RejectedCargoOrder', component: RejectedCargoOrder },
    { path: '/merchant/all-cargo-order', exact: true, name: 'AllCargoOrder', component: AllCargoOrder },
    { path: '/merchant/open-support', exact: true, name: 'OpenSupport', component: OpenSupport },
    { path: '/merchant/pending-support', exact: true, name: 'PendingSupport', component: PendingSupport },
    { path: '/merchant/all-support', exact: true, name: 'AllSupport', component: AllSupport },
    { path: '*', exact: false, name: 'Error', component: Error },

];

export default merchantRoutes;