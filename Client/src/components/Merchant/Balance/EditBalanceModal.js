import axios from 'axios';
import React, { useRef } from 'react';
import Swal from "sweetalert2";

const EditBalanceModal = ({ data, call, setCall }) => {


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
    e.preventDefault();
    const formdata = new FormData(form.current);
    formdata.append("status", "Pending");
    formdata.forEach(function (value, key) {
      object[key] = value;
    });

    axios.put(`https://sbexpressbd.com/Server/balance/update/${data._id}`, object)

      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          setCall(!call)
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
          console.log(response);
        }
      })
      .catch((error) => {
        console.log("ERROR:: ", error.response.data);
        // serErrors(error.response.data.errors);
        Toast.fire({
          icon: "error",
          title: error.response.data.msg,
        });

      });

  };

  return (
    <div>


      <div
        class="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div class="modal-content ">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit
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

            <form ref={form}>

              <div className="modal-body ">
                <label htmlFor="name">Name</label>
                <input className="form-control" type="text" name="" id="name" value={data?.user?.name} disabled />
                <label htmlFor="s-name">Shop Name</label>
                <input className="form-control" type="text" name="" id="s-name" value={data?.user?.shope_name} disabled />
                <label htmlFor="amount">Amount</label>
                <input className="form-control" type="number" name="amount" id="amount" defaultValue={data?.amount} />
                <label htmlFor="contact">Contact Number</label>
                <input className="form-control" type="number" name="" id="contact" value={data?.user?.number} disabled />
                <label htmlFor="sim">Payment Method</label>
                <select

                  className="form-select form-select-sm form-control"
                  aria-label=".form-select-sm example"
                  id="sim"
                  name="payment_method"
                  aria-describedby="sim"
                >
                  <option defaultValue>{data.payment_method}</option>
                  <option value="Hand Cash">Hand Cash</option>
                  <option value="Bank">Bank</option>
                </select>

              </div>
              <div class="modal-footer border-0">
                <button
                  type="button"
                  className="btn btn-danger border border-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>

                <button
                  type="button"
                  class="btn btn-primary button-common-color"
                  onClick={submit}
                  data-dismiss="modal"
                >
                  Update
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EditBalanceModal;