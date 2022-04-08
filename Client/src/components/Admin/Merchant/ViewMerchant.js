import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from '../../../pages/Header';
import Footer from "../../Footer/Footer";

const adsdata = [



  {
    name: "Ads name",
    date: "10-02-2022",
    amount: "10",
  },
  {
    name: "Ads name",
    date: "10-02-2022",
    amount: "10",
  },
];



const ViewMerchant = () => {
  const { id } = useParams()
  const [merchantData, setMerchantData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/information/${id}`)
      .then(res => res.json())
      .then(data => setMerchantData(data))
  }, [id]);
  console.log(merchantData);
  return (
    <div>
      <Header />
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid pt-3">


            <div className="row g-2 mb-2">
              <div className="col-lg-5 col-md-5">
                <div className="p-2 view-top">
                  <div className="d-flex align-middle align-items-center justify-content-between">
                    <div className="me-3">
                      <img
                        src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                        alt=""
                        style={{ height: "100px", width: "100px" }}
                      />
                    </div>
                    <div className="">
                      <h4>{merchantData.name}</h4>
                      <h6>{merchantData.user_address}</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="p-2 view-top">
                  <h4>Today Balance</h4>
                  <p>12000</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-2">
                <div className="p-2 view-top">
                  <h4>Total Transaction</h4>
                  <p>20</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-2">
                <div className="p-2 view-top">
                  <h4>Total Income</h4>
                  <p>12000</p>
                </div>
              </div>
            </div>
            <div className="row g-2 view-bottom">
              <div className="col-lg-8 col-md-8">
                <div className="p-2 view-bottom-left">
                  <h4>Merchant Info</h4>
                  <table className="table table-borderless">
                    <tbody>
                      <tr>
                        <td>Merchant Name</td>
                        <td>{merchantData.name}</td>
                      </tr>
                      <tr>
                        <td>Username</td>
                        <td>{merchantData.email}</td>
                      </tr>
                      <tr>
                        <td>Mobile Number</td>
                        <td>{merchantData.number}</td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>{merchantData.email}</td>
                      </tr>

                    </tbody>
                  </table>
                  <button className="btn button-common-color">Download Report</button>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">

                <div className="p-3 view-bottom-right-bottom mt-2">
                  <h4>Last Balance Request</h4>
                  <div class="table-responsive table-bordered">
                    <table id="example" class="table" style={{ width: "100%" }}>
                      <thead>
                        <tr>
                          <th>
                            <input type="checkbox" name="" id="" />
                          </th>
                          <th>Ads Name</th>
                          <th>Date</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {adsdata.map((d) => (
                          <tr>
                            <td>
                              <input type="checkbox" name="" id="" />
                            </td>
                            <td>{d.name}</td>
                            <td>{d.date}</td>
                            <td>{d.amount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
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

export default ViewMerchant;
