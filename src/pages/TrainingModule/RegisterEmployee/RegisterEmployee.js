import { useState,useEffect } from "react";
import MaterialTable from "@material-table/core";
import DeleteIcon from '@mui/icons-material/Delete';

import swal from 'sweetalert';
import { Button } from "react-bootstrap";

const RegisterEmployee = () => {

  const [ticketDetails, setTicketDetails] = useState([]);

 
  const handleDelete = (id)=>{
    fetch(`https://apihrms.atwpl.com/employee/delete/${id}`,{
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

  const options = { method: "GET" };
  const fetchData=()=>{
    fetch("https://apihrms.atwpl.com/employee/get", options)
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
          <h2>Registered Employee for Training</h2>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
       
        <MaterialTable
        title="Training Employee Record"
        data={ticketDetails}
       
          columns={[
            {
                title: "Employee Name",
                field: "employee",
            },
            {
              title:"Event Name",
              field:"eventName"
            },
            {
              title: "Training Name",
              field: "trainingName",
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

export default RegisterEmployee;
