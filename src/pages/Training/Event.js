import { useState } from "react";
import swal from 'sweetalert';
import { Button } from "react-bootstrap";

  const Event = () => {
  const [data,setData]=useState([])
  const inputChangeHandler = (e) => {
    let newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
    };
 
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(JSON.stringify(data))
  
    fetch("https://apihrms.atwpl.com/event/saveData",{
      method:"POST",
      headers:{"content-Type": "application/json", "Accept": "application/json"},
      body:JSON.stringify(data)
    }).then(()=>{
      console.log("Event are added")})
      swal("Success", "Event Name Added Successfully", "success").then(()=>{
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
     {/* <div className="bg-light"> */}
     <div className="row ">

      
  
   <div className="col-sm-4 my-4">
          <label for="cars" id='label'>Event Name: <span style={{color:'red'}}> * </span></label>
        <br/>
     <input value={data.name} type="text" class="form-control" id="formGroupExampleInput" name="name" onChange={inputChangeHandler} placeholder="Please Enter Event Name" required pattern="[A-Za-z]*"/>
   </div>

   <div className="col-sm-4 my-4">
          <label for="cars" id='label'>Description: <span style={{color:'red'}} > * </span></label>
        <br/>
     <input value={data.description} type="text" class="form-control" id="formGroupExampleInput" name="description" onChange={inputChangeHandler} placeholder="Write Something Here"
     required
     />
   </div>
</div>
   <button type="submit" className="btn btn-primary mt-4">Save</button>
   {/* </div> */}
   </form>
   </div>
   </>
   }
   
export default Event;