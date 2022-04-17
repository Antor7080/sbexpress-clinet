import React, { useRef } from 'react';
import Swal from "sweetalert2";
import axios from "axios";
import useAuth from '../../../Hooks/useAuth';
const UpdateRechargeModal = ({ data, call, setCall }) => {
    const { call1, setCall1 } = useAuth()
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
    console.log(data);
    const form = useRef(null)
    let object = {};
    const submit = e => {
        e.preventDefault();
        const formdata = new FormData(form.current);
        formdata.append("status", "Approved")
        formdata.forEach(function (value, key) {
            object[key] = value;
        });

        axios.put(`http://localhost:5000/recharge/update/${data._id}`, object)

            .then(function (response) {


                if (response.status === 200) {
                    setCall(!call);
                    setCall1(!call1)
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



    }
    const handleDelete = (e) => {
        const status = { status: 'Rejected' }
        e.preventDefault();

        axios.put(`http://localhost:5000/recharge/update/${data._id}`, status)

            .then(function (response) {

                if (response.status === 200) {
                    setCall(!call);
                    setCall1(!call1)
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
    }


    return (
        <>
            <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content ">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                                Pending Recharge
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
                        <form ref={form}  >
                            <div class="modal-body pending-modal">
                                <label htmlFor="">Mobile Number</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name=""
                                    id=""
                                    value={data?.user?.number}
                                    disabled
                                />
                                <label htmlFor="">Amount</label>
                                <input
                                    className="form-control"
                                    type="number"
                                    name=""
                                    id=""
                                    value={data.amount}
                                    disabled
                                />
                                <label htmlFor="">Note</label>
                                <textarea
                                    className="form-control"
                                    type="text"
                                    name="note"
                                    id=""
                                    defaultValue={data.note}

                                    placeholder='Enter Your Message to The Merchent'

                                />


                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-danger border border-danger"
                                    data-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button
                                    onClick={submit}
                                    type="button"
                                    className="btn btn-success border border-info"
                                    data-dismiss="modal"
                                >
                                    Confirm
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div >
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
                                onClick={handleDelete}
                                type="button"
                                class="btn btn-primary button-common-color"
                                data-dismiss="modal"
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateRechargeModal;