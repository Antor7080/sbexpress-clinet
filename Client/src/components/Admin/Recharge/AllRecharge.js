
import React, { useEffect, useState } from "react";
import Header from '../../../pages/Header';


const AllRecharge = () => {
  const [loading, setLoading] = useState(false);
  const [rechargeData, setRechargeData] = useState([]);
  const [displayrechargeData, setDisplayRechargeData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [call, setCall] = useState(false);
  const Authorization = localStorage.getItem("token")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const config = {
    headers: {
      Authorization
    }
  };
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/recharge/recharges?status=Approved&page=${page}`, config)
      .then(res => res.json())
      .then(data => {
        setRechargeData(data.data);
        setDisplayRechargeData(data.data);
        const count = data.total;
        const pageNumber = Math.ceil(count / 10);
        setPageCount(pageNumber);
        setLoading(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, call])


  const handleSearch = (e) => {
    const searchText = e.target.value;
    const matchedData = rechargeData.filter((data) =>
      data.user.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayRechargeData(matchedData);

  };

  return (
    <div>
      <Header />
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid pt-3">
            <h3>All Recharge</h3>
            <hr />
            <input
              className="form-control mb-3"
              style={{ width: "30%" }}
              type="text"
              name=""
              id=""
              onChange={handleSearch}
              placeholder="Search"
            />
            {
              loading ? <div className="text-center">
                <div class="spinner-border text-center text-danger" style={{ width: "13rem", height: '13rem' }} role="status">
                  <span class="sr-only text-danger">Loading...</span>
                </div>
              </div> : <div class="card">
                <table className="table table-bordered text-center">
                  <thead style={{ backgroundColor: "#ededed" }}>
                    <tr>
                      <th scope="col">Invoice</th>
                      <th scope="col">Name</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Shop Name</th>
                      <th scope="col">Operator</th>
                      <th scope="col">Contact Number</th>
                      <th scope="col">Status</th>
                      <th scope="col">Updated Date</th>

                    </tr>
                  </thead>
                  <tbody>
                    {displayrechargeData.length === 0 && (
                      <p className="text-danger text-center">No data found!</p>
                    )}
                    {displayrechargeData && displayrechargeData.map((data) => (
                      <tr key={data.invoice}>
                        <td>{data.invoice}</td>
                        <td>{data.user.name}</td>
                        <td>{data.amount}</td>
                        <td>{data.user.shope_name}</td>
                        <td>{data.simOperator}</td>
                        <td>{data.user.number}</td>
                        <td>{data.status}</td>
                        <td>{new Date(displayrechargeData[0].updatedAt).toLocaleDateString()} </td>
                        {/*  <td>
                            <div className="d-flex align-items-center pending-button">
                              <button
                                type="button"
                                class="btn btn-success"
                                data-toggle="modal"
                                data-target="#exampleModal"
                                onClick={() => { modalData(data._id) }}
                              >
                                Confirm
                              </button>

                              <UpdateBalanceModal data={data1} ></UpdateBalanceModal>

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
                            </td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                            : "page-link btn"
                        }
                        href
                      >
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            }
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllRecharge;
