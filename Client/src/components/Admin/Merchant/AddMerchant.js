import axios from "axios";
import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import Header from '../../../pages/Header';
import Footer from "../../Footer/Footer";

const AddMerchant = () => {
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
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
    number: 0,
    shope_name: '',
    user_address: '',
    shop_address: '',
    passport_no: ''

  })
  const [image, setImages] = useState([])
  const handlImage = (e) => {
    setImages({ ...image, [e.target.name]: e.target.files[0] })
  }

  const handleInput = (e) => {
    e.persist()
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
  }


  const submit = e => {
    e.preventDefault();
    const formdata = new FormData(form.current);
    /* formdata.append("name", userInfo.name);
    formdata.append("email", userInfo.email);
    formdata.append("password", userInfo.password);
    formdata.append("shope_name", userInfo.shope_name);
    formdata.append("shope_name", userInfo.shope_name);
    formdata.append("user_address", userInfo.user_address);
    formdata.append("shop_address", userInfo.shop_address);
    formdata.append('avatar', image.avatar);
    formdata.append('passport_no', image.passport_no);
    console.log(image.avatar); */

    /*  console.log(data1);
     var object = {};
     data1.forEach(function (value, key) {
       object[key] = value;
     });
     console.log(object);
     var json = JSON.stringify(object); */
    /*    axios({
         method: 'post',
         url: 'https://sbexpressbd.com/Server/user/register',
         data: object,
         config: { headers: { 'Content-Type': 'multipart/form-data' } }
       }) */

    axios.post('https://sbexpressbd.com/Server/user/register', formdata)
      .then(function (response) {
        console.log(response);
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
          console.log(response);
        }
      })
      .catch((error) => {
        console.log("ERROR:: ", error.response.data);
        // serErrors(error.response.data.errors);
        Toast.fire({
          icon: "error",
          title: error.response.data.msg,
        });

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
            <form ref={form} encType="multipart/form-data" onSubmit={submit} className="p-3 add-merchant">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="m-name">Merchant Name</label>
                  <input
                    onChange={handleInput}
                    defaultValue={userInfo.name}
                    className="form-control"
                    type="text"
                    name="name"
                    id="m-name"
                    placeholder="Enter Merchant Name"
                  />
                </div>
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="s-name">Shop Name</label>
                  <input
                    onChange={handleInput}
                    defaultValue={userInfo.shope_name}
                    className="form-control"
                    type="text"
                    name="shope_name"
                    id="s-name"
                    placeholder="Enter Shop Name"
                  />
                </div>
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="address">BD Address</label>
                  <textarea
                    onChange={handleInput}
                    defaultValue={userInfo.user_address}
                    name="user_address"
                    id="address"
                    cols="30"
                    rows="3"
                    className="form-control"
                    placeholder="Enter BD Address"
                  ></textarea>
                </div>
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="s-address">Shop Address</label>
                  <textarea
                    onChange={handleInput}
                    defaultValue={userInfo.shop_address}
                    name="shop_address"
                    id="s-address"
                    cols="30"
                    rows="3"
                    className="form-control"
                    placeholder=" Enter Shop Address"
                  ></textarea>
                </div>
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="number">Contact Number</label>
                  <input
                    onChange={handleInput}
                    defaultValue={userInfo.number}
                    className="form-control"
                    type="text"
                    name="number"
                    id="number"
                    placeholder="Enter Contact Number"
                  />
                </div>
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="email">Email</label>
                  <input
                    onChange={handleInput}
                    defaultValue={userInfo.email}
                    className="form-control"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="image">Image</label>
                  <input
                    onChange={handlImage}
                    className="form-control"
                    type="file"
                    name="avatar"
                    id="image"
                  />
                </div>
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="email">Password</label>
                  <input
                    onChange={handleInput}
                    defaultValue={userInfo.password}
                    className="form-control"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Password"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="passport">Passport No</label>
                  <input
                    onChange={handleInput}
                    defaultValue={userInfo.passport_no}
                    className="form-control"
                    type="text"
                    name="passport_no"
                    id="passport"
                    placeholder="Enter Passport No"
                  />
                </div>
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="bank-info">Bank Account Information</label>
                  <input
                    onChange={handleInput}
                    defaultValue={userInfo.name}
                    className="form-control"
                    type="text"
                    name="bank_info"
                    id="bank-info"
                    placeholder="Enter Bank Account Information"
                  />
                </div>
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="bank-name">Bank Name</label>
                  <input
                    onChange={handleInput}
                    defaultValue={userInfo.name}
                    className="form-control"
                    type="text"
                    name="bank_name"
                    id="bank-name"
                    placeholder="Enter Bank Name"
                  />
                </div>
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="account-name">Account Name</label>
                  <input
                    onChange={handleInput}
                    defaultValue={userInfo.account_name}
                    className="form-control"
                    type="text"
                    name="account_name"
                    id="account-name"
                    placeholder="Enter Account Name"
                  />
                </div>
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="account-number">Account Number</label>
                  <input
                    onChange={handleInput}
                    defaultValue={userInfo.account_number}
                    className="form-control"
                    type="text"
                    name="account_number"
                    id="account-number"
                    placeholder="Enter Account Number"
                  />
                </div>
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="bank-b-name">Bank Branch Name</label>
                  <input
                    onChange={handleInput}
                    defaultValue={userInfo.bank_b_name}
                    className="form-control"
                    type="text"
                    name="bank_b_name"
                    id="bank-b-name"
                    placeholder="Enter Bank Branch Name"
                  />
                </div>
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="s-code">Switt Code</label>
                  <input
                    onChange={handleInput}
                    defaultValue={userInfo.switt_code}
                    className="form-control"
                    type="text"
                    name="switt_code"
                    id="s-code"
                    placeholder="Enter Switt Code"
                  />
                </div>
              </div>
              <hr />
              <h4>Mobile Banking Information</h4>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="bkash">Bkash Number</label>
                  <input
                    onChange={handleInput}
                    defaultValue={userInfo.name}
                    className="form-control"
                    type="text"
                    name="bkash"
                    id="bkash"
                    placeholder="Enter Bkash Number"
                  />
                </div>
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="nagad">Nagad Number</label>
                  <input
                    onChange={handleInput}
                    defaultValue={userInfo.name}
                    className="form-control"
                    type="text"
                    name="nagad"
                    id="nagad"
                    placeholder="Enter Nagad Number"
                  />
                </div>
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="rocket">Rocket Number</label>
                  <input
                    onChange={handleInput}
                    defaultValue={userInfo.name}
                    className="form-control"
                    type="text"
                    name="rocket"
                    id="rocket"
                    placeholder="Enter Rocket Number"
                  />
                </div>
              </div>
              <hr />
              <h4>Reference Person Information</h4>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="r-name">Name</label>
                  <input
                    onChange={handleInput}
                    defaultValue={userInfo.name}
                    className="form-control"
                    type="text"
                    name="r_name"
                    id="r-name"
                    placeholder="Enter Reference Person Name"
                  />
                </div>
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="r-number">Phone Number</label>
                  <input
                    onChange={handleInput}
                    className="form-control"
                    type="text"
                    name="r_number"
                    id="r-number"
                    placeholder="Enter Reference Person Number"
                  />
                </div>
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="r-relation">Relation</label>
                  <input
                    onChange={handleInput}
                    className="form-control"
                    type="text"
                    name="r_relation"
                    id="r-relation"
                    placeholder="Enter Reference Person Relation"
                  />
                </div>
                <div className="col-lg-6 col-md-6">
                  <label htmlFor="r-address">Address</label>
                  <textarea
                    onChange={handleInput}
                    name="r_address"
                    id="r-address"
                    cols="30"
                    rows="3"
                    className="form-control"
                    placeholder="Enter Reference Person Address"
                  ></textarea>
                </div>
              </div>
              <input

                onClick={submit}
                className="btn btn-danger button-common-color"
                type="button"
                value="Submit"
              />

            </form>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AddMerchant;
