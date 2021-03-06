import axios from 'axios';
import React, { useRef } from 'react';
import Swal from 'sweetalert2';

const UpdateMerchantModal = ({ data, call, setCall }) => {
    console.log(data?.name);
    console.log(data.email);
    console.log(data);
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

        formdata.forEach(function (value, key) {
            object[key] = value;
        });

        axios.put(`https://backend.sbexpressbd.com/user/update/${data._id}`, object)

            .then(function (response) {


                if (response.status === 200) {
                    setCall(!call);
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
        axios.put(`https://backend.sbexpressbd.com/user/update/${data._id}`, status)

            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    setCall(!call);
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
        <div>
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
                                    Confirm
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
                            <form ref={form} >
                                <div class="modal-body pending-modal">

                                    <label htmlFor="">Merchant Name</label>

                                    <input
                                        className="form-control"
                                        type="text"
                                        name="name"
                                        id=""
                                        value={data?.name}
                                        disabled
                                    />

                                    <label htmlFor="">Mobile Number</label>

                                    <input
                                        className="form-control"
                                        type="number"
                                        name=""
                                        id=""
                                        value={data?.number}
                                        disabled
                                    />
                                    <label htmlFor="">Email</label>

                                    <input
                                        className="form-control"
                                        type="email"
                                        name=""
                                        id="email"
                                        value={data?.email}
                                        disabled
                                    />


                                    <label htmlFor="">Pin</label>
                                    <input
                                        className="form-control"
                                        type="number"
                                        name=""
                                        id=""
                                        placeholder="Enter Pin"
                                    />

                                    <label htmlFor="status">Status</label>
                                    <select

                                        className="form-select form-select-sm form-control"
                                        aria-label=".form-select-sm example"
                                        id="status"
                                        name="status"
                                        aria-describedby="status"
                                    >
                                        <option defaultValue>{data?.status}</option>
                                        <option value="Approved">Approve</option>
                                        <option value="Rejected">Reject</option>
                                        <option value="Pending">Pending</option>
                                    </select>


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
                                        class="btn btn-primary button-common-color"
                                        data-dismiss="modal"
                                    >
                                        Submit
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
        </div>
    );
};

export default UpdateMerchantModal;