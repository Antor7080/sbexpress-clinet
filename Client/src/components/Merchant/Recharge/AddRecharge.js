import axios from "axios";
import { MDBDataTable } from "mdbreact";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import Header from '../../../pages/Header';
import Footer from "../../Footer/Footer";

const AddRecharge = () => {
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

    axios.post('http://localhost:5000/recharge/add-reacharge', object)

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
    fetch(`http://localhost:5000/recharge/recharges?page=${page}&email=${userData.email}`, config)
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
            <h3>Add Recharge</h3>
            <hr />
            <div className="pending-upper-subcategory mb-2">
              <span>
                <button className="btn button-common-color mb-2">
                  <Link to="/merchant/add-balance">Add Balance</Link>
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
            </div>{
              loading ? <div className="text-center">
                <div class="spinner-border text-center text-danger" style={{ width: "13rem", height: '13rem' }} role="status">
                  <span class="sr-only text-danger">Loading...</span>
                </div>
              </div> : <div className="row">
                <div className="col-lg-4 col-md-4">
                  <form className="" ref={form} onSubmit={submit} >
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      className={error?.number ? "error form-control" : "form-control"}
                      type="number"
                      name="number"
                      id="name"
                      aria-describedby="phone"
                      placeholder="Enter Phone Number"
                      defaultValue={data?.number}
                    />
                    {error?.number && <small className="text-danger m-0 p-0">{error?.number.msg}</small>}
                    <div id="phone" className="form-text ">
                      Enter mobile number of client
                    </div>

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
                    <div id="amounts" className="form-text">
                      Enter recharge amount
                    </div>

                    <label htmlFor="sim">Sim Operator</label>
                    <select
                      className={error?.simOperator ? "error form-select form-select-sm form-control" : "form-select form-select-sm form-control"}
                      aria-label=".form-select-sm example"
                      id="sim"
                      name="simOperator"
                      defaultValue={data?.simOperator}
                      aria-describedby="sim"
                    >
                      <option defaultValue>Select Sim Operator</option>
                      <option value="Airtel">Airtel</option>
                      <option value="Banglalink">Banglalink</option>
                      <option value="Grameenphone">Grameenphone</option>
                      <option value="Teletalk">Teletalk</option>
                    </select>
                    {error?.simOperator && <small className="text-danger m-0 p-0">{error?.simOperator.msg}</small>}
                    <div id="sim" className="form-text">
                      Select the sim operator to be recharge
                    </div>
                    <button className="btn button-common-color my-2">
                      Add Recharge
                    </button>
                  </form>
                </div>
                <div className="col-lg-8 col-md-8">
                  <div class="row">
                    <div class="col-md-12 mb-3">
                      <div class="card">
                        <div className="table-responsive">
                          <table className="table table-bordered text-center">
                            <thead style={{ backgroundColor: "#ededed" }}>
                              <tr>
                                <th scope="col">Invoice</th>
                                <th scope="col">Name</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Number</th>
                                <th scope="col">Operator</th>

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
                                  <td>{data.number}</td>
                                  <td>{data.simOperator}</td>
                                  <td>{new Date(data.createdAt).toLocaleDateString("en-GB")}
                                  </td>
                                  <td>
                                    {
                                      new Date(data.createdAt).toLocaleTimeString()
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
              </div>
            }

          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AddRecharge;
