import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from '../../../pages/Header';
import Footer from "../../Footer/Footer";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";

const AddMobileBanking = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState({});
  const { call1, setCall1 } = useAuth()
  const [displayBalanceData, setDisplayBalanceData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [call, setCall] = useState(true)
  const Authorization = localStorage.getItem("token")
  const userInfo = localStorage.getItem('user')
  const userData = (JSON.parse(userInfo))
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
  let object = {};
  const submit = e => {
    setLoading(true)
    e.preventDefault();
    const formdata = new FormData(form.current);

    formdata.forEach(function (value, key) {
      object[key] = value;
    });

    axios.post('http://localhost:5000/mobile-banking/', object)

      .then(function (response) {
        setLoading(false)
        if (response.status === 200) {
          setCall(!call)
          setCall1(!call1);
          setError({})
          setData({})
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
      })
      .catch((error) => {
        setError(error.response.data.errors);
        setData(error.response.data.data)
        setLoading(false)
      });

  }


  const config = {
    headers: {
      Authorization
    }
  };
  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:5000/mobile-banking/?page=${page}&email=${userData.email}`, config)
      .then(res => res.json())
      .then(data => {
        setDisplayBalanceData(data.data);
        const count = data.total;
        const pageNumber = Math.ceil(count / 10);
        setPageCount(pageNumber);
        setLoading(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [call, page])
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
                  <Link to="/merchant/add-balance">Add Balance</Link>
                </button>
              </span>{" "}
              <span>
                <button className="btn button-common-color mb-2">
                  <Link to="/merchant/add-recharge">Add Recharge</Link>
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
              </div> :
                <div className="row mt-5">
                  <div className="col-lg-4 col-md-4">
                    <form ref={form} onSubmit={submit} className="">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        className={error?.number ? "error form-control" : "form-control"}
                        type="text"
                        name="number"
                        defaultValue={data?.number}
                        id="number"
                        aria-describedby="phone"
                        placeholder="Enter Phone Number"
                      />
                      {error?.number && <small className="text-danger m-0 p-0">{error?.number.msg}</small>}

                      <div>
                        <label htmlFor="amounts">Amounts</label>
                        <input
                          className={error?.amount ? "error form-control" : "form-control"}
                          type="number"
                          name="amount"
                          id="amounts"
                          defaultValue={data?.amount}
                          aria-describedby="amounts"
                          placeholder="Enter Amounts"
                        />
                        {error?.amount && <small className="text-danger m-0 p-0">{error?.amount.msg}</small>}
                      </div>

                      <div>
                        <label htmlFor="sim">Mobile Banking Operator</label>
                        <select
                          className={error?.Mobile_Banking_Operator ? "error form-select form-select-sm form-control" : "form-select form-select-sm form-control"}
                          defaultValue={data.Mobile_Banking_Operator}
                          aria-label=".form-select-sm example"
                          id="Mobile_Banking_Operator"
                          name="Mobile_Banking_Operator"
                          aria-describedby="Mobile_Banking_Operator"
                        >
                          <option defaultValue>Select Mobile Banking Operator</option>
                          <option value="Bkash">Bkash</option>
                          <option value="Rocket">Rocket</option>
                          <option value="Nagad">Nagad</option>
                          <option value="Upay">Upay</option>
                          <option value="Ucash">Ucash</option>
                        </select>
                        {error?.Mobile_Banking_Operator && <small className="text-danger m-0 p-0">{error?.Mobile_Banking_Operator.msg}</small>}

                      </div>
                      <label htmlFor="type">Type</label>
                      <select
                        className={error?.type ? "error form-select form-select-sm form-control" : "form-select form-select-sm form-control"}
                        aria-label=".form-select-sm example"
                        id="type"
                        name="type"
                        aria-describedby="type"
                        defaultValue={data.type}
                      >
                        <option defaultValue>Select Type</option>
                        <option value="Personal">Personal</option>
                        <option value="Merchant">Merchant</option>
                        <option value="Agent">Agent</option>
                      </select>
                      {error?.type && <small className="text-danger m-0 p-0">{error?.type.msg}</small>}
                      <br />
                      <input onClick={submit} className="btn button-common-color my-2" type="button" value="Add Mobile Banking" />
                    </form>
                  </div>
                  <div className="col-lg-8 col-md-8">
                    <div class="row">
                      <div class="col-md-12 mb-3">
                        <div class=" card table-responsive">
                          <div className="table-responsive">
                            <table className="table table-bordered text-center">
                              <thead style={{ backgroundColor: "#ededed" }}>
                                <tr>
                                  <th scope="col">Invoice</th>
                                  <th scope="col">Operator</th>
                                  <th scope="col">Amount</th>
                                  <th scope="col">Number</th>
                                  <th scope="col">Type</th>
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
                                    <td>{data.Mobile_Banking_Operator}</td>
                                    <td>{data.amount}</td>
                                    <td>{data.number}</td>
                                    <td>{data.type}</td>
                                    <td>{new Date(data.createdAt).toLocaleDateString("en-GB")}
                                    </td>
                                    <td>
                                      {
                                        new Date(data.createdAt).toLocaleTimeString("en-GB")
                                      }</td>
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
                </div>}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AddMobileBanking;
