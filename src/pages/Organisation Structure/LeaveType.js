import React,{ useState } from "react";
import MaterialTable from "@material-table/core";
import swal from 'sweetalert';
import { Button } from "react-bootstrap";

const LeaveType= () => {
  const [warningMessage2, setWarningMessage2] = useState(false);
  const [warningMessage, setWarningMessage] = useState(false);
  const [neeraj, setNeeraj] = useState(false);
  const [kukaa, setkukaa] = useState(false);
  const [disabled, setDisabled] = useState(true);



  const [data,setData]=useState({
    // holidayName:'',
    // holidayType:'',
    // admistrator:'',
    // fromDate:'',
    // toDate:'',
  });
 const inputChangeHandler=(e)=>{
  let neeraj=e.target.value;
  setNeeraj(neeraj)
  if (!neeraj.match(/^[A-Za-z ]{0,}[A-Za-z]{0,}$/)){
setWarningMessage2(true)
setWarningMessage(false)
setDisabled(true)
   }   
   else if (neeraj.length==""){
    setWarningMessage(true)
    setWarningMessage2(false)
    setDisabled(true)
       }
   else{
    setWarningMessage2(false)
    setWarningMessage(false)
    setDisabled(false)
         }
    let newData={...data};
    newData[e.target.name]=e.target.value;
    setData(newData)
 }

 const inputChangeHandlers=(e)=>{
  let neeraj=e.target.value;
  setkukaa(neeraj)
  if (!neeraj.match(/^[A-Za-z ]{0,}[A-Za-z]{0,}$/)){
setWarningMessage2(true)
setWarningMessage(false)
setDisabled(true)
   }   
   else if (neeraj.length==""){
    setWarningMessage(true)
    setWarningMessage2(false)
    setDisabled(true)
       }
   else{
    setWarningMessage2(false)
    setWarningMessage(false)
    setDisabled(false)
         }
    let newData={...data};
    newData[e.target.name]=e.target.value;
    setData(newData)
 }


 const submitHandler=(e)=>{
  if(neeraj.length>0 && kukaa.length>0){
  e.preventDefault();
  console.log(JSON.stringify(data))
  fetch("http://localhost:8080/leave/leaveType",{
    method:"POST",
    headers:{
      "content-Type": "application/json", 
      Accept: "application/json",
      },
    body: JSON.stringify(data),
  })
  .then(()=>{
    console.log("LeaveDetail are added")})
    swal("Success", "Holiday Added Successfully", "success").then(()=>{
      window.location.reload(true);
    })
    .catch((err) => console.log(err));
  }
  else{
    setWarningMessage(true)
  }
 }




  const handleDelete = (id)=>{
    fetch(`http://localhost:8080/leave/leavetype/{deletei}`,{
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

   const [leaveDetails, setLeaveDetails] = useState([]);
  const options = {method: 'GET'};

fetch('http://localhost:8080/leave/LeaveType', options)
  .then(response => response.json())
  .then(response => setLeaveDetails(response))
  .catch(err => console.error(err));



return <>
<div className="container">

  <h4>Add Leave Type</h4>
  <hr />
  <div className="bg-light p-3 rounded">
  <div className="row ">
    
    

  <form action="">
  <div className="row ">
  <div className="col-sm-6">
  <label  class="form-label">Leave Type :</label><br/>
  <input type="text"  placeholder="Enter leave type..." class="form-control"  id="formGroupExampleInput" value={data.leaveType}  name="leaveType" onChange={inputChangeHandler} required/>
  </div>
  <div className="col-sm-6">
  <label  class="form-label">Discription :</label><br/>
  <input type="text"  placeholder="Enter leave type..." class="form-control"  id="formGroupExampleInput" value={data.description}  name="Discription" onChange={inputChangeHandlers} required/>
  </div></div>
  <button type='submit' disabled={disabled} onClick={submitHandler} className="btn btn-primary mt-4">save</button>
</form>
</div>

</div>
</div> 
                     {
              warningMessage?
              <span style={{color:'red'}}><i> &nbsp; <i class="fa fa-exclamation-circle" aria-hidden="true"></i> Empty field not allowed.</i></span>
              : null
            }
            {
              warningMessage2?
              <span style={{color:'red'}}><i> &nbsp; <i class="fa fa-exclamation-circle" aria-hidden="true"></i> Only alphabets allowed.</i></span>
              : null
            }
<br></br>

<br></br>
<MaterialTable
          columns={[
            {
              title: "Sr.No.",
              field: "id",
            },
            {
              title: "Leave Type",
              field: "leaveType",
            },

            {
              title: "Description",
              field: "description",
            },
            {
            title: "Actions",
            field: "actions",
            render: (rowData) => (
              <Button className="btn btn-danger" onClick={() => handleDelete(rowData.id)}><i class="fa fa-trash" aria-hidden="true"></i></Button>
              )
            },
            
          ]}
          data={leaveDetails}
          title="Leave Type Record"
        />
</>
}

export default LeaveType;