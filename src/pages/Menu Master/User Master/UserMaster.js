import React from "react";
import { formatMuiErrorMessage } from "@material-ui/utils";
import { useState, useEffect } from "react";

const AddUser = () => {
  const [show, setShow] = useState([]);
  const [itemshow, setItemshow] = useState([]);
  const [data, setData] = useState({
    roles: [
      {
        roleName: "",
      },
    ],
  });
  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const inputChangeHandler = (e) => {
    // let newData = { ...data };
    // newData[e.target.name] = e.target.value;
    // setData(newData);

    const { name, value } = e.target;
    setFormValues({ formValues, [name]: value });
    setData(formValues);
    console.log(formValues);
  };

  const fetchData1 = () => {
    fetch("http://localhost:8080/getall", {})
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItemshow(data);
      });
  };
  const fetchData = () => {
    fetch("http://localhost:8080/basic/fetchdata", {})
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setShow(data);
      });
  };
  useEffect(() => {
    console.log(formErrors);
    fetchData();
    fetchData1();
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  console.log(show);

  const submitHandler = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));

    setIsSubmit(true);
    setData({});
    console.log(JSON.stringify(data));
    fetch("http://localhost:8080/usermaster/saveuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log("User are Added");
      })
      .catch((err) => console.log(err));
  };
  const validate = (values) => {
    const errors = {};
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 character";
    }

    return errors;
  };

  return (
    <>
      <div className="container">
        <div className="d-flex">
          <h3>Add User</h3>
          {/* <button type="button" className="btn btn-primary sm-4 mt-2 mx-3">
            Add User Master
          </button> */}
        </div>
        <hr />
        <h6>Add/Edit User</h6>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success">Signed in Succesfully</div>
        ) : (
          ""
        )}
        <form onSubmit={submitHandler} className="bg-light">
          <div className="row ">
            <div className="col-sm-4 mt-2">
              <label for="cars" id="label">
                Department Name:
              </label>
              {/* <br/> */}
              <p style={{ color: "red" }}></p>
              <select
                valueType={data.departmentName}
                class="form-select"
                aria-label="Default select example"
                name="departmentName"
                // onChange={inputChangeHandler}
              >
                {/* <input value={data.name} type="text" class="form-control" id="formGroupExampleInput" name="name" onChange={inputChangeHandler}/> */}
                <option selected disabled>
                  Select Department
                </option>
                {itemshow.map((aman) => (
                  <option valueType={aman.departmentName}>
                    {aman.departmentName}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-sm-4 mt-2">
              <label for="cars" id="label">
                Employee Name:
              </label>
              {/* <br /> */}
              <p style={{ color: "red" }}></p>
              <select
                valueType={data.employeeName}
                class="form-select"
                aria-label="Default select example"
                name="employeeName"
                // onChange={inputChangeHandler}
              >
                {/* <input value={data.name} type="text" class="form-control" id="formGroupExampleInput" name="name" onChange={inputChangeHandler}/> */}
                <option selected disabled>
                  Select Employee Name
                </option>
                {show.map((saurabh) => (
                  <option valueType={saurabh.employeeName}>
                    {saurabh.employeeName}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-sm-4 mt-2">
              <label for="cars" id="label">
                Employee Code:
              </label>
              {/* <br /> */}
              <p style={{ color: "red" }}></p>
              <select
                valueType={data.employeeCode}
                class="form-select"
                aria-label="Default select example"
                name="employeeCode"
                // onChange={inputChangeHandler}
              >
                {/* <input value={data.name} type="text" class="form-control" id="formGroupExampleInput" name="name" onChange={inputChangeHandler}/> */}
                <option selected disabled>
                  Select Employee Code
                </option>
                {show.map((saurabh) => (
                  <option valueType={saurabh.employeeId}>
                    {saurabh.employeeId}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-sm-4 mt-2">
              <label for="formGroupExampleInput">User Name:</label>
              <p style={{ color: "red" }}>{formErrors.username}</p>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                onChange={inputChangeHandler}
                placeholder="Enter Username"
                value={formValues.username}
              />

              {/* <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                onChange={inputChangeHandler}
                value={formValues.username}
                placeholder="Enter Username"
              /> */}
            </div>

            <br />

            <div className="col-sm-4 mt-2">
              <label for="cars" id="label">
                Password:
              </label>
              <p style={{ color: "red" }}>{formErrors.password}</p>

              <input
                // value={data.password}
                value={formValues.password}
                type="password"
                class="form-control"
                id="formGroupExampleInput"
                name="password"
                onChange={inputChangeHandler}
                placeholder="Enter Password"
              />
            </div>

            <div className="col-sm-4 mt-2">
              <label for="cars" id="label">
                Role Type:
              </label>
              <p style={{ color: "red" }}></p>
              <select
                valueType={data.roleName}
                class="form-select"
                aria-label="Default select example"
                name="roleType"
                // onChange={inputChangeHandler}
              >
                {/* <input value={data.name} type="text" class="form-control" id="formGroupExampleInput" name="name" onChange={inputChangeHandler}/> */}
                <option selected disabled>
                  Select Role
                </option>
                <option valueType="react JS">ADMIN</option>
                <option valueType="java">EMPLOYEE</option>
                <option valueType="java">User</option>
              </select>
            </div>
          </div>
          <button type="submit" class="btn btn-primary mt-4">
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default AddUser;
