import React from 'react';


const UpdateRechargeModal = ({ data }) => {
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
                                View Only! You Can`t Change Anything
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
                        <form  >
                            <div class="modal-body pending-modal">
                                <label htmlFor="">Mobile Number</label>
                                <input
                                    className="form-control"
                                    type="number"
                                    name=""
                                    id=""
                                    value={data?.number}
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
                                    disabled
                                    className="form-control"
                                    type="text"
                                    name="note"
                                    id=""
                                    value={data.note}
                                    placeholder='Enter Your Message to The Merchent'
                                />
                                <label htmlFor="status">Status</label>
                                <select
                                    disabled
                                    className="form-select form-select-sm form-control"
                                    aria-label=".form-select-sm example"
                                    id="status"
                                    name="status"
                                    aria-describedby="status"
                                >
                                    <option defaultValue>{data.status}</option>
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
            </div>
        </>
    );
};

export default UpdateRechargeModal;