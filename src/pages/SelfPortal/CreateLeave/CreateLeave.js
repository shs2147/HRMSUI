import { useEffect, useState } from "react";
import swal from 'sweetalert';

  const CreateLeave = () => {
    const [data,setData]=useState({
  
    });
    const[show,setShow]=useState([]);

    
   const inputChangeHandler=(e)=>{
      let newData={...data};
      newData[e.target.name]=e.target.value;
      setData(newData)
      
   }

   const fetchData1 = () => {
    fetch("https://apihrms.atwpl.com/basic/fetchData", {})
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setShow(data);
      });
  };
  useEffect(()=>{
    fetchData1();
  },[])



   const submitHandler=(e)=>{
    e.preventDefault();
    console.log(JSON.stringify(data))



    fetch("https://apihrms.atwpl.com/CreateLeaveRequest/post",{
            method:"POST",
            headers:{"content-Type": "application/json", "Accept": "application/json"},
            body:JSON.stringify(data)
          }).then(()=>{
            swal("Success", "Data Added Successfully", "success").then(()=>{
              window.location.reload(true);
            })
            console.log("Attendance are added")})
            
            .catch(err=>console.log(err))

   }
return <>
<div className="container">
  <h4>Create Leave Request</h4>
  <hr />
  <form onSubmit={submitHandler} className="bg-light">
  <div className="row ">
    
    
  <div className="col-sm-4 mt-2">
       <label for="cars" id='label'>Select Employee : </label>
     <br/>  
 <select value={data.selectEmployee} class="form-select" aria-label="Default select example" name="selectEmployee" onChange={inputChangeHandler}>
  <option selected disabled>Select Employee</option>
  {show.map(e=>(<option valueType={e.employeeName}>{e.employeeName}</option>))}
</select>
</div>

<div className="col-sm-4 mt-2">
       <label for="cars" id='label'>Leave Approver : </label>
     <br/>  
 <select value={data.leaveApprover} class="form-select" aria-label="Default select example" name="leaveApprover" onChange={inputChangeHandler}>
  <option selected disabled>Select Approver</option>
  {show.map(e=>(<option valueType={e.employeeName}>{e.employeeName}</option>))}
</select>
</div>

<div className="col-sm-4 mt-2">
       <label for="cars" id='label'>Leave Type : </label>
     <br/>  
 <select value={data.LeaveType} class="form-select" aria-label="Default select example" name="leaveType" onChange={inputChangeHandler}>
  <option selected disabled>Choose Leave Type</option>
  {show.map(e=>(<option valueType={e.employeeName}>{e.employeeName}</option>))}
</select>
</div>

<div className="col-sm-4 mt-2">
  <label  class="form-label">Start Date : </label><br/>
  <input value={data.startDate} type="Date" class="form-control" id="formGroupExampleInput" name="startDate" onChange={inputChangeHandler} required />
</div>

<div className="col-sm-4 mt-2">
  <label  class="form-label">End Date : </label><br/>
  <input value={data.endDate} type="Date" class="form-control" id="formGroupExampleInput" name="endDate" onChange={inputChangeHandler} required />
</div>

    <div className="col-sm-4 mt-2">
            <label class="form-label">Reason For Leave :</label>
            <br />
            <textarea placeholder="Write something..." value={data.reasonForLeave} className='form-control' id='my box' rows="3" name="reasonForLeave" onChange={inputChangeHandler} required></textarea>
    </div>

</div>
<button type="submit" className="btn btn-primary mt-4">Save</button>
</form>
</div>
</>
}

export default CreateLeave;






