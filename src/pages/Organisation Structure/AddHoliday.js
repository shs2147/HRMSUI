import React,{ useState } from "react";
import MaterialTable from "@material-table/core";
import swal from 'sweetalert';

const AddHoliday= () => {
   const [warningMessage2, setWarningMessage2] = useState(false);
  const [warningMessage, setWarningMessage] = useState(false);
  const [neeraj, setNeeraj] = useState(false);
  const [kukaa, setkukaa] = useState(false);
  const [bhanwala, setBhanwala] = useState(false);
  const [bhanwalas, setBhanwalas] = useState(false);
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
  if (!neeraj.match(/^[A-Za-z-()_/a-z ]{0,}$/)){
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
  if (!neeraj.match(/^[A-Za-z-/a-z ]{0,}$/)){
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

 const inputChangeHandlerss=(e)=>{
  let neeraj=e.target.value;
  setBhanwala(neeraj)  
   if (neeraj.length==""){
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

 const inputChangeHandlersss=(e)=>{
  let neeraj=e.target.value;
  setBhanwalas(neeraj)  
   if (neeraj.length==""){
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
    if(neeraj.length>0 && kukaa.length>0 && bhanwala.length>0 && bhanwalas.length>0){
  e.preventDefault();
  console.log(JSON.stringify(data))
  fetch("http://localhost:8080/holiday/leaveDetail",{
    method:"POST",
    headers:{"content-Type": "application/json", "Accept": "application/json"},
    body:JSON.stringify(data)
  }).then(()=>{
    console.log("LeaveDetail are added")})
    swal("Success", "Holiday Added Successfully", "success").then(()=>{
          window.location.reload(true);
    })

  }
 }

 const [holidayDetails, setHolidayDetails] = useState([]);
  const options = {method: 'GET'};

fetch('http://localhost:8080/holiday/leaveDetails', options)
  .then(response => response.json())
  .then(response => setHolidayDetails(response))
  .catch(err => console.error(err));

return <>
<div className="container">
  <h4>Add Holiday</h4>
  {/* <button type="button" class="btn btn-primary sm-4 mt-2">Add Holiday Master</button>    */}
  <hr />
  <form>
  <div className="bg-light">
  <div className="row ">
    
    
  <div className="col-sm-6">
  <label  class="form-label">Holiday Name:</label><br/>
  <input placeholder="Enter Holiday Name" value={data.holidayName} type="Text" class="form-control" id="formGroupExampleInput" name="holidayName" onChange={inputChangeHandler} required />
</div>
<div className="col-sm-6">
  <label  class="form-label">Holiday Type:</label><br/>
  <input placeholder="Enter Holiday Type" value={data.holidayType} type="Text" class="form-control" id="formGroupExampleInput" name="holidayType" onChange={inputChangeHandlers} required />
</div>
{/* <div className="col-sm-6 mt-2">
       <label for="cars" id='label'>Holiday Type:</label>
     <br/>  
 
 <select value={data.holidayType} class="form-select" aria-label="Default select example" name="holidayType" onChange={inputChangeHandler}> 
 <option selected disabled>Admistrator</option>
  <option value="aman">Aman</option>
  <option value="amit">Amit</option>
  <option value="ranjan">Ranjan</option>
  <option value="saurav">Saurav</option>
</select>
</div> */}

 <div className="col-sm-6">
  <label  class="form-label">From Date</label><br/>
  <input value={data.fromDate} type="Date" class="form-control" id="formGroupExampleInput" name="fromDate" onChange={inputChangeHandlerss} required />

</div>

<div className="col-sm-6">
  <label  class="form-label">To Date</label><br/>
  <input value={data.toDate} type="Date" class="form-control" id="formGroupExampleInput" name="toDate" onChange={inputChangeHandlersss} required/>

</div>

</div>

<button type="submit" disabled={disabled} onClick={submitHandler}  className="btn btn-primary mt-4">Save</button>
{
              warningMessage?
              <span style={{color:'red'}}><i> &nbsp; <i class="fa fa-exclamation-circle" aria-hidden="true"></i> Empty field not allowed.</i></span>
              : null
            }
            {
              warningMessage2?
              <span style={{color:'red'}}><i> &nbsp; <i class="fa fa-exclamation-circle" aria-hidden="true"></i> This stroke not allowed.</i></span>
              : null
            }
</div>

</form>
</div>
<MaterialTable
          columns={[
            {
              title: "Holiday Name",
              field: "holidayName",
            },

            {
              title: "Holiday Type",
              field: "holidayType",
            },
            {
              title: "From Date",
              field: "fromDate",
            },
            {
              title: "To Date",
              field: "toDate",
            },
          ]}
          data={holidayDetails}
          title="Holiday Record"
        />
</>
}

export default AddHoliday;