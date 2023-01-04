import { useState } from "react";

const ViewOtReport = () => {
  const [data,setData]=useState({
    SelectEmoloyee:'',
      fromdate:'',
      todate:''
  });
 const inputChangeHandler=(e)=>{
    let newData={...data};
    newData[e.target.name]=e.target.value;
    setData(newData)
    
 }
 const submitHandler=(e)=>{
  e.preventDefault();
    console.log(JSON.stringify(data))
      fetch("http://localhost:8080/OverTimeReport/save",{
      method:"POST",
      headers:{"content-Type": "application/json", "Accept": "application/json"},
      body:JSON.stringify(data)
    }).then(()=>{
      console.log("OverTimeReport are added")})
 }

  return <>
  <div className="container">
    <h4>OverTime Report</h4>
    <hr className="100%" />
    <form onSubmit={submitHandler} className="bg-light">
    <div className="row ">
      
      
    <div className="col-sm-4 mt-1">
         <label for="cars" id='label'>Select Emoloyee:</label>
       <br/>  
   <select value={data.employee} class="form-select" aria-label="Default select example" name="employee" onChange={inputChangeHandler}>
    <option selected disabled>Admistrator</option>
    <option value="aman">Aman</option>
    <option value="amit">Amit</option>
    <option value="ranjan">Ranjan</option>
    <option value="saurav">Saurav</option>
  </select>
  </div>
  
  <div className="col-sm-4">

<label  class="form-label"> From Date :</label><br/>
<input value={data.fromtime} type="date" class="form-control" id="formGroupExampleInput" name="fromtime" onChange={inputChangeHandler} />
</div>
<div className="col-sm-4">
<label  class="form-label">To Date:</label><br/>
<input value={data.totime} type="date" class="form-control" id="formGroupExampleInput" name="totime" onChange={inputChangeHandler} />
</div>
  </div>
  <button type="submit" onClick={submitHandler} className="btn btn-primary mt-4">Save</button>
  </form>
  </div>
  </>
  }
  
  export default ViewOtReport;