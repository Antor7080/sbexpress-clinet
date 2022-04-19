import Dashboard from '../components/Admin/Dashboard/Dashboard'
import AddMerchant from "../components/Admin/Merchant/AddMerchant";
import NewCargoOrder from '../components/Admin/Cargo/NewCargoOrder';
import PendingRecharge from '../components/Admin/Recharge/PendingRecharge';
import PendingMerchant from '../components/Admin/Merchant/PendingMerchant';
import RejectedMerchant from '../components/Admin/Merchant/RejectedMerchant';
import AllMerchant from '../components/Admin/Merchant/AllMerchant';
import RejectedRecharge from '../components/Admin/Recharge/RejectedRecharge';
import AllRecharge from '../components/Admin/Recharge/AllRecharge';
import PendingMobileBanking from '../components/Admin/Mobile Banking/PendingMobileBanking';
import RejectedMobileBanking from '../components/Admin/Mobile Banking/RejectedMobileBanking';
import AllMobileBanking from '../components/Admin/Mobile Banking/AllMobileBanking';
import PendingSimPurchase from '../components/Admin/Sim Purchase/PendingSimPurchase';
import RejectedSimPurchase from '../components/Admin/Sim Purchase/RejectedSimPurchase';
import AllSimPurchase from '../components/Admin/Sim Purchase/AllSimPurchase';
import PendingBankTransfer from '../components/Admin/Direct Bank/PendingBankTransfer';
import RejectedBankTransfer from '../components/Admin/Direct Bank/RejectedBankTransfer';
import AllBankTransfer from '../components/Admin/Direct Bank/AllBankTransfer';
import PendingCargoOrder from '../components/Admin/Cargo/PendingCargoOrder';
import RejectedCargoOrder from '../components/Admin/Cargo/RejectedCargoOrder';
import AllCargoOrder from '../components/Admin/Cargo/AllCargoOrder';
import BalanceRequest from '../components/Admin/Balance/BalanceRequest';
import RejectedBalance from '../components/Admin/Balance/RejectedBalance';
import AllBalance from '../components/Admin/Balance/AllBalance';
import ViewMerchant from '../components/Admin/Merchant/ViewMerchant';
import EditMerchant from '../components/Admin/Merchant/EditMerchant';
import OpenSupport from '../components/Admin/Support/OpenSupport';
import PendingSupport from '../components/Admin/Support/PendingSupport';
import AllSupport from '../components/Admin/Support/AllSupport';
import Error from '../Error/Error';
import Addnotice from '../components/Admin/Notice/Addnotice';
import AllNotice from '../components/Admin/Notice/AllNotice';


const adminRoutes = [
    { path: '/admin', exact: true, name: 'Admin' },
    { path: '/admin/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/admin/add-notice', exact: true, name: 'AddNotic', component: Addnotice },
    { path: '/admin/all-notice', exact: true, name: 'AllNotic', component: AllNotice },
    { path: '/admin/add-merchant', exact: true, name: 'AddMerchant', component: AddMerchant },
    { path: '/admin/pending-merchant', exact: true, name: 'pending-merchant', component: PendingMerchant },
    { path: '/admin/rejected-merchant', exact: true, name: 'RejectedMerchant', component: RejectedMerchant },
    { path: '/admin/all-merchant', exact: true, name: 'AllMerchant', component: AllMerchant },
    { path: '/admin/view-merchant/:id', exact: true, name: 'ViewMerchant', component: ViewMerchant },
    { path: '/admin/edit-merchant/:id', exact: true, name: 'EditMerchant', component: EditMerchant },
    { path: '/admin/balance-request', exact: true, name: 'BalanceRequest', component: BalanceRequest },
    { path: '/admin/rejected-balance', exact: true, name: 'RejectedBalance', component: RejectedBalance },
    { path: '/admin/all-balance', exact: true, name: 'AllBalance', component: AllBalance },
    { path: '/admin/pending-recharge', exact: true, name: 'PendingRecharge', component: PendingRecharge },
    { path: '/admin/rejected-recharge', exact: true, name: 'RejectedRecharge', component: RejectedRecharge },
    { path: '/admin/all-recharge', exact: true, name: 'AllRecharge', component: AllRecharge },
    { path: '/admin/pending-mobile-banking', exact: true, name: 'PendingMobileBanking', component: PendingMobileBanking },
    { path: '/admin/rejected-mobile-banking', exact: true, name: 'RejectedMobileBanking', component: RejectedMobileBanking },
    { path: '/admin/all-mobile-banking', exact: true, name: 'AllMobileBanking', component: AllMobileBanking },
    { path: '/admin/pending-sim-purchase', exact: true, name: 'PendingSimPurchase', component: PendingSimPurchase },
    { path: '/admin/rejected-sim-purchase', exact: true, name: 'RejectedSimPurchase', component: RejectedSimPurchase },
    { path: '/admin/all-sim-purchase', exact: true, name: 'AllSimPurchase', component: AllSimPurchase },
    { path: '/admin/pending-bank-transfer', exact: true, name: 'PendingBankTransfer', component: PendingBankTransfer },
    { path: '/admin/rejected-bank-transfer', exact: true, name: 'RejectedBankTransfer', component: RejectedBankTransfer },
    { path: '/admin/all-bank-transfer', exact: true, name: 'AllBankTransfer', component: AllBankTransfer },
    { path: '/admin/new-cargo-order', exact: true, name: 'NewCargoOrder', component: NewCargoOrder },
    { path: '/admin/pending-cargo-order', exact: true, name: 'PendingCargoOrder', component: PendingCargoOrder },
    { path: '/admin/rejected-cargo-order', exact: true, name: 'RejectedCargoOrder', component: RejectedCargoOrder },
    { path: '/admin/all-cargo-order', exact: true, name: 'AllCargoOrder', component: AllCargoOrder },
    { path: '/admin/open-support', exact: true, name: 'OpenSupport', component: OpenSupport },
    { path: '/admin/pending-support', exact: true, name: 'PendingSupport', component: PendingSupport },
    { path: '/admin/all-support', exact: true, name: 'AllSupport', component: AllSupport },
    { path: '*', exact: false, name: 'Error', component: Error },


];

export default adminRoutes;