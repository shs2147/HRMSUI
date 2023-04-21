import MaterialTable from "@material-table/core";
import React from "react";
import swal from 'sweetalert';


import { useState } from "react";
import { Button } from "react-bootstrap";

const DesignationMaster = () => {
  const [data, setData] = useState({});
  const inputChangeHandler = (e) => {
    let newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
    // console.log(JSON.stringify(newData))
  };
  const submitHandler = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/designation/savedesignation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        
        console.log("Designation Name Added");
        // swal("Data Added Successfully");
        swal("Success", "Designation Added Successfully", "success");
        window.location.reload(true)
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id)=>{
    fetch(`http://localhost:8080/designation/delete/${id}`,{
  method:'DELETE'
    }).then((result)=>{
      swal("Success", "Designation Deleted Successfully", "success");
      window.location.reload(true)
      result.json().then((response)=>{
        console.warn(response)
      })
    })
  }
  const [ticketDetails, setTicketDetails] = useState([]);
  const options = {method: 'GET'};

fetch('http://localhost:8080/designation/fetchalldesignation', options)
  .then(response => response.json())
  .then(response => setTicketDetails(response))
  .catch(err => console.error(err));
  // console.log(ticketDetails);
  return (
    <>
      <div className="container">
        <div className="d-flex">
          <h3>Designation Master</h3>
          {/* <button type="button" className="btn btn-primary sm-4 mt-2 mx-3">
            Add Designation
          </button> */}
        </div>
        <hr />
        <div className="bg-light">
          <div className="row ">
            <div className="col-sm-6 mt-2">
              <label for="cars" id="label">
                Designation Name:
              </label>
              <br />
              <input
                value={data.designationName}
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                name="designationName"
                onChange={inputChangeHandler}
                placeholder="Enter Designation Name"
              />
            </div>
          </div>
          <button
            onClick={submitHandler}
            type="button"
            class="btn btn-primary  mt-4 "
          >
            Submit
          </button>{" "}
          {/* <button type="button" class="btn btn-primary mt-4">
            View All
          </button> */}
        </div>
      </div>
      <br/><br/>

      <MaterialTable
          columns={[
            {
              title: "Designation Id",
              field: "id",
            },

            {
              title: "Designation Name",
              field: "designationName",
            },
            {
              title: "Actions",
              field: "actions",
              render: (rowData) => (
                // <CustomButton rowData={rowData} onDelete={handleDelete} />
                <Button onClick={() => handleDelete(rowData.id)}>Delete</Button>
              ),
            },
          ]}
          data={ticketDetails}
          title="Designation Record"
        />
    </>
  );
};

export default DesignationMaster;
