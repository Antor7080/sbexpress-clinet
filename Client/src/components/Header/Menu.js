import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";


const Menu = () => {
  const [user, setUserData] = useState({})
  const token = localStorage.getItem('token')
  const userInfo = localStorage.getItem('user')
  const userData = (JSON.parse(userInfo))
  useEffect(() => {
    axios.get(`https://sbexpressbd.com/Server/user/information/${userData._id}`, {
      headers: {
        'Authorization': token,
        
      }
    })


      .then(data => setUserData(data.data))
  }, [userData._id, token]);
  return (
    <div>
      {
        userData.role === 1 && <aside className="main-sidebar sidebar-light-primary">
          <div className="text-center my-logo">
            <Link to="/admin/dashboard">
              <img src={logo} width="220" alt="" className="brand-image" />
            </Link>
          </div>
          <hr />
          <div className="sidebar">
            <div className="user-panel  d-flex">
              <div className="image">
                <img src={`https://sbexpressbd.com/Server/uploads/${user.avatar}`} className="img-circle elevation-2" alt="User " />
              </div>
              <div className="info">
                <Link to="#" className="d-block">
                  {user.name}
                </Link>
              </div>
            </div>
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <li className="nav-item">
                  <Link to="/admin/dashboard" className="nav-link">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>Dashboard</p>
                  </Link>
                </li>
                <li className="nav-item has-treeview ">
                  <Link to="#" className="nav-link">
                    <i class="nav-icon fas fa-balance-scale"></i>
                    <p>
                      Merchant
                      <i className="right fas fa-angle-left" />
                    </p>
                  </Link>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to="/admin/add-merchant" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Add Merchant</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/admin/pending-merchant" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Pending Merchant</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/admin/rejected-merchant" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Rejected Merchant</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/admin/all-merchant" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>All Merchant</p>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item has-treeview ">
                  <Link to="#" className="nav-link">
                    <i class="nav-icon fas fa-euro-sign"></i>
                    <p>
                      Balance
                      <i className="right fas fa-angle-left" />
                    </p>
                  </Link>
                  <ul className="nav nav-treeview">

                    <li className="nav-item">
                      <Link to="/admin/balance-request" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Balance Request</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/admin/rejected-balance" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Rejected Balance</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/admin/all-balance" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>All Balance</p>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item has-treeview">
                  <Link to="#" className="nav-link">
                    <i className="nav-icon fas fa-dollar-sign" />
                    <p>
                      Recharge Point
                      <i className="fas fa-angle-left right" />
                    </p>
                  </Link>
                  <ul className="nav nav-treeview">

                    <li className="nav-item">
                      <Link to="/admin/pending-recharge" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Pending Recharge</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/admin/rejected-recharge" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Rejected Recharge</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/admin/all-recharge" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>All Recharge</p>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item has-treeview">
                  <Link to="#" className="nav-link">
                    <i class="nav-icon fas fa-mobile-alt"></i>
                    <p>
                      Mobile Banking
                      <i className="right fas fa-angle-left" />
                    </p>
                  </Link>
                  <ul className="nav nav-treeview">

                    <li className="nav-item">
                      <Link to="/admin/pending-mobile-banking" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Pending Mobile Banking</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/admin/rejected-mobile-banking" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Rejected Mobile Banking</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/admin/all-mobile-banking" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>All Mobile Banking</p>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item has-treeview">
                  <Link to="#" className="nav-link">
                    <i class="nav-icon fas fa-sim-card"></i>
                    <p>
                      Sim Purchase
                      <i className="fas fa-angle-left right" />
                    </p>
                  </Link>
                  <ul className="nav nav-treeview">

                    <li className="nav-item">
                      <Link to="/admin/pending-sim-purchase" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Pending Sim Purchase</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/admin/rejected-sim-purchase" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Rejected Sim Purchase</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/admin/all-sim-purchase" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>All Sim Purchase</p>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item has-treeview">
                  <Link to="#" className="nav-link">
                    <i class="nav-icon fas fa-university"></i>
                    <p>
                      Direct Bank
                      <i className="fas fa-angle-left right" />
                    </p>
                  </Link>
                  <ul className="nav nav-treeview">

                    <li className="nav-item">
                      <Link to="/admin/pending-bank-transfer" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Pending Bank Transfer </p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/admin/rejected-bank-transfer" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Rejected Bank Transfer </p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/admin/all-bank-transfer" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>All Bank Transer</p>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item has-treeview">
                  <Link
                    to="#"

                    className="nav-link"
                  >
                    <i class="nav-icon fas fa-ship"></i>
                    <p>
                      Cargo Services
                      <i className="fas fa-angle-left right" />
                    </p>
                  </Link>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to="/admin/new-cargo-order" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>New Cargo Order</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/admin/pending-cargo-order" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Pending Cargo Order</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/admin/rejected-cargo-order" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Rejected Cargo Order</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/admin/all-cargo-order" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>All Cargo Order</p>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    <i className="nav-icon fas fa-users-cog" />
                    <p>Accounts</p>
                  </Link>
                </li>
                <li className="nav-item has-treeview mb-5">
                  <Link to="#" className="nav-link">
                    <i className="nav-icon far fa-plus-square" />
                    <p>
                      Support
                      <i className="fas fa-angle-left right" />
                    </p>
                  </Link>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to="/admin/open-support" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Open Support</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/admin/pending-support" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Pending Support</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/admin/all-support" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>All Support</p>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      }

      {userData.role === 0 && <aside className="main-sidebar sidebar-light-primary">
        <div className="text-center my-logo">
          <Link to="/merchant/dashboard">
            <img src={logo} width="220" alt="" className="brand-image" />
          </Link>
        </div>
        <hr />
        <div className="sidebar">
          <div className="user-panel  d-flex">
            <div className="image">
              <img src={`https://sbexpressbd.com/Server/uploads/${user.avatar}`} className="img-circle elevation-2" alt="User " />
            </div>
            <div className="info">
              <Link to="#" className="d-block">
                {user.name}
              </Link>
            </div>
          </div>
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <Link to="/merchant/dashboard" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>Dashboard</p>
                </Link>
              </li>

              <li className="nav-item has-treeview ">
                <Link to="#" className="nav-link">
                  <i class="nav-icon fas fa-euro-sign"></i>
                  <p>
                    Balance
                    <i className="right fas fa-angle-left" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/merchant/add-balance" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Add Balance</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/merchant/balance-request" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Balance Request</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/merchant/rejected-balance" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Rejected Balance</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/merchant/all-balance" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>All Balance</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <Link to="#" className="nav-link">
                  <i className="nav-icon fas fa-dollar-sign" />
                  <p>
                    Recharge Point
                    <i className="fas fa-angle-left right" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/merchant/add-recharge" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Add Recharge</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/merchant/pending-recharge" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Pending Recharge</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/merchant/rejected-recharge" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Rejected Recharge</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/merchant/all-recharge" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>All Recharge</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <Link to="#" className="nav-link">
                  <i class="nav-icon fas fa-mobile-alt"></i>
                  <p>
                    Mobile Banking
                    <i className="right fas fa-angle-left" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/merchant/add-mobile-banking" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Add Mobile Banking</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/merchant/pending-mobile-banking" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Pending Mobile Banking</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/merchant/rejected-mobile-banking" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Rejected Mobile Banking</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/merchant/all-mobile-banking" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>All Mobile Banking</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <Link to="#" className="nav-link">
                  <i class="nav-icon fas fa-sim-card"></i>
                  <p>
                    Sim Purchase
                    <i className="fas fa-angle-left right" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/merchant/add-sim-purchase" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Add New Sim</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/merchant/pending-sim-purchase" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Pending Sim Purchase</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/merchant/rejected-sim-purchase" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Rejected Sim Purchase</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/merchant/all-sim-purchase" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>All Sim Purchase</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <Link to="#" className="nav-link">
                  <i class="nav-icon fas fa-university"></i>
                  <p>
                    Direct Bank
                    <i className="fas fa-angle-left right" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/merchant/add-direct-bank" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Add Bank Transfer</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/merchant/pending-bank-transfer" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Pending Bank Transfer </p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/merchant/rejected-bank-transfer" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Rejected Bank Transfer </p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/merchant/all-bank-transfer" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>All Bank Transer</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <Link
                  to="#"

                  className="nav-link"
                >
                  <i class="nav-icon fas fa-ship"></i>
                  <p>
                    Cargo Services
                    <i className="fas fa-angle-left right" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/merchant/new-cargo-order" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>New Cargo Order</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/merchant/pending-cargo-order" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Pending Cargo Order</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/merchant/rejected-cargo-order" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Rejected Cargo Order</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/merchant/all-cargo-order" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>All Cargo Order</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="nav-icon fas fa-users-cog" />
                  <p>Accounts</p>
                </Link>
              </li>
              <li className="nav-item has-treeview mb-5">
                <Link to="#" className="nav-link">
                  <i className="nav-icon far fa-plus-square" />
                  <p>
                    Support
                    <i className="fas fa-angle-left right" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/merchant/open-support" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Open Support</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/merchant/pending-support" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Pending Support</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/merchant/all-support" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>All Support</p>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      }
    </div>
  );
};

export default Menu;
