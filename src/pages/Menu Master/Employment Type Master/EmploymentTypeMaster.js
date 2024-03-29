import MaterialTable from "@material-table/core";
import { useState,useEffect } from "react";
import { Button } from "react-bootstrap";
import swal from 'sweetalert';

const EmploymentTypeMaster = () => {
  const [data, setData] = useState({
    name: "",
  });
  const inputChangeHandler = (e) => {
    let newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
    // console.log(JSON.stringify(newData))
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(data));
    fetch("https://apihrms.atwpl.com/employment/saveEmployement", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log("Employement Master Added");
        swal("Success", "Employement Master Added Successfully", "success").then(()=>{
          window.location.reload(true)
        })
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id)=>{
    fetch(`https://apihrms.atwpl.com/employment/delete/${id}`,{
  method:'DELETE'
    }).then((result)=>{

      swal("Success", "Data Deleted Successfully", "success").then(()=>{
        window.location.reload(true)
      })
      result.json().then((response)=>{
        console.warn(response)
      })
    })
  }
  
  const [ticketDetails, setTicketDetails] = useState([]);
  const options = { method: "GET" };
  const fetchData=()=>{
    fetch("https://apihrms.atwpl.com/getAllEmp", options)
    .then((response) => response.json())
    .then((response) => setTicketDetails(response))
    .catch((err) => console.error(err));
  }
  
  useEffect(()=>{
    fetchData();
  },[])

  // fetch("https://apihrms.atwpl.com/getallEmp", options)
  //   .then((response) => response.json())
  //   .then((response) => setTicketDetails(response))
  //   .catch((err) => console.error(err));

  return (
    <>
      <div className="container">
        <div className="d-flex">
          <h3>Employment Type Master</h3>
          {/* <button type="button" className="btn btn-primary sm-4 mt-2 mx-3">Add Employment Type</button> */}
        </div>
        <hr />
        <h5>Add Employment Type</h5>
        <form onSubmit={submitHandler} className="bg-light">
          <div className="row ">
            <div className="col-sm-4 mt-2">
              <label for="cars" id="label">
                Employment Type: <span style={{color:'red'}}> * </span>
              </label>
              <br />
              <input
                value={data.employmentType}
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                name="employmentType"
                onChange={inputChangeHandler}
                placeholder="Enter Employement Type"
                required
              />
            </div>

            <div className="col-sm-6 mt-2">
              <label for="cars" id="label">
                Description : <span style={{color:'red'}}> * </span>
              </label>
              <br />
              <input
                value={data.description}
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                name="description"
                onChange={inputChangeHandler}
                placeholder="Enter Description here"
                required
              />
            </div>
          </div>
          <button type="submit" class="btn btn-primary  mt-4 ">
            Save
          </button>
        </form>
      </div>   <br/><br/>
      <MaterialTable
        columns={[
          {
            title: "Employment Type",
            field: "employmentType",
          },

          {
            title: "Description",
            field: "description",
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
        title="Employment Record"
      />
    </>
  );
};

export default EmploymentTypeMaster;
