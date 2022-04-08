import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom'
import useAuth from '../../../Hooks/useAuth';
import logo from "../../../img/logo.png";


export default function Login() {
    const history = useHistory()
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const { loginUser } = useAuth()
    const handleSubmit = (e) => {
        e.preventDefault();
        let items = { 'email': email.toLocaleLowerCase(), 'password': password, history };
        loginUser(items)
        console.log(items);
    }
    return (
        <div>

            <div className="container" >
                <div className="w-100">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div
                            className="col  col-12 col-md-10 col-lg-6 col-xl-4
					from-parent  m-5 pt-5 "
                        >
                            <form className="border p-3 w-100 bg-white rounded-2 py-5">
                                <img className='img-fluid' src={logo} alt="" />
                                <h1 className="my-2 text-center" style={{ color: "#f46f22" }}>
                                    Login
                                </h1>
                                <div className="form-group">
                                    <div className="my-3 w-100">
                                        <label for="email" className="form-label">
                                            Email :
                                        </label>
                                        <input
                                            onChange={(e) => SetEmail(e.target.value)}
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Your Email"
                                        />
                                        {/* <small className="text-danger">{errors.email}</small> */}
                                    </div>
                                    <div className="my-3 w-100">
                                        <label for="password" className="form-label">
                                            Password :
                                        </label>
                                        <input
                                            onChange={(e) => SetPassword(e.target.value)}
                                            name="password"
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <button
                                        onClick={handleSubmit}
                                        type="submit"
                                        style={{ background: "#f46f22", width: "100%" }}
                                        className="btn px-4  ml-0 mt-md-0 mt-3 text-white"
                                    >
                                        LOGIN
                                    </button>
                                    <h6> Don`t Have Account?<Link
                                        to="/register"> Register</Link>
                                    </h6>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
