import React, { useEffect, useState } from "react";
import Header from '../../../pages/Header';
import Footer from "../../Footer/Footer";
import UpdateBalanceModal from "./UpdateBalanceModal";



const BalanceRequest = () => {
  const [loading, setLoading] = useState(false);
  const [balanceData, setBalanceData] = useState([]);
  const [displayBalanceData, setDisplayBalanceData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const Authorization = localStorage.getItem("token")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const userInfo = localStorage.getItem('user')
  const userData = (JSON.parse(userInfo))
  const config = {
    headers: {
      Authorization
    }
  };
  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:5000/balance/all-balance-request?status=Pending&page=${page}&email=${userData.email}`, config)
      .then(res => res.json())
      .then(data => {
        setBalanceData(data.data);
        setDisplayBalanceData(data.data);
        const count = data.total;
        const pageNumber = Math.ceil(count / 10);
        setPageCount(pageNumber);
        setLoading(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])


  const handleSearch = (e) => {
    const searchText = e.target.value;
    const matchedData = balanceData.filter((data) =>
      data.user.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayBalanceData(matchedData);

  };

  return (
    <div>
      <Header />
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid pt-3">
            <h3 className="">Pending Balance Request</h3>
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
                {
                  loading ? <div className="text-center">
                    <div class="spinner-border text-center text-danger" style={{ width: "13rem", height: '13rem' }} role="status">
                      <span class="sr-only text-danger">Loading...</span>
                    </div>
                  </div> :
                    <div class="card">
                      <div className="table-responsive">
                        <table className="table table-bordered text-center">
                          <thead style={{ backgroundColor: "#ededed" }}>
                            <tr>
                              <th scope="col">Invoice</th>
                              <th scope="col">Name</th>
                              <th scope="col">Amount</th>
                              <th scope="col">Shop Name</th>
                              <th scope="col">Payment Method</th>
                              <th scope="col">Contact Number</th>
                              <th scope="col">Created At</th>
                              <th scope="col">Time</th>
                           
                              <th scope="col">Status</th>


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
                            {console.log(page, pageCount)}
                            <a
                              onClick={() => setPage(page + 1)}

                              className={
                                page === (pageCount || 1)
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
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default BalanceRequest;
