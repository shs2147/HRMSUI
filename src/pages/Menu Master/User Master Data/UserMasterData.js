import { useState,useEffect } from "react";
import MaterialTable from "@material-table/core";
import DeleteIcon from '@mui/icons-material/Delete';

import swal from 'sweetalert';
import { Button } from "react-bootstrap";

const UserMasterData = () => {

  const [ticketDetails, setTicketDetails] = useState([]);

 
  const handleDelete = (id)=>{
    fetch(`http://localhost:8080/usermaster/delete/${id}`,{
  method:'DELETE'
    }).then((result)=>{
      swal("Success", "UserData Deleted Successfully", "success").then(()=>{
        window.location.reload(true)
      })
        
      result.json().then((response)=>{
        console.warn(response)
      })
    })
  }
  const token = sessionStorage.getItem("token2");
  // const options = { method: "GET" };
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const fetchData=()=>{
    fetch("http://localhost:8080/employees/getAll", options)
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
          <h2>User Master Data</h2>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
       
        <MaterialTable
        title="User Master Record"
        data={ticketDetails}
       
          columns={[
            {
                title: "Employee Name",
                field: "employeeName",
            },
            {
              title: "Department Name",
              field: "departmentName",
            },
            {
              title: "User Name",
              field: "userName",
            },
            {
                title: "Role",
                field: "roles",
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

export default UserMasterData;
