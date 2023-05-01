import { useState,useEffect } from "react";
import MaterialTable from "@material-table/core";
import DeleteIcon from '@mui/icons-material/Delete';

import swal from 'sweetalert';
import { Button } from "react-bootstrap";

const ViewEmployeeShift = () => {

  const [data, setData] = useState([]);
  const inputChangeHandler = (e) => {
    let newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  const [ticketDetails, setTicketDetails] = useState([]);

  const handleDelete = (id)=>{
    fetch(`http://localhost:8080/shiftmanagement/addshift/${id}`,{
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
    fetch("http://localhost:8080/shiftmanagement/viewshift", options)
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
          <h3>View Shift Data</h3>
        </div>
        
        <br/>
        <MaterialTable
        title="Shift Record"
        data={ticketDetails}
       
          columns={[
            {
              title: "Employee Name",
              field: "employee",
            },

            {
              title: "Country",
              field: "country",
            },
            {
                title: "Date",
                field: "date",
            },
            {
                title: "Start Time",
                field: "startTime",
              },
              {
                title: "End Time",
                field: "endTime",
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

export default ViewEmployeeShift;
