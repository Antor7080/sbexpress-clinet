import axios from 'axios';
import React, { useRef } from 'react';
import Swal from 'sweetalert2';

const EditMobileBankingModal = ({ data, call, setCall }) => {
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
        formdata.append("status", "Pending")
        formdata.forEach(function (value, key) {
            object[key] = value;
        });
        axios.put(`https://backend.sbexpressbd.com/mobile-banking/${data._id}`, object)

            .then(function (response) {
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
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content ">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                                View
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
                                <label htmlFor="">Name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name=""
                                    id=""
                                    value={data?.user?.name}
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

                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-danger border border-danger"
                                    data-dismiss="modal"
                                >
                                    Close
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

                                <label htmlFor="amount">Amount</label>
                                <input className="form-control" type="text" name="amount" id="amount" defaultValue={data?.amount} />
                                <label htmlFor="contact">Number</label>
                                <input className="form-control" type="text" name="" id="contact" value={data?.number} disabled />
                                <div>
                                    <label htmlFor="sim">Mobile Banking Operator</label>
                                    <select
                                        className="form-select form-select-sm form-control"
                                        defaultValue={data.Mobile_Banking_Operator}
                                        aria-label=".form-select-sm example"
                                        id="Mobile_Banking_Operator"
                                        name="Mobile_Banking_Operator"
                                        aria-describedby="Mobile_Banking_Operator"
                                    >
                                        {/* <option defaultValue>Select Mobile Banking Operator</option> */}
                                        <option value="Bkash">Bkash</option>
                                        <option value="Rocket">Rocket</option>
                                        <option value="Nagad">Nagad</option>
                                        <option value="Upay">Upay</option>
                                        <option value="Ucash">Ucash</option>
                                    </select>


                                </div>
                                <label htmlFor="type">Type</label>
                                <select
                                    className="form-select form-select-sm form-control"
                                    aria-label=".form-select-sm example"
                                    id="type"
                                    name="type"
                                    aria-describedby="type"
                                    defaultValue={data.type}
                                >
                                    <option defaultValue>{data.type}</option>
                                    <option value="Personal">Personal</option>
                                    <option value="Merchant">Merchant</option>
                                    <option value="Agent">Agent</option>
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

export default EditMobileBankingModal;