import React,{ useState } from "react";
import MaterialTable from "@material-table/core";
import swal from 'sweetalert';

const LeaveType= () => {
  const [data,setData]=useState({
    // holidayName:'',
    // holidayType:'',
    // admistrator:'',
    // fromDate:'',
    // toDate:'',
  });
 const inputChangeHandler=(e)=>{
    let newData={...data};
    newData[e.target.name]=e.target.value;
    setData(newData)
 }
 const submitHandler=(e)=>{
  console.log(JSON.stringify(data))

  fetch("http://localhost:8080/leave/LeaveType",{
    method:"POST",
    headers:{"content-Type": "application/json", "Accept": "application/json"},
    body:JSON.stringify(data)
  }).then(()=>{
    console.log("LeaveDetail are added")})
    swal("Success", "Holiday Added Successfully", "success");

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
  {/* <button type="button" class="btn btn-primary sm-4 mt-2">Add Holiday Master</button>    */}
  <hr />
  <div className="bg-light">
  <div className="row ">
    
    
  <div className="col-sm-6">
  <label  class="form-label">Leave Type :</label><br/>
  <input placeholder="Enter leave type..." value={data.leaveType} type="Text" class="form-control" id="formGroupExampleInput" name="leaveType" onChange={inputChangeHandler} />
</div>
<div className="col-sm-6">
  <label  class="form-label">Description :</label><br/>
  <input placeholder="Describe here..." value={data.description} type="Text" class="form-control" id="formGroupExampleInput" name="description" onChange={inputChangeHandler} />
</div>


</div>
<button onClick={submitHandler} className="btn btn-primary mt-4">Save</button>
</div>
<br></br>
</div>
<br></br>
<MaterialTable
          columns={[
            {
              title: "Leave Type",
              field: "leaveType",
            },

            {
              title: "Description",
              field: "description",
            },
            
          ]}
          data={leaveDetails}
          title="Leave Type Record"
        />
</>
}

export default LeaveType;