import MaterialTable from "@material-table/core";
import React, { useEffect, useState } from "react";
// import { Modal } from "react-bootstrap";
import { ExportCsv, ExportPdf } from "@material-table/exporters";
import swal from 'sweetalert';
import { Button } from "react-bootstrap";

const Form3 = () => {
  const [userModal, setUserModal] = useState(false);
  const [data, setData] = useState([]);
  const [ticketDetails, setTicketDetails] = useState([]);

  const showUserModal = () => {
    setUserModal(true);
  };
  const closeUserModal = () => {
    setUserModal(false);
  };

  const handleDelete = (id)=>{
    fetch(`http://localhost:8080/basic/delete/${id}`,{
  method:'DELETE'
    }).then((result)=>{
      swal("Success", "Designation Deleted Successfully", "success").then(()=>{
        window.location.reload(true)
      })
      result.json().then((response)=>{
        console.warn(response)
      })
    })
  }

  const fetchData = () => {
    fetch("http://localhost:8080/basic/fetchdata", {})
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        setTicketDetails(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);

  return (
    <>
      <MaterialTable
        columns={[
          {
            title: "Employee Name",
            field: "employeeName",
          },
          {
            title: "Employee Code",
            field: "employeeId",
          },
          {
            title: "Department Name",
            field: "selectDepartment",
          },
          {
            title: "Email Id",
            field: "email",
          },
          {
            title: "Designation",
            field: "designation",
          },
          {
            title: "Work Type",
            field: "workType",
          },
          {
            title: "Reported To",
            field: "reportingTo",
          },
          {
            title:"CTC",
            field:"ctc",
          },
          {
            title:"PF Number",
            field:"pfnumber",
          },
          {
            title: "Actions",
            field: "actions",
            render: (rowData) => (
              <Button onClick={() => handleDelete(rowData.id)}>Delete</Button>
            ),
          },
          
        ]}
        data={ticketDetails}
        options={{
          
          exportMenu: [
            {
              label: "Export PDF",
              exportFunc: (cols, datas) =>
                ExportPdf(cols, datas, "UserRecords"),
            },
            {
              label: "Export CSV",
              exportFunc: (cols, datas) =>
                ExportCsv(cols, datas, "userRecords"),
            },
          ],
          headerStyle: {
            backgroundColor: "darkblue",
            color: "#FFF",
          },
          rowStyle: {
            backgroundColor: "#EEE",
          },
        }}
        title="Employee Record"
      />

    </>
  );
};

export default Form3;
