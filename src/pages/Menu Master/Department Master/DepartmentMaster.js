

import { useState } from "react";

const DepartmentMaster = () => {


 const submitHandler=(e)=>{
    e.preventDefault();
  console.log(data)
    fetch('http://localhost:8080/savedepartment', {

            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body:JSON.stringify(data)
        }).then(() => {
            console.log("Basic Information Added");
        }).catch(err=>console.log(err))
        
 }

const [data,setData]=useState({

});
const inputChangeHandler=(e)=>{
  let newData={...data};
  newData[e.target.name]=e.target.value;
  setData(newData)

}
//  const submitHandler=(e)=>{
//     e.preventDefault();
//  }

return <>
<div className="container">
 <div className="d-flex">
  <h3>Add Department</h3>
  <button type="button" className="btn btn-primary sm-4 mt-2 mx-3">Add Department Master</button>
  </div> 
  <hr />
  <h6>Add/Edit Department</h6>
  <form onSubmit={submitHandler} className="bg-light">
  <div className="row ">
    
    
  <div className="col-sm-6 mt-2">
       <label for="cars" id='label'>Department ID:</label>
     <br/>
  <input value={data.departmentId} type="number" class="form-control" id="formGroupExampleInput" name="departmentId" onChange={inputChangeHandler}/>
</div>

<div className="col-sm-6 mt-2">
       <label for="cars" id='label'>Department Name:</label>
     <br/>
  <input value={data.departmentName} type="text" class="form-control" id="formGroupExampleInput" name="departmentName" onChange={inputChangeHandler}/>
</div>




<div className="col-sm-6 mt-2">
       <label for="cars" id='label'>Description:</label>
     <br/>
  <input value={data.description} type="text" class="form-control" id="formGroupExampleInput" name="description" onChange={inputChangeHandler}/>
</div>





</div>
<button type="submit" class="btn btn-primary mt-4">Save</button>
</form>
</div>
</>
}

export default DepartmentMaster;