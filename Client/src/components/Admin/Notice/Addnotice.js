import axios from 'axios';
import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2';
import Header from '../../../pages/Header';

const Addnotice = () => {
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
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState([]);
    const [data, setData] = useState([])
    const form = useRef(null)
    let object = {};
    const submit = e => {
        setLoading(true)
        e.preventDefault();
        const formdata = new FormData(form.current);
        formdata.forEach(function (value, key) {
            object[key] = value;
        });

        axios.post('https://backend.sbexpressbd.com/notice/', object)
            .then(function (response) {
                setLoading(false)
                if (response.status === 200) {

                    setErrors("")
                    Toast.fire({
                        icon: "success",
                        title: "Added SuccessFully",
                    });
                }
                else if (response.status === 400) {
                    Toast.fire({
                        icon: "error",
                        title: response.data.msg,
                    });
                }
            })
            .catch((error) => {
                setErrors(error.response.data.errors);
                setData(error.response.data.data)
                setLoading(false)
            });
    }

    return (
        <div>
            <Header />

            <div className="content-wrapper">
                <section className="content">
                    <div className="container-fluid pt-3">
                        <h3>Add New Notice</h3>
                        <hr />

                        {
                            loading ? <div className="text-center">
                                <div class="spinner-border text-center text-danger" style={{ width: "13rem", height: '13rem' }} role="status">
                                    <span class="sr-only text-danger">Loading...</span>
                                </div>
                            </div> : <div  >
                                <div className="mx-auto col-lg-10">
                                    <form className="" ref={form}>
                                        <label htmlFor="phone">Notice</label>
                                        <textarea
                                            className={errors.notice ? "form-control error" : "form-control"}
                                            type="text"
                                            name="notice"
                                            id="notice"
                                            aria-describedby="phone"
                                            defaultValue={data.notice}
                                            placeholder="Enter new notice"
                                        />
                                        {errors?.notice && <small className="text-danger m-0 p-0">{errors?.notice.msg}</small>}
                                        <br />
                                        <input onClick={submit} className="btn button-common-color my-2" type="button" value="Add New Notice" />
                                    </form>
                                </div>
                            </div>
                        }
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Addnotice;