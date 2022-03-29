
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from '../../../pages/Header';
import Footer from "../../Footer/Footer";
import UpdateMerchantModal from "./UpdateMerchantModal";


const PendingMerchant = () => {
  const Authorization = localStorage.getItem("token")
  const [merchantData, setMerchantData] = useState([]);
  const [displayMerChantData, setDisplayMerChantData] = useState([])
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [call, setCall] = useState(false);


  const config = {
    headers: {
      Authorization
    }
  };
  useEffect(() => {
    fetch(`https://sbexpressbd.com/Server/user/all-information?status=Pending&page=${page}`, config)
      .then(res => res.json())
      .then(data => {
        setMerchantData(data.user);
        setDisplayMerChantData(data.user);
        const count = data.total;
        const pageNumber = Math.ceil(count / 10);
        setPageCount(pageNumber);
        console.log(data.user);
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, call])




  const handleSearch = (e) => {
    const searchText = e.target.value;
    const matchedData = merchantData.filter((data) =>
      data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(matchedData);
    setDisplayMerChantData(matchedData);

  };
  const [data1, setData] = useState({});

  const modalData = (id) => {

    fetch(`https://sbexpressbd.com/Server/user/information/${id}`, config)
      .then(res => res.json())
      .then(data => {
        setData(data);
        console.log(data);
      })

  };
  return (
    <div>
      <Header />
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid pt-3">
            <h3>Pending Merchant Request</h3>
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
                  <table className="table table-bordered text-center">
                    <thead style={{ backgroundColor: "#ededed" }}>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Shop Name</th>
                        <th scope="col">Created At</th>
                        <th scope="col">Contact Number</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>

                      </tr>
                    </thead>
                    <tbody>
                      {displayMerChantData?.length === 0 && (
                        <p className="text-danger text-center">No data found!</p>
                      )}
                      {displayMerChantData && displayMerChantData.map((data) => (
                        <tr key={data?.id}>
                          <td>{data.id}</td>
                          <td>{data?.name}</td>
                          <td>{data.email}</td>
                          <td>{data.shope_name}</td>
                          <td>{new Date(data.updatedAt).toLocaleDateString()}</td>
                          <td>{data.number}</td>
                          <td>{data.status}</td>
                          <td>
                            <div className="d-flex align-items-center pending-button">
                              <Link to={`/admin/edit-merchant/${data._id}`}>
                                {" "}
                                <button type="button" class="btn btn-success">
                                  Confirm
                                </button>
                              </Link>

                              <button
                                type="button"
                                class="btn btn-danger"
                                data-toggle="modal"
                                data-target="#exampleModal2"
                                onClick={() => { modalData(data._id) }}
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <UpdateMerchantModal data={data1} call={call} setCall={setCall}></UpdateMerchantModal>
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

export default PendingMerchant;
