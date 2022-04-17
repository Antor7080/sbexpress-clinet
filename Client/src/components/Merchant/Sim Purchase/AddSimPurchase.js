import { MDBDataTable } from "mdbreact";
import React from "react";
import { Link } from "react-router-dom";
import Header from '../../../pages/Header';
import Footer from "../../Footer/Footer";

const AddSimPurchase = () => {
  const data = {
    columns: [
      {
        label: "Phone Number",
        field: "phone",
        sort: "asc"
      },
      {
        label: "Amounts",
        field: "amounts",
        sort: "asc"
      },
      {
        label: "Sim Operator",
        field: "operator",
        sort: "asc"
      },
      {
        label: "Merchant Name",
        field: "merchant",
        sort: "asc"
      },
    ],
    rows: [
      {
        phone: "+8801631112444",
        amounts: "1000৳",
        operator: "Airtel",
        merchant: "Antor",
      },
      {
        phone: "+8801631112444",
        amounts: "1000৳",
        operator: "Airtel",
        merchant: "Antor",
      },
      {
        phone: "+8801631112444",
        amounts: "1000৳",
        operator: "Airtel",
        merchant: "Antor",
      },
      {
        phone: "+8801631112444",
        amounts: "1000৳",
        operator: "Airtel",
        merchant: "Antor",
      },
      {
        phone: "+8801631112444",
        amounts: "1000৳",
        operator: "Airtel",
        merchant: "Antor",
      },
      {
        phone: "+8801631112444",
        amounts: "1000৳",
        operator: "Airtel",
        merchant: "Antor",
      },
      {
        phone: "+8801631112444",
        amounts: "1000৳",
        operator: "Airtel",
        merchant: "Antor",
      },
      {
        phone: "+8801631112444",
        amounts: "1000৳",
        operator: "Airtel",
        merchant: "Antor",
      },
      {
        phone: "+8801631112444",
        amounts: "1000৳",
        operator: "Airtel",
        merchant: "Antor",
      },
      {
        phone: "+8801631112444",
        amounts: "1000৳",
        operator: "Airtel",
        merchant: "Antor",
      },
      {
        phone: "+8801631112444",
        amounts: "1000৳",
        operator: "Airtel",
        merchant: "Antor",
      },

    ],
  };

  return (
    <div>
      <Header />
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid pt-3">
            <h3>Add Sim Purchase</h3>
            <hr />
            <div className="pending-upper-subcategory mb-2">
              <span>
                <button className="btn button-common-color mb-2">
                  <Link to="/add-balance">Add Balance</Link>
                </button>
              </span>{" "}
              <span>
                <button className="btn button-common-color mb-2">
                  <Link to="/add-recharge">Add Recharge</Link>
                </button>
              </span>{" "}
              <span>
                <button className="btn button-common-color mb-2">
                  <Link to="/add-mobile-banking">Add Mobile Banking</Link>
                </button>
              </span>{" "}
              <span>
                <button className="btn button-common-color mb-2">
                  <Link to="/add-direct-bank">Add Direct Bank</Link>
                </button>
              </span>
            </div>
            <div className="row mt-5">
              <div className="col-lg-4 col-md-4">

                <form className="">
                  <label htmlFor="customer">Customer Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id="customer"
                    aria-describedby="customer"
                    placeholder="Enter Customer Name"
                  />
                  <div id="customer" className="form-text mb-3">
                    Enter cutomer name
                  </div>
                  <label htmlFor="sim">Sim Name</label>
                  <select
                    className="form-select form-select-sm form-control"
                    aria-label=".form-select-sm example"
                    id="sim"
                    aria-describedby="sim"
                  >
                    <option defaultValue>Select Sim Name</option>
                    <option value="1">Airtel</option>
                    <option value="2">Banglalink</option>
                    <option value="3">Grameenphone</option>
                    <option value="4">Teletalk</option>
                  </select>
                  <div id="sim" className="form-text mb-3">
                    Select the sim operator to purchase
                  </div>
                  <label htmlFor="phone">Sim Number</label>
                  <input
                    className="form-control"
                    type="number"
                    name=""
                    id="name"
                    aria-describedby="phone"
                    placeholder="Enter Sim Number"
                  />
                  <div id="phone" className="form-text mb-3">
                    Enter sim number of client
                  </div>


                  <label htmlFor="amounts">Amount</label>
                  <input
                    className="form-control"
                    type="number"
                    name=""
                    id="amounts"
                    aria-describedby="amounts"
                    placeholder="Enter Amounts"
                  />
                  <div id="amounts" className="form-text mb-3">
                    Enter purchase amount
                  </div>


                  <button className="btn button-common-color mb-2">
                    Add Sim
                  </button>
                </form>
              </div>
              <div className="col-lg-8 col-md-8">
                <div class="row">
                  <div class="col-md-12 mb-3">
                    <div class=" card table-responsive">
                      <div class=" card table-responsive-body table-responsive">
                        <MDBDataTable
                          className="text-center"
                          bordered
                          hover
                          data={data}
                        />
                      </div>
                    </div>
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

export default AddSimPurchase;
