import axios from "axios";
import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import Header from '../../../pages/Header';
import Footer from "../../Footer/Footer";

const AddMerchant = () => {
  const [data, setData] = useState({})
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  console.log(loading);
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  const form = useRef(null)
  const submit = e => {

    e.preventDefault();
    setLoading(true);
    const formdata = new FormData(form.current);
    axios.post('http://localhost:5000/user/register', formdata)
      .then(function (response) {
        if (response.status === 200) {
          Toast.fire({
            icon: "success",
            title: response.data.msg,
          });
        }
        else if (response.status === 400) {
          Toast.fire({
            icon: "error",
            title: response.data.msg,
          });

        }
        setLoading(false);
      })
      .catch((error) => {
        setData(error.response.data.data);
        setError(error.response.data.errors);
        setLoading(false);
      });

  }

  return (
    <div>
      <Header />
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid pt-3">
            <h3>Add Merchant</h3>
            <hr />
            {loading ? <div className="text-center">
              <div class="spinner-border text-center text-danger" style={{ width: "13rem", height: '13rem' }} role="status">
                <span class="sr-only text-danger">Loading...</span>
              </div>
            </div> : <form ref={form} encType="multipart/form-data" onSubmit={submit} className="p-3 bg-light add-merchant">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="m-name">Merchant Name</label>
                  <input

                    className={error.name ? "error form-control" : "form-control"}
                    type="text"
                    name="name"
                    id="m-name"
                    defaultValue={data.name}
                    placeholder="Enter Merchant Name"
                  />
                  {error.name && <small className="text-danger m-0 p-0">{error.name.msg}</small>}
                </div>
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="s-name">Shop Name</label>
                  <input
                    className={error.shope_name ? "error form-control" : "form-control"}
                    type="text"
                    name="shope_name"
                    id="s-name"
                    defaultValue={data.shope_name}
                    placeholder="Enter Shop Name"

                  />
                  {error.shope_name && <small className="text-danger m-0 p-0">{error.shope_name.msg}</small>}
                </div>
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="address">Home Address</label>
                  <textarea
                    name="user_address"
                    defaultValue={data.user_address}
                    id="address"
                    cols="30"
                    rows="3"
                    className={error.user_address ? "error form-control" : "form-control"}
                    placeholder="Enter BD Address"
                  ></textarea>
                  {error.user_address && <small className="text-danger m-0 p-0">{error.user_address.msg}</small>}
                </div>
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="s-address">Shop Address</label>
                  <textarea

                    defaultValue={data.shop_address}
                    name="shop_address"
                    id="s-address"
                    cols="30"
                    rows="3"
                    className={error.shop_address ? "error form-control" : "form-control"}
                    placeholder=" Enter Shop Address"
                  ></textarea>
                  {error.shop_address && <small className="text-danger m-0 p-0">{error.shop_address.msg}</small>}
                </div>
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="number">Contact Number</label>
                  <input

                    defaultValue={data.number}
                    className={error.number ? "error form-control" : "form-control"}
                    type="text"
                    name="number"
                    id="number"
                    placeholder="Enter Contact Number"
                  />
                  {error.number && <small className="text-danger m-0 p-0">{error.number.msg}</small>}
                </div>
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="email">Email</label>
                  <input

                    defaultValue={data.email}
                    className={error.email ? "error form-control" : "form-control"}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Email"
                  />
                  {error.email && <small className="text-danger m-0 p-0">{error.email.msg}</small>}
                </div>
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="image">Image</label>
                  <input
                    defaultValue={data.avatar}
                    className={error.avatar ? "error form-control" : "form-control"}
                    type="file"
                    name="avatar"
                    id="image"
                  />
                  {error.avatar && <small className="text-danger m-0 p-0">{error.avatar.msg}</small>}
                </div>
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="email">Password</label>
                  <input

                    defaultValue={data.password}
                    className={error.password ? "error form-control" : "form-control"}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Password"
                  />
                  {error.password && <small className="text-danger m-0 p-0">{error.password.msg}</small>}
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="passport">Passport No</label>
                  <input

                    defaultValue={data.passport_no}
                    className={error.passport_no ? "error form-control" : "form-control"}
                    type="text"
                    name="passport_no"
                    id="passport"
                    placeholder="Enter Passport No"
                  />
                  {error.passport_no && <small className="text-danger m-0 p-0">{error.passport_no.msg}</small>}
                </div>

              </div>
              <hr />
              <h4>Bank Account Information</h4>
              <hr />
              <div className="row">

                <div className="col-lg-6 col-md-6">
                  <label htmlFor="bank-name">Bank Name</label>
                  <input
                    defaultValue={data.bank_name}
                    className={error.bank_name ? "error form-control" : "form-control"}
                    type="text"
                    name="bank_name"
                    id="bank-name"
                    placeholder="Enter Bank Name"
                  />
                  {error.bank_name && <small className="text-danger m-0 p-0">{error.bank_name.msg}</small>}
                </div>
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="account-name">Account Name</label>
                  <input
                    defaultValue={data.account_name}
                    className={error.account_name ? "error form-control" : "form-control"}
                    type="text"
                    name="account_name"
                    id="account-name"
                    placeholder="Enter Account Name"
                  />
                  {error.account_name && <small className="text-danger m-0 p-0">{error.account_name.msg}</small>}
                </div>
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="account-number">Account Number</label>
                  <input
                    defaultValue={data.account_number}
                    className={error.account_number ? "error form-control" : "form-control"}
                    type="text"
                    name="account_number"
                    id="account-number"
                    placeholder="Enter Account Number"
                  />
                  {error.account_number && <small className="text-danger m-0 p-0">{error.account_number.msg}</small>}
                </div>
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="bank-b-name">Bank Branch Name</label>
                  <input

                    defaultValue={data.bank_b_name}
                    className={error.bank_b_name ? "error form-control" : "form-control"}
                    type="text"
                    name="bank_b_name"
                    id="bank-b-name"
                    placeholder="Enter Bank Branch Name"
                  />
                  {error.bank_b_name && <small className="text-danger m-0 p-0">{error.bank_b_name.msg}</small>}
                </div>
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="s-code">Switt Code</label>
                  <input

                    defaultValue={data.switt_code}
                    className={error.switt_code ? "error form-control" : "form-control"}
                    type="text"
                    name="switt_code"

                    id="s-code"
                    placeholder="Enter Switt Code"
                  />

                  {error.switt_code && <small className="text-danger m-0 p-0">{error.switt_code.msg}</small>}
                </div>
              </div>
              <h4>Mobile Banking Information</h4>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="bkash">Bkash Number</label>
                  <input

                    defaultValue={data.bkash}
                    className={error.bkash ? "error form-control" : "form-control"}
                    type="text"
                    name="bkash"
                    id="bkash"
                    placeholder="Enter Bkash Number"
                  />
                  {error.bkash && <small className="text-danger m-0 p-0">{error.bkash.msg}</small>}
                </div>
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="nagad">Nagad Number</label>
                  <input

                    defaultValue={data.nagad}
                    className={error.nagad ? "error form-control" : "form-control"}
                    type="text"
                    name="nagad"
                    id="nagad"
                    placeholder="Enter Nagad Number"
                  />
                  {error.nagad && <small className="text-danger m-0 p-0">{error.nagad.msg}</small>}
                </div>
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="rocket">Rocket Number</label>
                  <input

                    defaultValue={data.rocket}
                    className={error.rocket ? "error form-control" : "form-control"}
                    type="text"
                    name="rocket"
                    id="rocket"
                    placeholder="Enter Rocket Number"
                  />
                  {error.rocket && <small className="text-danger m-0 p-0">{error.rocket.msg}</small>}
                </div>
              </div>
              <hr />
              <h4>Reference Person Information</h4>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="r-name">Name</label>
                  <input

                    defaultValue={data.r_name}
                    className={error.r_name ? "error form-control" : "form-control"}
                    type="text"
                    name="r_name"
                    id="r-name"
                    placeholder="Enter Reference Person Name"
                  />
                  {error.r_name && <small className="text-danger m-0 p-0">{error.r_name.msg}</small>}
                </div>
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="r-number">Phone Number</label>
                  <input
                    defaultValue={data.r_number}
                    className={error.r_number ? "error form-control" : "form-control"}
                    type="text"
                    name="r_number"
                    id="r-number"
                    placeholder="Enter Reference Person Number"
                  />
                  {error.r_number && <small className="text-danger m-0 p-0">{error.r_number.msg}</small>}
                </div>
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="r-relation">Relation</label>
                  <input
                    defaultValue={data.r_relation}
                    className={error.r_relation ? "error form-control" : "form-control"}
                    type="text"
                    name="r_relation"
                    id="r-relation"
                    placeholder="Enter Reference Person Relation"
                  />

                  {error.r_relation && <small className="text-danger m-0 p-0">{error.r_relation.msg}</small>}
                </div>
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="r-address">Address</label>
                  <textarea
                    defaultValue={data.r_address}
                    name="r_address"
                    id="r-address"
                    cols="30"
                    rows="3"
                    className={error.r_address ? "error form-control" : "form-control"}
                    placeholder="Enter Reference Person Address"
                  ></textarea>
                  {error.r_address && <small className="text-danger m-0 p-0">{error.r_address.msg}</small>}
                </div>
              </div>
              <input

                onClick={submit}
                className="btn btn-danger button-common-color"
                type="button"
                value="Register"
              />

            </form>}

          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AddMerchant;
