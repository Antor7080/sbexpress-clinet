
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
              <Link className="nav-link" data-widget="pushmenu" to="/">
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

            <li className="nav-item dropdown">
              <Link className="nav-link" data-toggle="dropdown" href="/">
                <i className="far fa-comments" />
                <span className="badge badge-danger navbar-badge">3</span>
              </Link>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <Link href="/" className="dropdown-item">
                  <div className="media">
                    <img
                      src="dist/img/user1-128x128.jpg"
                      alt="User Avatar"
                      className="img-size-50 mr-3 img-circle"
                    />
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                        Brad Diesel
                        <span className="float-right text-sm text-danger">
                          <i className="fas fa-star" />
                        </span>
                      </h3>
                      <p className="text-sm">Call me whenever you can...</p>
                      <p className="text-sm text-muted">
                        <i className="far fa-clock mr-1" /> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                </Link>
                <div className="dropdown-divider" />
                <Link href="/" className="dropdown-item">
                  <div className="media">
                    <img
                      src="dist/img/user8-128x128.jpg"
                      alt="User Avatar"
                      className="img-size-50 img-circle mr-3"
                    />
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                        John Pierce
                        <span className="float-right text-sm text-muted">
                          <i className="fas fa-star" />
                        </span>
                      </h3>
                      <p className="text-sm">I got your message bro</p>
                      <p className="text-sm text-muted">
                        <i className="far fa-clock mr-1" /> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                </Link>
                <div className="dropdown-divider" />
                <Link href="/" className="dropdown-item">
                  <div className="media">
                    <img
                      src="dist/img/user3-128x128.jpg"
                      alt="User Avatar"
                      className="img-size-50 img-circle mr-3"
                    />
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                        Nora Silvester
                        <span className="float-right text-sm text-warning">
                          <i className="fas fa-star" />
                        </span>
                      </h3>
                      <p className="text-sm">The subject goes here</p>
                      <p className="text-sm text-muted">
                        <i className="far fa-clock mr-1" /> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                </Link>
                <div className="dropdown-divider" />
                <Link href="/" className="dropdown-item dropdown-footer">
                  See All Messages
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" data-toggle="dropdown" href="/">
                <i className="far fa-bell" />
                <span className="badge badge-warning navbar-badge">15</span>
              </Link>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <span className="dropdown-item dropdown-header">
                  15 Notifications
                </span>
                <div className="dropdown-divider" />
                <Link href="/" className="dropdown-item">
                  <i className="fas fa-envelope mr-2" /> 4 new messages
                  <span className="float-right text-muted text-sm">3 mins</span>
                </Link>
                <div className="dropdown-divider" />
                <Link href="/" className="dropdown-item">
                  <i className="fas fa-users mr-2" /> 8 friend requests
                  <span className="float-right text-muted text-sm">
                    12 hours
                  </span>
                </Link>
                <div className="dropdown-divider" />
                <Link href="/" className="dropdown-item">
                  <i className="fas fa-file mr-2" /> 3 new reports
                  <span className="float-right text-muted text-sm">2 days</span>
                </Link>
                <div className="dropdown-divider" />
                <Link href="/" className="dropdown-item dropdown-footer">
                  See All Notifications
                </Link>
              </div>
            </li>
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
              <button onClick={() => { logout(history) }} className="btn btn-danger m-0">LogOut</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
