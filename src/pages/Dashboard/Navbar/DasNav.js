import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const DasNav = () => {
  const location = useNavigate();

  const logout = async () => {
    await fetch('/logout'); // send a request to the server to clear the session information
    sessionStorage.removeItem("token")
    window.location.href = '/SignIn'; // redirect the user to the login page
  };
  return (
    <div className="container4">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid homeBox">
          <h2>Dashboard</h2>
          <span class="navbar-text">
            Welcome <b>Admin</b>
          </span>
          <div
            style={{ width: "15%" }}
            className="d-flex justify-content-center"
          >
           
            <button
              type="button"
              class="btn btn-success"
              onClick={logout }
            >
              LOGOUT
            </button>

          </div>
        </div>
      </nav>
      <br /> <br />
    </div>
  );
};

export default DasNav;
