import React, { useEffect, useState } from "react";
import Header from '../../../pages/Header';
import Footer from "../../Footer/Footer";
const AllRecharge = () => {
  const [loading, setLoading] = useState(false);
  const [RechargeData, setRechargeData] = useState([]);
  const [displayRechargeData, setDisplayRechargeData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
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
    fetch(`https://backend.sbexpressbd.com/recharge/recharges?status=Approved&page=${page}&email=${userData.email}`, config)
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
  }, [page])


  const handleSearch = (e) => {
    const searchText = e.target.value;
    const matchedData = RechargeData.filter((data) =>
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
            <h3 className="">All Approved Recharges</h3>
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
                  </div> : <div class=" card table-responsive">
                    <div className="table-responsive">
                      <table className="table table-bordered text-center">
                        <thead style={{ backgroundColor: "#ededed" }}>
                          <tr>
                            <th scope="col">Invoice</th>
                            <th scope="col">Name</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Number</th>
                            <th scope="col">Operator</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {displayRechargeData.length === 0 && (
                            <p className="text-danger text-center">No data found!</p>
                          )}
                          {displayRechargeData && displayRechargeData.map((data) => (
                            <tr key={data.invoice}>
                              <td>{data.invoice}</td>
                              <td>{data.user.name}</td>
                              <td>{data.amount}</td>

                              <td>{data.number}</td>


                              <td>{data.simOperator}</td>
                              <td>{new Date(data.updatedAt).toLocaleDateString("en-GB")}
                              </td>
                              <td>
                                {
                                  new Date(data.updatedAt).toLocaleTimeString("en-GB")
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

export default AllRecharge;
