import { useState,useEffect } from "react";
import MaterialTable from "@material-table/core";
import swal from 'sweetalert';
import { Button } from "react-bootstrap";


const DepartmentMaster = () => {

 
  const submitHandler = (e) => {
      e.preventDefault();

    console.log(data);
    fetch("http://localhost:8080/department/savedepartment", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(data),
    })
    .then(() => {
        console.log("department Added");
        swal("Success", "Department Added Successfully", "success").then(() => {
            window.location.reload(true);
        });
    })
    .catch((err) => console.log(err));
  };

  const [data, setData] = useState([]);
  const inputChangeHandler = (e) => {
    let newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
    };
  //  const submitHandler=(e)=>{
  //     e.preventDefault();
  //  }
  const [ticketDetails, setTicketDetails] = useState([]);

  // const CustomButton = ({ rowData, onDelete }) => (
  //   <Button onClick={() => console.log("dqwd")}>Delete</Button>
  // );
  const handleDelete = (id)=>{
    fetch(`http://localhost:8080/department/delete/${id}`,{
  method:'DELETE'
    }).then((result)=>{
      swal("Success", "Department Deleted Successfully", "success").then(()=>{
        window.location.reload(true);
      });
      
      result.json().then((response)=>{
        console.warn(response)
      })
    })
  }

  const options = { method: "GET" };
  const fetchData=()=>{
    fetch("http://localhost:8080/department/getall", options)
    .then((response) => response.json())
    .then((response) => setTicketDetails(response))
    .catch((err) => console.error(err));
  }
  
  useEffect(()=>{
    fetchData();
  },[])
  

 

  // fetch("http://localhost:8080/department/getall", options)
  //   .then((response) => response.json())
  //   .then((response) => setTicketDetails(response))
  //   .catch((err) => console.error(err));

  return (
    <>
      <div className="container">
        <div className="d-flex">
          <h3>Add Department</h3>
          {/* <button type="button" className="btn btn-primary sm-4 mt-2 mx-3">
            Add Department Master
          </button> */}
        </div>
        <hr />
        <h6>Add Department</h6>
        <form onSubmit={submitHandler} className="bg-light">
          <div className="row ">
            {/* <div className="col-sm-6 mt-2">
       <label for="cars" id='label'>Department ID:</label>
     <br/>
  <input value={data.departmentId} type="number" class="form-control" id="formGroupExampleInput" name="departmentId" onChange={inputChangeHandler}/>
</div> */}

            <div className="col-sm-6 mt-2">
              <label for="cars" id="label">
                Department Name:<span style={{color:'red'}}>*</span>
              </label>
              <br />
              <input
                value={data.departmentName}
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                name="departmentName"
                onChange={inputChangeHandler}
                placeholder="Enter Department Name"
                required
              />
            </div>

            <div className="col-sm-6 mt-2">
              <label for="cars" id="label">
                Description:<span style={{color:'red'}}>*</span>
              </label>
              <br />
              <input
                value={data.description}
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                name="description"
                onChange={inputChangeHandler}
                placeholder="Enter Description Here"
                required

              />
            </div>
          </div>
          <button type="submit" class="btn btn-primary mt-2 mb-2" >
            Save
          </button>

        </form>
        <br/>
        <MaterialTable
        title="Department Record"
        data={ticketDetails}
       
          columns={[
            {
              title: "Department Name",
              field: "departmentName",
            },

            {
              title: "Description",
              field: "description",
            },
            {
              title: "Actions",
              field: "actions",
              render: (rowData) => (
                <Button onClick={() => handleDelete(rowData.id)}>Delete</Button>
              ),
            },
          ]}
         
         

        />
      </div>
    </>
  );
};

export default DepartmentMaster;
