import React from "react";
import Header from '../../../pages/Header';
import Footer from "../../Footer/Footer";

const OpenSupport = () => {
  return (
    <div>
      <Header />
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid pt-3">
            <h3>Open Support</h3>
            <hr />
            <form className="px-3">
              <div className="row">
                <div className="col-12">
                  <label htmlFor="support">Support No</label>
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id="support"
                    value={3}
                    disabled
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="support-box">Support Box</label>
                  <textarea
                    className="form-control"
                    placeholder="Enter support box message"
                    id="support-box" name="" cols="30" rows="5"></textarea>
                </div>
                <div className="col-12">
                  <label htmlFor="file">Upload File</label>
                  <input
                    className="form-control"
                    type="file"
                    name=""
                    id="file"
                  />
                </div>
              </div>
              <input className=" mt-3 btn button-common-color" type="button" value="Submit" />
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default OpenSupport;
