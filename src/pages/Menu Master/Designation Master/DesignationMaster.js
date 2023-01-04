

import { useState } from "react";

const DesignationMaster = () => {
const [data,setData]=useState({
 
});
const inputChangeHandler=(e)=>{
  let newData={...data};
  newData[e.target.name]=e.target.value;
  setData(newData)
  // console.log(JSON.stringify(newData))
}
 const submitHandler=(e)=>{
    e.preventDefault();
     fetch('http://localhost:8080/savedesignation', {

            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body:JSON.stringify(data)
        }).then(() => {
            console.log("Designation Name Added");
        }).catch(err=>console.log(err))
 }

return <>
<div className="container">
 <div className="d-flex">
  <h3>Designation Master</h3>
  <button type="button" className="btn btn-primary sm-4 mt-2 mx-3">Add Designation</button>
  </div> 
  <hr />
  <div className="bg-light">
  <div className="row ">
    
    
  <div className="col-sm-6 mt-2">
       <label for="cars" id='label'>Designation Name:</label>
     <br/>
  <input value={data.designationName} type="text" class="form-control" id="formGroupExampleInput" name="designationName" onChange={inputChangeHandler}/>
</div>
</div>
<button onClick={submitHandler} type="button" class="btn btn-primary  mt-4 ">Submit</button>    <button type="button" class="btn btn-primary mt-4">View All</button>
</div>
</div>
</>
}

export default DesignationMaster;