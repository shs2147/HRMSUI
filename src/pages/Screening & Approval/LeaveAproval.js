import React from 'react'
import MaterialTable from "@material-table/core";
import { useState,useEffect } from "react";

const LeaveAproval = () => {

  const[leave,setLeave]=useState([])

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

  return (
    <>
    <div className="container">
      <h4>Leave Aproval</h4>    
      <hr />
      <MaterialTable
        title="Department Record"
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
              title: "No. Of Days",
              field: "days",
            },

          
            // {
            //   title: "Actions",
            //   field: "actions",
            //   render: (rowData) => (
            //     // <CustomButton rowData={rowData} onDelete={handleDelete} />
            //     <Button onClick={() => handleDelete(rowData.id)}>Delete</Button>
            //   ),
            // },
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