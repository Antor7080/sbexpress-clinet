import { MDBDataTable } from "mdbreact";
import React from "react";
import { Link } from "react-router-dom";
import Header from '../../../pages/Header';
import Footer from "../../Footer/Footer";

const AddDirectBank = () => {
  const data = {
    columns: [
      {
        label: "Account Number",
        field: "phone",
        sort: "asc",
      },
      {
        label: "Amounts",
        field: "amounts",
        sort: "asc",
      },
      {
        label: "Bank Name",
        field: "operator",
        sort: "asc",
      },
      {
        label: "Status",
        field: "status",
        sort: "asc",
      },
      {
        label: "Action",
        field: "action",
        sort: "asc",
      },
    ],
    rows: [
      {
        phone: "+8801631112444",
        amounts: "1000৳",
        operator: "Dutch Bangla",
        status: "Pending",
        action: <div className="d-flex align-items-center justify-content-between">
          {" "}
          <Link to="/edit-news"><i className="fas fa-edit" style={{ color: "#660000" }}></i></Link>
          <i className="fas fa-eye"></i>
          <i className="fas fa-trash text-danger"></i>
        </div>
      },
      {
        phone: "+8801631112444",
        amounts: "1000৳",
        operator: "UCB",
        status: "Pending",
        action: <div className="d-flex align-items-center justify-content-between ">
          {" "}
          <Link to="/edit-news"><i className="fas fa-edit" style={{ color: "#660000" }}></i></Link>
          <i className="fas fa-eye"></i>
          <i className="fas fa-trash text-danger"></i>
        </div>
      },
      {
        phone: "+8801631112444",
        amounts: "1000৳",
        operator: "Islami Bank",
        status: "Pending",
        action: <div className="d-flex align-items-center justify-content-between">
          {" "}
          <Link to="/edit-news"><i className="fas fa-edit" style={{ color: "#660000" }}></i></Link>
          <i className="fas fa-eye"></i>
          <i className="fas fa-trash text-danger"></i>
        </div>
      },

    ],
  };

  return (
    <div>
      <Header />
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid pt-3">
            <h3>Add Direct Bank</h3>
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
                  <Link to="/add-sim-purchase">Add Sim Purchase</Link>
                </button>
              </span>
            </div>
            <div className="row mt-5">
              <div className="col-lg-4 col-md-4">
                <form className="">
                  <label htmlFor="phone">Bank Account Number</label>
                  <input
                    className="form-control"
                    type="number"
                    name=""
                    id="name"
                    aria-describedby="phone"
                    placeholder="Enter Bank Account Number"
                  />
                  <div id="phone" className="form-text">
                    Enter bank account number of client
                  </div>

                  <label htmlFor="amounts">Amounts</label>
                  <input
                    className="form-control"
                    type="number"
                    name=""
                    id="amounts"
                    aria-describedby="amounts"
                    placeholder="Enter Amounts"
                  />
                  <div id="amounts" className="form-text">
                    Enter amount to be entered the bank account
                  </div>

                  <label htmlFor="sim">Bank Name</label>
                  <select
                    className="form-select form-select-sm form-control"
                    aria-label=".form-select-sm example"
                    id="sim"
                    aria-describedby="sim"
                  >
                    <option defaultValue>Select Bank Name</option>
                    <option value="1">Dutch Bangla Bank</option>
                    <option value="2">UCB Bank</option>
                    <option value="3">Islami Bank Ltd</option>
                    <option value="4">Upay</option>
                    <option value="5">Ucash</option>
                  </select>

                  <button className="btn button-common-color my-2">
                    Add Bank
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

export default AddDirectBank;
