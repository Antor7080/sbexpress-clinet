import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from '../../../pages/Header';
import Footer from "../../Footer/Footer";
import Swal from "sweetalert2";
import axios from "axios";

const AddBalance = () => {
  const [data, setData] = useState({})
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false);
  const [balanceData, setBalanceData] = useState([]);
  const [displayBalanceData, setDisplayBalanceData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [call, setCall] = useState(true)
  const Authorization = localStorage.getItem("token")
  const userInfo = localStorage.getItem('user')
  const userData = (JSON.parse(userInfo))
  const config = {
    headers: {
      Authorization
    }
  };
  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:5000/balance/all-balance-request?page=${page}&email=${userData.email}`, config)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBalanceData(data.data);
        setDisplayBalanceData(data.data);
        const count = data.total;
        const pageNumber = Math.ceil(count / 10);
        setPageCount(pageNumber);
        setLoading(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [call, page])


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
  const handleSearch = (e) => {
    const searchText = e.target.value;
    const matchedData = balanceData.filter((data) =>
      data.user.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayBalanceData(matchedData);
  };
  const form = useRef(null)
  let object = {};
  const submit = e => {
    setLoading(true)
    e.preventDefault();
    const formdata = new FormData(form.current);
    formdata.forEach(function (value, key) {
      object[key] = value;
    });

    axios.post('http://localhost:5000/balance/add-balance', object)
      .then(function (response) {
        setLoading(false)
        if (response.status === 200) {
          setCall(!call);
          setErrors("")
          Toast.fire({
            icon: "success",
            title: "Added SuccessFully",
          });
        }
        else if (response.status === 400) {
          Toast.fire({
            icon: "error",
            title: response.data.msg,
          });
        }
      })
      .catch((error) => {
        setErrors(error.response.data.errors);
        setData(error.response.data.data)
        setLoading(false)
      });
  }
  return (
    <div>
      <Header />
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid pt-3">
            <h3>Add Balance</h3>
            <hr />
            <div className="pending-upper-subcategory mb-2">
              <span>
                <button className="btn button-common-color mb-2">
                  <Link to="/merchant/add-recharge">Add Recharge</Link>
                </button>
              </span>{" "}
              <span>
                <button className="btn button-common-color mb-2">
                  <Link to="/merchant/add-mobile-banking">Add Mobile Banking</Link>
                </button>
              </span>{" "}
              <span>
                <button className="btn button-common-color mb-2">
                  <Link to="/merchant/add-sim-purchase">Add Sim Purchase</Link>
                </button>
              </span>{" "}
              <span>
                <button className="btn button-common-color mb-2">
                  <Link to="/merchant/add-direct-bank">Add Direct Bank</Link>
                </button>
              </span>
            </div>
            {
              loading ? <div className="text-center">
                <div class="spinner-border text-center text-danger" style={{ width: "13rem", height: '13rem' }} role="status">
                  <span class="sr-only text-danger">Loading...</span>
                </div>
              </div> : <div className="row">
                <div className="col-lg-4 col-md-4">
                  <form className="" ref={form} /* encType="multipart/form-data" */ onSubmit={submit}>
                    <label htmlFor="amount">Amount BD</label>
                    <input
                      className={errors?.amount ? "error form-control" : "form-control"}
                      type="text"
                      name="amount"
                      id="amount"
                      defaultValue={data.amount}
                      aria-describedby="merchant"
                      placeholder="Enter Amount"
                    />
                    {errors?.amount && <small className="text-danger m-0 p-0">{errors?.amount.msg}</small>}
                    <div id="amount" className="form-text">
                      Enter amount of Bangladeshi Taka
                    </div>
                    <label htmlFor="sim">Payment Method</label>
                    <select
                      defaultValue={data.payment_method}
                      className={errors.payment_method ? "error form-select form-select-sm form-control" : "form-select form-select-sm form-control"}
                      aria-label=".form-select-sm example"
                      id="sim"
                      name="payment_method"
                      aria-describedby="sim"
                    >
                      <option defaultValue>Select the payment method</option>
                      <option value="Hand Cash">Hand Cash</option>
                      <option value="Bank">Bank</option>
                    </select>
                    {errors?.payment_method && <small className="text-danger m-0 p-0">{errors?.payment_method.msg}</small>}
                    <div id="sim" className="form-text">
                      Select the payment method
                    </div>
                    <button className="btn button-common-color my-2">
                      Add Balance
                    </button>
                  </form>
                </div>
                <div className="col-lg-8 col-md-8">
                  <div class="row">
                    <div class="col-md-12 mb-3">
                      <input
                        className="form-control mb-3"
                        style={{ width: "30%" }}
                        type="text"
                        name=""
                        id=""
                        onChange={handleSearch}
                        placeholder="Search"
                      />
                      <div class="card">
                        <div className="table-responsive">
                          <table className="table table-bordered text-center" >
                            <thead style={{ backgroundColor: "#ededed" }}>
                              <tr>
                                <th scope="col">Invoice</th>
                                <th scope="col">Name</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Created At</th>
                                <th scope="col">Time</th>
                                <th scope="col">Status</th>

                              </tr>
                            </thead>

                            <tbody>
                              {displayBalanceData?.length === 0 && (
                                <p className="text-danger text-center">No data found!</p>
                              )}
                              {displayBalanceData && displayBalanceData.map((data) => (
                                <tr key={data.invoice}>
                                  <td>{data.invoice}</td>
                                  <td>{data.user.name}</td>
                                  <td>{data.amount}</td>
                                  <td>{new Date(data.createdAt).toLocaleDateString("en-GB")}</td>
                                  <td>{new Date(data.createdAt).toLocaleTimeString()}</td>
                                  <td>{data.status}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <nav aria-label="Page navigation example">
                          <ul className="pagination">
                            <li className="page-item">
                              <a
                                type="button"
                                onClick={() => setPage(page - 1)}
                                className={
                                  page === 1 ? "page-link btn disabled" : "page-link btn"
                                }
                                href
                              >
                                Previous
                              </a>
                            </li>

                            {[...Array(pageCount).keys()].map((number) => (
                              <li className="page-item" key={number}>
                                <button
                                  onClick={() => setPage(number + 1)}
                                  className={
                                    page === number + 1
                                      ? " btn pagination-btn btn-success"
                                      : "page-link btn pagination-btn"
                                  }
                                >
                                  {number + 1}
                                </button>
                              </li>
                            ))}

                            <li className="page-item">
                              <a
                                onClick={() => setPage(page + 1)}

                                className={
                                  page === pageCount
                                    ? "page-link btn disabled"
                                    : "page-link btn "
                                }
                                href
                              >

                                Next
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AddBalance;
