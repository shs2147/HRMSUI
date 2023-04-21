import { useState,useEffect } from "react";
import MaterialTable from "@material-table/core";
import DeleteIcon from '@mui/icons-material/Delete';

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
        // swal("Hello world!");
        swal("Success", "Department Added Successfully", "success");
        window.location.reload(true)

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
      swal("Success", "Department Deleted Successfully", "success");
      window.location.reload(true)
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
                Department Name:
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
              />
            </div>

            <div className="col-sm-6 mt-2">
              <label for="cars" id="label">
                Description:
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
              />
            </div>
          </div>
          <button type="submit" class="btn btn-primary mt-4">
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
                // <CustomButton rowData={rowData} onDelete={handleDelete} />
                <Button onClick={() => handleDelete(rowData.id)}>Delete</Button>
              ),
            },
          ]}
          
      
          // editable={
          //   {
          //     onRowDelete: selectedRow => new Promise((resolve,reject)=>{
          //       console.log(ticketDetails);
          //       // console.log("aaaaaa", ticketDetails);

          //       const index =selectedRow.id;
          //       const deleteUser= (index)=>{
          //         fetch(`http://localhost:8080/employee/delete/${index}`,{
          //       method:'DELETE'
          //         }).then((result)=>{
          //           result.json().then((response)=>{
          //             console.warn(response)
          //           })
          //         })
                
                
          //       }
          //       console.log(index);
          //       const updateRows = [...ticketDetails]
          //       updateRows.splice(index-1,1)
          //       setTicketDetails(updateRows);
          //       console.log(updateRows);
          //       resolve()
                
          //     })
                
                
          //   }
          // }

          // editable={{
          //   onRowDelete: (selectedRow) =>
          //     new Promise((resolve, reject) => {
          //       const index = selectedRow.id;
          //       console.log(index);
          //       const updateRows = [...ticketDetails];
          //       updateRows.splice(index, 1);
          //       setData(updateRows); // assuming you're using React state
          //       resolve();
          //     }),
          // }}
          // options={{
          //   actionsColumnIndex:-1
          // }}
         

        />
      </div>
    </>
  );
};

export default DepartmentMaster;
