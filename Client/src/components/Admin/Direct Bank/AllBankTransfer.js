import { MDBDataTable } from "mdbreact";
import React from "react";
import Header from '../../../pages/Header';

const data = {
  columns: [
    {
      label: "SL",
      field: "sl",
      sort: "asc",
    },
    {
      label: "Number",
      field: "number",
      sort: "asc",
    },
    {
      label: "Amount",
      field: "amount",
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
      label: "Service",
      field: "service",
      sort: "asc",
    },
    {
      label: "Merchant",
      field: "merchant",
      sort: "asc",
    },
    {
      label: "P Balance",
      field: "pbalance",
      sort: "asc",
    },
    {
      label: "C Balance",
      field: "cbalance",
      sort: "asc",
    },
    {
      label: "Update Time",
      field: "update",
      sort: "asc",
    },
    {
      label: "Pin",
      field: "pin",
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
      sl: "1",
      number: "+8801634289096",
      amount: "1000",
      cost: "1020",
      type: "Personal",
      service: "Bkash",
      merchant: "Antor",
      pbalance: "2000",
      cbalance: "3000",
      update: "2022-02-09 04:42:03",
      pin: "1234",
      status: "pending",
      action: (
        <div className="d-flex align-items-center pending-button">
          <button
            type="button"
            class="btn btn-success"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Confirm
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content ">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Confirm
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body pending-modal">
                  <label htmlFor="">Mobile Number</label>
                  <input
                    className="form-control"
                    type="number"
                    name=""
                    id=""
                    value="01634134415"
                    disabled
                  />
                  <label htmlFor="">Amount</label>
                  <input
                    className="form-control"
                    type="number"
                    name=""
                    id=""
                    value="1000"
                    disabled
                  />
                  <label htmlFor="">Pin</label>
                  <input
                    className="form-control"
                    type="number"
                    name=""
                    id=""
                    placeholder="Enter Pin"
                  />
                  <label htmlFor="">Service</label>
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id=""
                    value="Bkash"
                    disabled
                  />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger border border-danger"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary button-common-color"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            class="btn btn-danger"
            data-toggle="modal"
            data-target="#exampleModal2"
          >
            Delete
          </button>

          <div
            class="modal fade"
            id="exampleModal2"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content ">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Are you want sure to delete?
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div class="modal-footer border-0">
                  <button
                    type="button"
                    className="btn btn-danger border border-danger"
                    data-dismiss="modal"
                  >
                    No
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary button-common-color"
                  >
                    Yes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ],
};

const AllBankTransfer = () => {
  return (
    <div>
      <Header />
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid pt-3">
            <h3>All Bank Transfer</h3>
            <hr />
            <div className="row my-3 gx-1">
              <div className="col-lg-2">
                <label htmlFor="">Number</label>
                <input className="form-control" type="number" name="" id="" />
              </div>
              <div className="col-lg-2">
                <label htmlFor="">Merchant</label>
                <select className="form-control" name="" id="">
                  <option value="">Select Merchant</option>
                  <option value="">Antor</option>
                  <option value="">Jahid</option>
                </select>
              </div>
              <div className="col-lg-2">
                <label htmlFor="">Service</label>
                <select className="form-control" name="" id="">
                  <option value="">Any</option>
                  <option value="">Bkash</option>
                  <option value="">Rocket</option>
                </select>
              </div>
              <div className="col-lg-2">
                <label htmlFor="">Status</label>
                <select className="form-control" name="" id="">
                  <option value="">Select Status</option>
                  <option value="">Pending</option>
                </select>
              </div>
              <div className="col-lg-2">
                <label htmlFor="">From Date</label>
                <input className="form-control" type="date" name="" id="" />
              </div>
              <div className="col-lg-2">
                <label htmlFor="">To Date</label>
                <input className="form-control" type="date" name="" id="" />
              </div>
            </div>
            <div class=" card table-responsive">
              <div class=" card table-responsive-body table-responsive">
                <MDBDataTable
                  className=" pending-table"
                  bordered
                  hover
                  data={data}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllBankTransfer;
