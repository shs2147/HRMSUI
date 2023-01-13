import React from "react";
// import ButtonGroup from "react-bootstrap/ButtonGroup";
// import Button from "react-bootstrap/Button";
// import { propTypes } from "react-bootstrap/esm/Image";
import { Link, NavLink, useNavigate } from "react-router-dom";

const DasNav = () => {
  const location = useNavigate();
  // const user = JSON.parse(sessionStorage.getItem("token"))
  // const handleSubmit = (e) => {
  //   // sessionStorage.setItem('token',null)
  //   sessionStorage.removeItem("token");
  //   sessionStorage.removeItem("userName");
  //   sessionStorage.removeItem("password");
  //   e.preventDefault();
  //   location("/");

  //   // propTypes.history.push('/login');
  // };
  // const logoutHandler = (e) => {
  //   e.preventDefault();
  //   // sessionStorage.setItem('token', null)
  //   sessionStorage.removeItem("token");
  //   location(-1);
  // };

  const handleSubmit = () => {
    sessionStorage.clear();
    location("/");
  };
  return (
    <div className="container5">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid homeBox">
          <h2>Dashboard</h2>
          <span class="navbar-text">
            Welcome <b>Admin</b>
          </span>
          <div className="d-flex justify-content-center">
            {/* <NavLink style={{ color: "teal" }} to="/" className=" mt-1"> */}
            {/* <ButtonGroup>
              <Button variant="success" onClick={handleSubmit}>
                Log Out
              </Button>
            </ButtonGroup> */}
            <button
              type="button"
              class="btn btn-success"
              onClick={handleSubmit}
            >
              LOGOUT
            </button>

            {/* </NavLink> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DasNav;
