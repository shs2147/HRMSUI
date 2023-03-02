import { useState } from "react";
import swal from 'sweetalert';

  const Event = () => {
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
  
    fetch("http://localhost:8080/event/savedata",{
      method:"POST",
      headers:{"content-Type": "application/json", "Accept": "application/json"},
      body:JSON.stringify(data)
    }).then(()=>{
      console.log("Event are added")})
      swal("Success", "Event Name Added Successfully", "success");
  
  }
   return <>
   <div className="container">
    <div className="d-flex">
     <h3>Add Details</h3>
     </div> 
     <hr />
     <div className="bg-light">
     <div className="row ">

      
  
   <div className="col-sm-4 my-4">
          <label for="cars" id='label'>Event Name:</label>
        <br/>
     <input value={data.name} type="text" class="form-control" id="formGroupExampleInput" name="name" onChange={inputChangeHandler}/>
   </div>

   <div className="col-sm-4 my-4">
          <label for="cars" id='label'>Description:</label>
        <br/>
     <input value={data.description} type="text" class="form-control" id="formGroupExampleInput" name="description" onChange={inputChangeHandler}/>
   </div>
</div>
   <button onClick={submitHandler} className="btn btn-primary mt-4">Save</button>
   </div>
   </div>
   </>
   }
   
export default Event;