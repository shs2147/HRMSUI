import { useState,useEffect } from "react";
import { Form } from 'react-bootstrap'
import swal from 'sweetalert';

const AddShift = () => {
  const[data,setData]=useState([]);
  const[employee,setEmployee]=useState("");
  // const [data,setData]=useState({
  //   shiftdutyassign:'',
  //   country:'',
  //   employee:'',
  // });
  const[show,setShow]=useState([]);
 const inputChangeHandler=(e)=>{
    let newData={...data};
    newData[e.target.name]=e.target.value;
    setData(newData)
 }
 const submitHandler=(e)=>{
  console.log(JSON.stringify(data))

  fetch("https://apihrms.atwpl.com/shiftManagement/addShift",{
    method:"POST",
    headers:{"Content-Type": "application/json", "Accept":"application/json"},
    body:JSON.stringify(data)
  }).then(()=>{
    console.log("Shift Management")})
    swal("Success", "Shift Data Added Successfully", "success");

 }
 const fetchData1 = () =>{
  fetch("https://apihrms.atwpl.com/basic/fetchData",{
  })
  .then((response) =>{
    return response.json();
  })
  .then((data) =>{
    setShow(data)
  })
}
useEffect(()=>
{
  fetchData1();
},[])



  return (
    <div className="container">
      <h2>Shift Duty Assign</h2>
      <hr />
      <form>
      <div className="bg-light">
        <div className="row ">
        <div className="col-sm-4">
            <label for="car" id='label' >Employee:</label>
        
            <select valueType={data.employee}  class="form-select" aria-label="Default select example"  name="employee" onChange={inputChangeHandler}>
            <option selected disabled>Select Employee</option>
            {show.map(e=>(<option valueType={e.employeeName}>{e.employeeName}</option>))}
              </select>
          </div>
        
       <div className="col-sm-4 ">
            <label for="cars" id='label'>Country :</label>
            <br />
            <select valueType={data.country} class="form-select" aria-label="Default select example" name="country" onChange={inputChangeHandler}>
              <option selected disabled>Choose Shift</option>
              <option valueType="India">India</option>
              <option valueType="USA">USA</option>
              <option valueType="Japan">Japan</option>
              {/* <option valueType="afternoon">Shift C</option>
              <option valueType="Evening">Shift D</option> */}
            </select>
          </div>

          <div className=" col-sm-4">
        <label >Date:</label>
       <div ><Form.Control value={data.datee} type="date" name="date" onChange={inputChangeHandler}></Form.Control></div>
       </div>
          
          <div className="col-sm-4 mt-2">
  <label   for="cars" id='label'>Start Time</label><br/>
  <input value={data.startTime} type="time" class="form-control" aria-label="Default select example"  name="startTime" onChange={inputChangeHandler} />
</div>
<div className="col-sm-4 mt-2">
  <label   for="cars" id='label'>End Time</label><br/>
  <input value={data.endTime} type="time" class="form-control" aria-label="Default select example"  name="endTime" onChange={inputChangeHandler}/>
</div>
          </div>
          <button type="submit" onClick={submitHandler} className="btn btn-primary mt-4">Save</button>
          </div>
          </form>
    </div>  
  )
}

export default AddShift