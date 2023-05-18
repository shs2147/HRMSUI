import MaterialTable from "@material-table/core";
import { useState } from "react";
import swal from 'sweetalert';
import { Button } from "react-bootstrap";

const Branch = () => {
  const [warningMessage, setWarningMessage] = useState(false);
  const [warningMessage2, setWarningMessage2] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [data, setData] = useState({
    name: "",
  });
  const inputChangeHandler = (e) => {
    let neeraj=e.target.value;
  if (!neeraj.match(/^[A-Za-z ]{0,}[A-Za-z]{0,}$/)){
setWarningMessage2(true)
setWarningMessage(false)
setDisabled(true)
   }
   else if (neeraj.length<1){
    setWarningMessage(true)
    setWarningMessage2(false)
    setDisabled(true)
       }
   else{
    setWarningMessage(false)
    setWarningMessage2(false)
    setDisabled(false)
         }
    let newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
    // console.log(JSON.stringify(newData))
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(data));
    fetch("http://localhost:8080/branch/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log("Branch Name Added");
        swal("Success", "Branch Added Successfully", "success").then(()=>{
          window.location.reload(true);
        })
      })
      .catch((err) => console.log(err));
  };
 
  const handleDelete = (id)=>{
    fetch(`http://localhost:8080/branch/delete/${id}`,{
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

  //  const submitHandler=(e)=>{
  //     e.preventDefault();
  //  }
  const [ticketDetails, setTicketDetails] = useState([]);
  const options = { method: "GET" };

  fetch("http://localhost:8080/branch/fetchdata", options)
    .then((response) => response.json())
    .then((response) => setTicketDetails(response))
    .catch((err) => console.error(err));

  return (
    <>
      <div className="container">
        <div className="d-flex">
          <h3>Branch Office</h3>
          {/* <button type="button" className="btn btn-primary sm-4 mt-2 mx-3">Add Employment Type</button> */}
        </div>
        <hr />
        <h5>Add Branch Office</h5>
        <form onSubmit={submitHandler} className="bg-light">
          <div className="row ">
            <div className="col-sm-4 mt-2">
              <label for="cars" id="label">
               Branch Name:
              </label>
              <br />
              <input
                value={data.name}
                placeholder='Enter branch name'
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                name="name"
                onChange={inputChangeHandler}
              />     
                     {
              warningMessage?
              <span style={{color:'red'}}><i> &nbsp; <i class="fa fa-exclamation-circle" aria-hidden="true"></i> Please enter branch name.</i></span>
              : null
            }
            {
              warningMessage2?
              <span style={{color:'red'}}><i> &nbsp; <i class="fa fa-exclamation-circle" aria-hidden="true"></i> Only alphabets allowed.</i></span>
              : null
            }
            </div>

            {/* <div className="col-sm-6 mt-2">
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
              />
            </div> */}
          </div>
          <button disabled={disabled} type="submit" class="btn btn-primary  mt-4 ">
            Save
          </button>
        </form>
      </div>   <br/><br/>
      <MaterialTable
      title="Branch Record"
      data={ticketDetails}

        columns={[
               {
            title: "Branch Id",
            field: "id",
          },
          {
            title: "Branch Name",
            field: "name",
          },
          {
            title: "Actions",
            field: "actions",
            render: (rowData) => (
              <Button className="btn btn-danger" onClick={() => handleDelete(rowData.id)}><i class="fa fa-trash" aria-hidden="true"></i></Button>
              )
            },

       
        ]}
       
        
      />
    </>
  );
};

export default Branch;
