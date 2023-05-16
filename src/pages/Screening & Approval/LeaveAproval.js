import React from 'react'
import MaterialTable from "@material-table/core";
import { useState,useEffect } from "react";
import { Button } from 'react-bootstrap';

const LeaveAproval = () => {

  const[leave,setLeave]=useState([])
  const[data,setData]=useState([])
  const[approve,setApprove]=useState([]);
  const[approveId,setApproveId]=useState([])
  const[disapproveId,setDisApproveId]=useState([])
  const[disApprove,setDisApprove]=useState([])

  const options = { method: "GET" };
  const fetchData=()=>{
    fetch("http://localhost:8080/CreateLeaveRequest/get", options)
    .then((response) => response.json())
    .then((response) => setLeave(response))
    .catch((err) => console.error(err));
  }
  
  useEffect(()=>{
    fetchData();
  },[])



//   const submitHandler = (id,status) => {
//     // e.preventDefault();

//   console.log(approve);
//   fetch("http://localhost:8080/approve/save", {
//       method: "POST",
//       headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//       },
//       body: JSON.stringify({id:id ,status:status}),
//   })
//   .then(() => {
//       console.log("department Added");
//   })
//   // setApprove(!approve)
//   // .catch((err) => console.log(err));
// };

function approveHandle(id, status) {




  console.log(id, "idd")
  
  console.log(status, "remark")
  
  
  
  
  fetch(
  
   "http://localhost:8080/approve/save",
  
   {
  
  method: "POST",
  
  headers: {
  
   "Content-Type": "application/json",
  
   Authorization: `Bearer ${localStorage.getItem("token")}`,
  
  },
  
  body: JSON.stringify({ id: id, status: status }),
  
   }
  
  )
  
   .then((response) => response.json())
  
   .then((data) => console.log("aprrove data", data));
  
  fetchData();
  
  setApprove(!approve)
   }

   function disApproveHandle(id, status) {




    console.log(id, "idd")
    
    console.log(status, "remark")
    
    
    
    
    fetch(
    
     "http://localhost:8080/disApprove/save",
    
     {
    
    method: "POST",
    
    headers: {
    
     "Content-Type": "application/json",
    
     Authorization: `Bearer ${localStorage.getItem("token")}`,
    
    },
    
    body: JSON.stringify({ id: id, status: status }),
    
     }
    
    )
    
     .then((response) => response.json())
    
     .then((data) => console.log("disaprrove data", data));
    
    fetchData();
    
    setDisApprove(!disApprove)
     }
  

  return (
    <>
    <div className="container">
      <h4>Leave Aproval</h4>    
      <hr />
      <MaterialTable
        title="Leave Record"
        data={leave}
       
          columns={[
            {
              title: "Employee Name",
              field: "selectEmployee",
            },

            {
              title: "Leave Approver",
              field: "leaveApprover",
            },
            {
              title: "Leave Type",
              field: "leaveType",
            },
            {
              title: "Start Date",
              field: "startDate",
            },
            {
              title: "End Date",
              field: "endDate",
            },
            {
              title: "Reason",
              field: "reasonForLeave",
            },
            {
              title: "Actions",
              field: "actions",
              render: (rowData) => (
                <div className="w-100" style={{ display: "flex", justifyContent: "space-between" }}>
                 {rowData.status === "APPROVED" ? (

                              <button
                  
                                className="btn btn-sm btn-outline-danger px-3 rounded-4"
                  
                                onClick={() => {
                  
                                  disApproveHandle()
                    setDisApproveId(rowData?.id)
                    setDisApprove(!disApprove)
                                  // setDisApprove(!disApprove)
                  
                                  // setDisApproveId(rowData?.id)
                  
                  
                  
                  
                                  console.log("row1222", rowData)
                  
                  
                  
                  
                                  localStorage.setItem("jobDetailId", rowData?.id);
                  
                                }}
                  
                              >
                  
                                {('Disapprove')}
                  
                              </button>
                  
                            ) : (
                  
                              <button
                  
                                className="btn btn-sm btn-outline-success px-3 rounded-4"
                  
                                onClick={() => {
                                  approveHandle()
                    setApproveId(rowData?.id)
                    setApprove(!approve)
                  
                                  // setApproveId(rowData?.id)
                  
                                  // setApprove(!approve)
                  
                  
                  
                  
                                  console.log("row11", rowData?.id)
                  
                  
                  
                  
                                  localStorage.setItem("jobDetailId", rowData?.id);
                  
                                }}
                  
                              >
                  
                                {('Approve')}
                  
                              </button>
                  
                            )
                  
                            }
                            </div>
                // <div style={{ display: 'flex', justifyContent:"space-between"}}>
                //   <Button onClick={()=>{
                //     approveHandle()
                //     setApproveId(rowData?.id)
                //     setApprove(!approve)
                //   }}>Approve</Button>&nbsp;
                //   <Button>Reject</Button>
                // </div>
              ),
            }
          ]}
        />
      {/* <table style={{width:'75vw'}} className='table'>
    <caption>Showing Result 1 To 1 of 1</caption>
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Request By</th>
        <th scope="col">Leave Type</th>
        <th scope="col">Start Date</th>
        <th scope="col">End Date</th>
        <th scope="col">No. of days</th>
        <th scope="col">Reason</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="sl">1</td>
        <td data-label="Request By">RADHA</td>
        <td data-label="Leave Typ">CL</td>
        <td data-label="Start Date">24-10-2022</td>
        <td data-label="End Date">26-10-2022</td>
        <td data-label="No. of days">2</td>
        <td data-label="Reason">sick</td>
        <td data-label="Status">Pending</td>
      </tr>
  
      
      
    </tbody>
  </table> */}
    </div>
    </>
  )
}

export default LeaveAproval