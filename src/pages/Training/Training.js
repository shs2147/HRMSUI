import { useState } from "react";
import swal from 'sweetalert';

  const Employee = () => {
    const [data,setData]=useState([]);
   const inputChangeHandler=(e)=>{
      let newData={...data};
      newData[e.target.name]=e.target.value;
      setData(newData)
   }
  //  const submitHandler=(e)=>{
  //   console.log(JSON.stringify(data))
  // }
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(JSON.stringify(data))
  
    fetch("https://apihrms.atwpl.com/training/save",{
      method:"POST",
      headers:{"content-Type": "application/json", "Accept": "application/json"},
      body:JSON.stringify(data)
    }).then(()=>{
      console.log("Event are added")})
      swal("Success", "Training Name Added Successfully", "success").then(()=>{
        window.location.reload(true)
      })
  
  }
   return <>
   <div className="container">
    <div className="d-flex">
     <h3>Add Details</h3>
     </div> 
     <hr />
     <form className="bg-light" onSubmit={submitHandler}>
     <div className="row ">

      
  
   <div className="col-sm-4 my-4">
          <label for="cars" id='label'> Training Name: <span style={{color:'red'}}> * </span></label>
        <br/>
     <input placeholder="Enter Training Name" value={data.trainingName} type="text" class="form-control" id="formGroupExampleInput" name="trainingName" onChange={inputChangeHandler} required/>
   </div>

   <div className="col-sm-4 my-4">
          <label for="cars" id='label'>Description: <span style={{color:'red'}}> * </span></label>
        <br/>
     <input placeholder="Describe here..." value={data.description} type="text" class="form-control" id="formGroupExampleInput" name="description" onChange={inputChangeHandler} required/>
   </div>
   </div>
   <button type="submit" className="btn btn-primary mt-4">Save</button>
   </form>
   </div>
   </>
   }
   
export default Employee;