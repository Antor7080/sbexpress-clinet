import React, { useEffect, useState } from "react";
import Header from '../../../pages/Header';
import Footer from "../../Footer/Footer";
import EditBalanceModal from "./EditBalanceModal";
import UpdateBalanceModal from "./UpdateBalanceModal";


const RejectedBalance = () => {
  const [balanceData, setBalanceData] = useState([]);
  const [displayBalanceData, setDisplayBalanceData] = useState([]);
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
    fetch(`https://sbexpressbd.com/Server/balance/all-balance-request?status=Rejected&page=${page}`, config)
      .then(res => res.json())
      .then(data => {
        setBalanceData(data.data);
        setDisplayBalanceData(data.data);
        const count = data.total;
        const pageNumber = Math.ceil(count / 10);
        setPageCount(pageNumber);

      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, call])


  const handleSearch = (e) => {
    const searchText = e.target.value;
    const matchedData = balanceData.filter((data) =>
      data.user.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayBalanceData(matchedData);

  };
  const [data1, setData] = useState({});
  const modalData = (id) => {

    fetch(`https://sbexpressbd.com/Server/balance/all-balance-request/${id}`, config)
      .then(res => res.json())
      .then(data => {
        setData(data);
      })

  };
  return (
    <div>
      <Header />
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid pt-3">
            <h3>Rejected Balance Request</h3>
            <hr />
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
                  <table className="table table-bordered">
                    <thead style={{ backgroundColor: "#ededed" }}>
                      <tr>
                        <th scope="col">Invoice</th>
                        <th scope="col">Name</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Shop Name</th>
                        <th scope="col">Payment Method</th>
                        <th scope="col">Contact Number</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>

                      </tr>
                    </thead>
                    <tbody>
                      {displayBalanceData.length === 0 && (
                        <p className="text-danger text-center">No data found!</p>
                      )}
                      {displayBalanceData && displayBalanceData.map((data) => (
                        <tr key={data.invoice}>
                          <td>{data.invoice}</td>
                          <td>{data.user.name}</td>
                          <td>{data.amount}</td>
                          <td>{data.user.shope_name}</td>
                          <td>{data.payment_method}</td>
                          <td>{data.user.number}</td>
                          <td>{data.status}</td>
                          <td>
                            <div className="d-flex align-items-center pending-button">

                              <button
                                type="button"
                                class="btn btn-info"
                                data-toggle="modal"
                                data-target="#exampleModal2"
                                onClick={() => { modalData(data._id) }}
                              >
                                Edit
                              </button>

                              <EditBalanceModal data={data1} call={call} setCall={setCall} ></EditBalanceModal>

                              <button
                                type="button"
                                class="btn btn-success"
                                data-toggle="modal"
                                data-target="#exampleModal"
                                onClick={() => { modalData(data._id) }}
                              >
                                View
                              </button>

                              <UpdateBalanceModal data={data1} call={call} setCall={setCall}></UpdateBalanceModal>
                            </div>
                          </td>
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
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );

};

export default RejectedBalance;
