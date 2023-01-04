import { useState } from "react";

const TrainingMaster = () => {
  const [data,setData]=useState({
  
  });
 const inputChangeHandler=(e)=>{
    let newData={...data};
    newData[e.target.name]=e.target.value;
    setData(newData)
    // console.log(JSON.stringify(newData))
 }
 //const submitHandler=(e)=>{
    // e.preventDefault();
   // console.log(JSON.stringify(data))
 //}

 const submitHandler=(e)=>{
  console.log(JSON.stringify(data))
 
  fetch("http://localhost:8080/employee",{
    method:"POST",
    headers:{"Content-Type":"application/json","Accept":"application/json"},
    body:JSON.stringify(data)
  }).then(()=>{
    console.log("item are added")})
  
}



  return (
    <div className="container2">
    <h2>Traning Master To Employee</h2>
    <hr />
    <div className="bg-light">
      <div className="row ">
      
      <div className="col-sm-4">
            <label for="cars" id='label'>Event Name:</label>
            <br />
            <select value={data.eventName} class="form-select" aria-label="Default select example" name="eventName" onChange={inputChangeHandler}>
              <option selected disabled>Event Name</option>
              <option value="abcd">abcd</option>
              <option value="efgh">efgh</option>
              <option value="ijkl">ijkl</option>
            </select>
          </div>
          <div className="col-sm-4">
            <label for="cars" id='label'>Training Name:</label>
            <br />
            <select value={data.trainingName} class="form-select" aria-label="Default select example" name="trainingName" onChange={inputChangeHandler}>
              <option selected disabled>Training Name</option>
              <option value="react js">react js</option>
              <option value="java">java</option>
              <option value="php">php</option>
            </select>
          </div>
          <div className="col-sm-4">
            <label for="cars" id='label'>Employee:</label>
            <br />
            <select value={data.employee} class="form-select" aria-label="Default select example" name="employee" onChange={inputChangeHandler} >
              <option selected disabled>Employee</option>
              <option value="aman">aman</option>
              <option value="amit">amit</option>
              <option value="saurav">saurav</option>
            </select>
          </div>
      </div>
      <button onClick={submitHandler} type="save" className="btn btn-primary btn-sm my-3 mx-5 ">Save</button>
      </div>
      </div>
  )
}

export default TrainingMaster