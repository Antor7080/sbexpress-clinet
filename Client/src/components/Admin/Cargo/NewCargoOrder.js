import React from "react";
import Header from '../../../pages/Header';
import Footer from "../../Footer/Footer";

const NewCargoOrder = () => {
  return (
    <div>
      <Header />
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid pt-3">
            <h3>New Order</h3>
            <hr />
            <form className="cargo-order">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="cutomer-info p-3 mb-2">
                    <h4>Customer Information</h4>
                    <label htmlFor="f-name">First Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name=""
                      id="f-name"
                      placeholder="Customer Name"
                    />
                    <label htmlFor="s-name">Surname</label>
                    <input
                      className="form-control"
                      type="text"
                      name=""
                      id="s-name"
                      placeholder="Customer Surname"
                    />
                    <label htmlFor="birth">Date of birth</label>
                    <input
                      className="form-control"
                      type="date"
                      name=""
                      id="birth"
                      placeholder="Customer Surname"
                    />
                    <label htmlFor="document">Document Number</label>
                    <input
                      className="form-control"
                      type="text"
                      name=""
                      id="document"
                      placeholder="Enter Document Number"
                    />
                    <label htmlFor="phone">Phone</label>
                    <input
                      className="form-control"
                      type="number"
                      name=""
                      id="phone"
                      placeholder="Enter Customer Phone Number"
                    />
                    <label htmlFor="email">Email</label>
                    <input
                      className="form-control"
                      type="email"
                      name=""
                      id="email"
                    />
                    <label htmlFor="address">Address</label>
                    <textarea
                      className="form-control"
                      name=""
                      id="address"
                      cols="30"
                      rows="4"
                      placeholder="Enter Customer Address"
                    ></textarea>

                    <div>
                      <label htmlFor="country" className="form-label">
                        Country
                      </label>
                      <input
                        className="form-control"
                        list="datalistOptions"
                        id="country"
                        placeholder="Select Customer Country"
                      />
                      <datalist id="datalistOptions">
                        <option value="Bangladesh"></option>
                        <option value="India"></option>
                        <option value="Switzerland"></option>
                        <option value="Autralia"></option>
                        <option value="Nepal"></option>
                      </datalist>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="receiver-info p-3 mb-2">
                    <h4>Receiver Information</h4>
                    <label htmlFor="r-f-name">First Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name=""
                      id="r-f-name"
                      placeholder="Customer Name"
                    />
                    <label htmlFor="r-s-name">Surname</label>
                    <input
                      className="form-control"
                      type="text"
                      name=""
                      id="r-s-name"
                      placeholder="Receiver Surname"
                    />
                    <label htmlFor="r-birth">Date of birth</label>
                    <input
                      className="form-control"
                      type="date"
                      name=""
                      id="r-birth"
                      placeholder="Receiver Surname"
                    />
                    <label htmlFor="r-document">Document Number</label>
                    <input
                      className="form-control"
                      type="text"
                      name=""
                      id="r-document"
                      placeholder="Enter Receiver Document Number"
                    />
                    <label htmlFor="r-phone">Phone</label>
                    <input
                      className="form-control"
                      type="number"
                      name=""
                      id="r-phone"
                      placeholder="Enter Receiver Phone Number"
                    />
                    <label htmlFor="r-email">Email</label>
                    <input
                      className="form-control"
                      type="email"
                      name=""
                      id="r-email"
                    />
                    <label htmlFor="r-address">Address</label>
                    <textarea
                      className="form-control"
                      name=""
                      id="r-address"
                      cols="30"
                      rows="4"
                      placeholder="Enter Receiver Address"
                    ></textarea>
                    <label htmlFor="">Delivery Type</label>
                    <select className="form-control" name="" id="">
                      <option defaultValue>Select Delivery Type</option>
                      <option value="1">Goods</option>
                      <option value="2">Documents</option>
                    </select>
                    <div>
                      <label htmlFor="r-country" className="form-label">
                        Country
                      </label>
                      <input
                        className="form-control"
                        list="datalistOptions"
                        id="r-country"
                        placeholder="Select Receiver Country"
                      />
                      <datalist id="datalistOptions">
                        <option value="Bangladesh"></option>
                        <option value="India"></option>
                        <option value="Switzerland"></option>
                        <option value="Autralia"></option>
                        <option value="Nepal"></option>
                      </datalist>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <h2>Order Details</h2>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="order-left p-3 mb-2">
                    <label htmlFor="a-charge">Additional Carge</label>
                    <input className="form-control" type="number" name="" id="a-charge" placeholder="" />
                    <label htmlFor="t-charge">Total Carge</label>
                    <input className="form-control" type="number" name="" id="t-charge" placeholder="" disabled />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="order-right p-3 mb-2">
                    <label htmlFor="a-charge">Additional Carge</label>
                    <input className="form-control" type="number" name="" id="a-charge" placeholder="" />
                    <label htmlFor="t-charge">Total Carge</label>
                    <textarea className="form-control" name="" id="" cols="30" rows="4"></textarea>
                  </div>
                </div>
              </div>
              <input className="btn button-common-color my-3" type="button" value="Send Order" />
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default NewCargoOrder;
