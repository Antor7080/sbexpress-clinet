import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Header from '../../../pages/Header';
import Footer from "../../Footer/Footer";


const ViewMerchant = () => {

  const { id } = useParams()
  const [merchantData, setMerchantData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/information/${id}`)
      .then(res => res.json())
      .then(data => setMerchantData(data))
  }, [id]);



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
                        src={`http://localhost:5000/uploads/${merchantData.avatar}`}
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
              {/*     <div className="col-lg-3 col-md-3">
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
              </div> */}
            </div>
            <h4 className="text-center">Merchant Info</h4>
            <div className="row g-2 view-bottom">

              <div className="col-lg-6 col-md-6">
                <div className="p-2 view-bottom-left">

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
                        <td>user address</td>
                        <td>{merchantData.user_address}</td>
                      </tr>
                      <tr>
                        <td>shope name</td>
                        <td>{merchantData.shope_name}</td>
                      </tr>
                      <tr>
                        <td>shop address</td>
                        <td>{merchantData.shop_address}</td>
                      </tr>
                      <tr>
                        <td>passport no</td>
                        <td>{merchantData.passport_no}</td>
                      </tr>
                      <tr>
                        <td>reference number</td>
                        <td>{merchantData.r_number}</td>
                      </tr>
                      <tr>
                        <td>reference address</td>
                        <td>{merchantData.r_address}</td>
                      </tr>

                    </tbody>
                  </table>
                  <button className="btn button-common-color">Download Report</button>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="p-2 view-bottom-left">

                  <table className="table table-borderless">
                    <tbody>

                      <tr>
                        <td>bank name</td>
                        <td>{merchantData.bank_name}</td>
                      </tr>
                      <tr>
                        <td>account name</td>
                        <td>{merchantData.account_name}</td>
                      </tr>
                      <tr>
                        <td>account number</td>
                        <td>{merchantData.account_number}</td>
                      </tr>
                      <tr>
                        <td>bank brance name</td>
                        <td>{merchantData.bank_b_name}</td>
                      </tr>
                      <tr>
                        <td>switt code</td>
                        <td>{merchantData.switt_code}</td>
                      </tr>
                      <tr>
                        <td>bkash</td>
                        <td>{merchantData.bkash}</td>
                      </tr>
                      <tr>
                        <td>nagad</td>
                        <td>{merchantData.nagad}</td>
                      </tr>
                      <tr>
                        <td>rocket</td>
                        <td>{merchantData.rocket}</td>
                      </tr>
                      <tr>
                        <td>reference name</td>
                        <td>{merchantData.r_name}</td>
                      </tr>
                      <tr>
                        <td>reference relation</td>
                        <td>{merchantData.r_relation}</td>
                      </tr>

                    </tbody>
                  </table>

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
