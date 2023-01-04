import { useState } from "react";

  const Employee = () => {
    const [data,setData]=useState({
      empid:'',
      depid:'',
      firstname:'',
      middlename:'',
      lastname:'',
      salary:'',
    });
   const inputChangeHandler=(e)=>{
      let newData={...data};
      newData[e.target.name]=e.target.value;
      setData(newData)
   }
   const submitHandler=(e)=>{
    console.log(JSON.stringify(data))
  }
   return <>
   <div className="container">
    <div className="d-flex">
     <h3>Employee</h3>
     </div> 
     <hr />
     <div className="bg-light">
     <div className="row ">
  
   <div className="col-sm-4 mt-2">
          <label for="cars" id='label'>EMP ID:</label>
        <br/>
     <input value={data.empid} type="text" class="form-control" id="formGroupExampleInput" name="empid" onChange={inputChangeHandler}/>
   </div>
   <div className="col-sm-4 mt-2">
          <label for="cars" id='label'>DEP ID:</label>
        <br/>
     <input value={data.depid} type="text" class="form-control" id="formGroupExampleInput" name="depid" onChange={inputChangeHandler}/>
   </div>

   <div className="col-sm-4 mt-2">
          <label for="cars" id='label'> First Name:</label>
        <br/>
     <input value={data.firstname} type="text" class="form-control" id="formGroupExampleInput" name="firstname" onChange={inputChangeHandler}/>
   </div>
   <div className="col-sm-4 mt-2">
          <label for="cars" id='label'> Middle Name:</label>
        <br/>
     <input value={data.middlename} type="text" class="form-control" id="formGroupExampleInput" name="middlename" onChange={inputChangeHandler}/>
   </div>
   <div className="col-sm-4 mt-2">
          <label for="cars" id='label'> Last Name:</label>
        <br/>
     <input value={data.lastname} type="text" class="form-control" id="formGroupExampleInput" name="lastname" onChange={inputChangeHandler}/>
   </div>
   <div className="col-sm-4 mt-2">
          <label for="cars" id='label'>Salary:</label>
        <br/>
     <input value={data.salary} type="text" class="form-control" id="formGroupExampleInput" name="salary" onChange={inputChangeHandler}/>
   </div>

   </div>
   <button onClick={submitHandler} className="btn btn-primary mt-4">Save</button>
   </div>
   </div>
   </>
   }
   
export default Employee;