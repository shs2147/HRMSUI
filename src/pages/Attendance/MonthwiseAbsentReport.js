import { useState } from "react";

const MonthwiseAbsentReport = () => {
  const [data,setData]=useState({
    SelectEmoloyee:'',
      todate:'',
      fromdate:''
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
    <h4>Datewise Absent Report</h4>
    <hr className="100%" />
    <div className="bg-light">
    <div className="row ">
      
      
    <div className="col-sm-4 mt-1">
         <label for="cars" id='label'>Select Employee:</label>
       <br/>  
   <select value={data.selectemployee} class="form-select" aria-label="Default select example" name="selectemployee" onChange={inputChangeHandler}>
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
  <button onClick={submitHandler} className="btn btn-primary mt-4">Save</button>
  </div>
  </div>
  </>
  }
  
  export default MonthwiseAbsentReport;