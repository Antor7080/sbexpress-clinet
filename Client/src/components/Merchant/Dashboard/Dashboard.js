import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Header from '../../../pages/Header';
import Footer from "../../Footer/Footer";
import Notice from "./Notice";

const Dashboard = () => {
  const { user } = useAuth()
  return (
    <div>
      <Header />
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            {/* <div className="row mb-2">
              <div className="col-sm-6">
                <h3 className="m-0 text-dark">Quick Access</h3>
                <hr />
              </div>
            </div> */}
            <Notice></Notice>
            <div className="d-flex justify-content-between">
              <h3 className="m-0 text-dark">Quick Access</h3>
            </div>
            <hr className="quick-hr" />
          </div>
        </div>

        {/* Add all  */}

        <section className="content">
          <div className="container-fluid">
            <div className="row g-1">
              <div className="col-lg-3 col-md-6 col-6">
                <Link to="/merchant/add-recharge">
                  <div className="small-box bg-light shadow inner-a">
                    <div className="inner text-center">
                      <h4>
                        Add <br /> Recharge
                      </h4>
                    </div>
                    <div className="icon text-info">
                      <i class="fas fa-dollar-sign"></i>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <Link to="/merchant/add-mobile-banking">
                  <div className="small-box bg-light shadow inner-a">
                    <div className="inner text-center">
                      <h4>
                        Add <br /> Mobile Banking
                      </h4>
                    </div>
                    <div className="icon text-success">
                      <i class="fas fa-mobile-alt"></i>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <Link to="/merchant/add-new-sim">
                  <div className="small-box bg-light shadow inner-a">
                    <div className="inner text-center">
                      <h4>
                        Add <br /> Sim Purchase
                      </h4>
                    </div>
                    <div className="icon text-warning">
                      <i class="fas fa-sim-card"></i>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <Link to="/merchant/add-direct-bank">
                  <div className="small-box bg-light shadow inner-a">
                    <div className="inner text-center">
                      <h4>
                        Add <br /> Direct Bank
                      </h4>
                    </div>
                    <div className="icon text-danger">
                      <i class="fas fa-university"></i>
                    </div>
                  </div>
                </Link>
              </div>

              {/* pending  */}

              <div className="col-lg-3 col-md-6 col-6">
                <Link to="/merchant/pending-recharge">
                  <div className="small-box inner-p bg-light shadow">
                    <div className="inner">
                      <h4>Pending Recharge</h4>
                      <h3>{user.total_pending}</h3>
                      <p>Total Amount: {user.pending_recaharge}৳</p>
                    </div>
                    <div className="icon text-info">
                      <i class="fas fa-dollar-sign"></i>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <Link to="/merchant/pending-mobile-banking">
                  <div className="small-box inner-p bg-light shadow">
                    <div className="inner">
                      <h4>Pending Mobile Banking</h4>
                      <h3>{user.mobileBCount}</h3>
                      <p>Total Amount: {user.pending_Mobile_Banking_Amount}৳</p>
                    </div>
                    <div className="icon text-success">
                      <i class="fas fa-mobile-alt"></i>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="small-box inner-p bg-light shadow">
                  <div className="inner">
                    <h4>Pending Sim Purchase</h4>
                    <h3>0</h3>
                    <p>Total Amount: 0</p>
                  </div>
                  <div className="icon text-warning">
                    <i class="fas fa-sim-card"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="small-box inner-p bg-light shadow">
                  <div className="inner">
                    <h4>Pending Direct Bank</h4>
                    <h3>0</h3>
                    <p>Total Amount: 0</p>
                  </div>
                  <div className="icon text-danger">
                    <i class="fas fa-university"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* recharge point info */}

        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h3 className="m-0 text-dark">Recharge Point Information</h3>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-6">
                <div className="small-box inner-r bg-light shadow">
                  <div className="inner">
                    <h4>Today Recharge</h4>
                    <h3>0৳</h3>
                    <p>Total Recharge: 0</p>
                  </div>
                  <div className="icon text-info">
                    <i class="fas fa-dollar-sign"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="small-box inner-r bg-light shadow">
                  <div className="inner">
                    <h4>Yesterday Recharge</h4>
                    <h3>0৳</h3>
                    <p> Total Recharge: 0</p>
                  </div>
                  <div className="icon text-success">
                    <i class="fas fa-dollar-sign"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="small-box inner-r bg-light shadow">
                  <div className="inner">
                    <h4>Monthly Recharge</h4>
                    <h3>0৳</h3>
                    <p>Total Recharge: 0</p>
                  </div>
                  <div className="icon text-warning">
                    <i class="fas fa-dollar-sign"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="small-box inner-r bg-light shadow">
                  <div className="inner">
                    <h4>Total Recharge</h4>
                    <h3>0৳</h3>
                    <p>Total Recharge: 0</p>
                  </div>
                  <div className="icon text-danger">
                    <i class="fas fa-dollar-sign"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Banking Point Information  */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h3 className="m-0 text-dark">
                  Mobile Banking Point Information
                </h3>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-6">
                <div className="small-box inner-m bg-light shadow">
                  <div className="inner">
                    <h4>Today Mobile Banking</h4>
                    <h3>0৳</h3>
                    <p>Total: 0</p>
                  </div>
                  <div className="icon text-info">
                    <i class="fas fa-mobile-alt"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="small-box inner-m bg-light shadow">
                  <div className="inner">
                    <h4>Yesterday Mobile Banking</h4>
                    <h3>0৳</h3>
                    <p> Total: 0</p>
                  </div>
                  <div className="icon text-success">
                    <i class="fas fa-mobile-alt"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="small-box inner-m bg-light shadow">
                  <div className="inner">
                    <h4>Monthly Mobile Banking</h4>
                    <h3>0৳</h3>
                    <p> Total: 0</p>
                  </div>
                  <div className="icon text-warning">
                    <i class="fas fa-mobile-alt"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="small-box inner-m bg-light shadow">
                  <div className="inner">
                    <h4> Total Mobile Banking</h4>
                    <h3>0৳</h3>
                    <p> Total: 0</p>
                  </div>
                  <div className="icon text-danger">
                    <i class="fas fa-mobile-alt"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sim Purchase Information  */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h3 className="m-0 text-dark">Sim Purchase Information </h3>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-6">
                <div className="small-box inner-s bg-light shadow">
                  <div className="inner">
                    <h4>Today Sim Purchase </h4>
                    <h3>0৳</h3>
                    <p>Total Purchase: 0</p>
                  </div>
                  <div className="icon text-info">
                    <i class="fas fa-sim-card"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="small-box inner-s bg-light shadow">
                  <div className="inner">
                    <h4>Yesterday Sim Purchase</h4>
                    <h3>0৳</h3>
                    <p> Total Purchase: 0</p>
                  </div>
                  <div className="icon text-success">
                    <i class="fas fa-sim-card"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="small-box inner-s bg-light shadow">
                  <div className="inner">
                    <h4>Monthly Sim Purchase</h4>
                    <h3>0৳</h3>
                    <p> Total Purchase: 0</p>
                  </div>
                  <div className="icon text-warning">
                    <i class="fas fa-sim-card"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="small-box inner-s bg-light shadow">
                  <div className="inner">
                    <h4>Total Sim Purchase</h4>
                    <h3>0৳</h3>
                    <p> Total Sim Purchase: 0</p>
                  </div>
                  <div className="icon text-danger">
                    <i class="fas fa-sim-card"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Direct Bank Information  */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h3 className="m-0 text-dark">Direct Bank Information</h3>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-6">
                <div className="small-box inner-db bg-light shadow">
                  <div className="inner">
                    <h4>Today Direct Bank</h4>
                    <h3>0৳</h3>
                    <p>Total: 0</p>
                  </div>
                  <div className="icon text-info">
                    <i class="fas fa-university"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="small-box inner-db bg-light shadow">
                  <div className="inner">
                    <h4>Yesterday Direct Bank </h4>
                    <h3>0৳</h3>
                    <p> Total: 0</p>
                  </div>
                  <div className="icon text-success">
                    <i class="fas fa-university"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="small-box inner-db bg-light shadow">
                  <div className="inner">
                    <h4> Monthly Direct Bank</h4>
                    <h3>0৳</h3>
                    <p>Total: 0</p>
                  </div>
                  <div className="icon text-warning">
                    <i class="fas fa-university"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="small-box inner-db bg-light shadow">
                  <div className="inner">
                    <h4> Total Direct Bank</h4>
                    <h3>0৳</h3>
                    <p> Total: 0</p>
                  </div>
                  <div className="icon text-danger">
                    <i class="fas fa-university"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cargo Infromation  */}

        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h3 className="m-0 text-dark">Cargo Infromation</h3>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <section className="content">
          <div className="container-fluid">
            <div className="row g-1">
              <div className="col-lg-3 col-md-6 col-6">
                <div className="small-box inner-c bg-light shadow">
                  <div className="inner">
                    <h4>Today Cargo</h4>
                    <h3>0</h3>
                    <p>Total: 0</p>
                  </div>
                  <div className="icon text-info">
                    <i class="fas fa-ship"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="small-box inner-c bg-light shadow">
                  <div className="inner">
                    <h4>Yesterday Cargo</h4>
                    <h3>0</h3>
                    <p>Total: 0</p>
                  </div>
                  <div className="icon text-success">
                    <i class="fas fa-ship"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="small-box inner-c bg-light shadow">
                  <div className="inner">
                    <h4>Monthly Cargo</h4>
                    <h3>0</h3>
                    <p>Total: 0</p>
                  </div>
                  <div className="icon text-warning">
                    <i class="fas fa-ship"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="small-box inner-c bg-light shadow">
                  <div className="inner">
                    <h4>Total Cargo</h4>
                    <h3>0</h3>
                    <p>Total: 0</p>
                  </div>
                  <div className="icon text-danger">
                    <i class="fas fa-ship"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Accounts Information  */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h3 className="m-0 text-dark">Accounts Information</h3>
                <small>Admin sales to Merchant</small>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-6">
                <div className="small-box inner-ai bg-light shadow">
                  <div className="inner">
                    <h4>Today Sales </h4>
                    <h3>0৳</h3>
                    <p>Total Sales Amount: 0</p>
                  </div>
                  <div className="icon text-info">
                    <i class="fas fa-users-cog"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="small-box inner-ai bg-light shadow">
                  <div className="inner">
                    <h4>Yesterday Sales </h4>
                    <h3>0৳</h3>
                    <p>Total Sales Amount: 0</p>
                  </div>
                  <div className="icon text-success">
                    <i class="fas fa-users-cog"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="small-box inner-ai bg-light shadow">
                  <div className="inner">
                    <h4>Monthly Sales </h4>
                    <h3>0৳</h3>
                    <p>Total Sales Amount: 0</p>
                  </div>
                  <div className="icon text-warning">
                    <i class="fas fa-users-cog"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="small-box inner-ai bg-light shadow">
                  <div className="inner">
                    <h4>Total Sales </h4>
                    <h3>0৳</h3>
                    <p>Total Sales Amount: 0</p>
                  </div>
                  <div className="icon text-danger">
                    <i class="fas fa-users-cog"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;

