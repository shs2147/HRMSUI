import { useState,useEffect } from "react";
import MaterialTable from "@material-table/core";
import swal from 'sweetalert';
import { Button } from "react-bootstrap";
// import MaterialTable from 'material-table';
// import { SaveAlt } from '@material-ui/icons';


const EmployeeMaster = () => {


  const [ticketDetails, setTicketDetails] = useState([]);


  const handleDelete = (employeeId)=>{
    fetch(`http://localhost:8080/basic/delete/${employeeId}`,{
  method:'DELETE'
    }).then((result)=>{
      swal("Success", "Employee Deleted Successfully", "success").then(()=>{
        window.location.reload(true);
      });
      
      result.json().then((response)=>{
        console.warn(response)
      })
    })
  }

  const options = { method: "GET" };
  const fetchData=()=>{
    fetch("http://localhost:8080/basic/fetchdata", options)
    .then((response) => response.json())
    .then((response) => setTicketDetails(response))
    .catch((err) => console.error(err));
  }
  
  useEffect(()=>{
    fetchData();
  },[])
  


  return (
    <>
      <div className="container">

      <div className="d-flex">
          <h2>Employee Master Data</h2>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>

        <MaterialTable
        title="Employee Record"
        data={ticketDetails}
       
          columns={[
            {
              title: "Employee Id",
              field: "employeeId",
            },

            {
              title: "Employee Name",
              field: "employeeName",
            },
            {
              title: "Department Name",
              field: "selectDepartment",
            },
            {
              title: "Designation Name",
              field: "designation",
            },
            {
              title: "Email Id",
              field: "email",
            },
            {
              title: "Mobile Number",
              field: "mobile",
            },
            {
              title: "Joining Date",
              field: "joiningDate",
            },
            {
              title: "Reporting To",
              field: "reportingTo",
            },
            {
              title: "Date of Birth",
              field: "dob",
            },
            {
              title: "CTC",
              field: "ctc",
            },
            {
              title: "PF Number",
              field: "pfnumber",
            },
            {
              title: "PAN Number",
              field: "panNumber",
            },
            {
              title: "Aadhar Number",
              field: "aadhaarNumber",
            },
            
            {
              title: "Actions",
              field: "actions",
              render: (rowData) => (
                <Button onClick={() => handleDelete(rowData.employeeId)}>Delete</Button>
              ),
            },
          ]}
          icons={{
            // Export: () => <SaveAlt />,
          }}

          options={{
            
            exportButton: true,
            exportCsv: (columns, data) => {
              alert('You should develop a code to export ' + data.length + ' rows');
            }}}
         

        />
      </div>
    </>
  );
};

export default EmployeeMaster;
