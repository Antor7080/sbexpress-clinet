
import React from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navigation = () => {
  const history = useHistory()
  const { logout, user } = useAuth();
  return (
    <div>
      <div>
        <nav className="main-header navbar navbar-expand navbar-white fixed-top navbar-light mb-5">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" data-widget="pushmenu" to="#">
                <i className="fas fa-bars" />
              </Link>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

          </ul>

          <ul className="navbar-nav ml-auto">

           
            <li className="nav-item">
              <Link
                className="nav-link"
                data-widget="control-sidebar"
                data-slide="true"
                href="/"
              >

              </Link>

            </li>
            {user.role === 0 ? <li>
              <Link to={"/merchant/all-balance"}>  <button type="button" class="btn btn-success mx-2">
                Balance <span class="badge badge-light">৳ {user.amount}</span>
              </button></Link>
            </li> :
              <li>
                <Link to={"/admin/balance-request"}>  <button type="button" class="btn btn-success mx-2">
                  Balance Request <span class="badge badge-light">৳ {user.amount}</span>
                </button></Link>
              </li>}

            <li>
              <button onClick={() => { logout(history) }} className="btn btn-danger   m-0"><i class="fas fa-sign-out-alt"></i></button>
            </li>
            <li className="nav-item">
              <Link className="nav-link" data-widget="pushmenu" to="#">
                <i className="fas fa-bars" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
