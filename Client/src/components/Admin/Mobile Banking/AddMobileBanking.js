import { MDBDataTable } from "mdbreact";
import React from "react";
import { Link } from "react-router-dom";
import Header from '../../../pages/Header';
import Footer from "../../Footer/Footer";

const AddMobileBanking = () => {
  const data = {
    columns: [
      {
        label: "Number",
        field: "phone",
        sort: "asc",
      },
      {
        label: "Amounts",
        field: "amounts",
        sort: "asc",
      },
      {
        label: "Banking Operator",
        field: "operator",
        sort: "asc",
      },
      {
        label: "Cost",
        field: "cost",
        sort: "asc",
      },
      {
        label: "Type",
        field: "type",
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
        operator: "Bkash",
        cost: "1020৳",
        type: "Personal",
        status: "Pending",
        action: <div className="d-flex align-items-center">
          {" "}
          <Link to="/edit-news"><i className="fas fa-edit" style={{ color: "#660000" }}></i></Link>
          <i className="fas fa-eye mx-2"></i>
          <i className="fas fa-trash text-danger"></i>
        </div>
      },
      {
        phone: "+8801631112444",
        amounts: "1000৳",
        operator: "Bkash",
        cost: "1020৳",
        type: "Personal",
        status: "Pending",
        action: <div className="d-flex align-items-center">
          {" "}
          <Link to="/edit-news"><i className="fas fa-edit" style={{ color: "#660000" }}></i></Link>
          <i className="fas fa-eye mx-2"></i>
          <i className="fas fa-trash text-danger"></i>
        </div>
      },
      {
        phone: "+8801631112444",
        amounts: "1000৳",
        operator: "Bkash",
        cost: "1020৳",
        type: "Personal",
        status: "Pending",
        action: <div className="d-flex align-items-center">
          {" "}
          <Link to="/edit-news"><i className="fas fa-edit" style={{ color: "#660000" }}></i></Link>
          <i className="fas fa-eye mx-2"></i>
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
            <h3>Add Mobile Banking</h3>
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
                  <Link to="/add-sim-purchase">Add Sim Purchase</Link>
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
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    className="form-control"
                    type="number"
                    name=""
                    id="name"
                    aria-describedby="phone"
                    placeholder="Enter Phone Number"
                  />
                  <div id="phone" className="form-text">
                    Enter mobile number of client
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
                    Enter recharge amount
                  </div>

                  <label htmlFor="sim">Mobile Banking Operator</label>
                  <select
                    className="form-select form-select-sm form-control"
                    aria-label=".form-select-sm example"
                    id="sim"
                    aria-describedby="sim"
                  >
                    <option defaultValue>Select Mobile Banking Operator</option>
                    <option value="1">Bkash</option>
                    <option value="2">Rocket</option>
                    <option value="3">Nagad</option>
                    <option value="4">Upay</option>
                    <option value="5">Ucash</option>
                  </select>
                  <div id="sim" className="form-text">
                    Select the mobile banking operator to be recharge
                  </div>

                  <label htmlFor="type">Type</label>
                  <select
                    className="form-select form-select-sm form-control"
                    aria-label=".form-select-sm example"
                    id="type"
                    aria-describedby="type"
                  >
                    <option defaultValue>Select Type</option>
                    <option value="1">Personal</option>
                    <option value="2">Merchant</option>
                    <option value="3">Agent</option>
                  </select>
                  <div id="type" className="form-text">
                    Select the type
                  </div>
                  <input className="btn button-common-color my-2" type="button" value="Add Mobile Banking" />
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

export default AddMobileBanking;
