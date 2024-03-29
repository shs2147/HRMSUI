import { useState,useEffect } from "react";
import swal from 'sweetalert';

const TrainingToFeedback = () => {
  const [data,setData]=useState({
   
  });
  const[show,setShow]=useState([]);
  const[itemshow,setItemshow]=useState([]);
 const inputChangeHandler=(e)=>{
    let newData={...data};
    newData[e.target.name]=e.target.value;
    setData(newData)
   
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

const fetchData = () =>{
  fetch("https://apihrms.atwpl.com/training/fetchData",{
  })
  .then((response) =>{
    return response.json();
  })
  .then((data) =>{
    setItemshow(data)
  })
}
useEffect(()=>
{
  fetchData();
  
},[])
 //const submitHandler=(e)=>{
  //console.log(JSON.stringify(data))
    // e.preventDefault();
 //}

 const submitHandler=(e)=>{
  e.preventDefault();

  console.log(JSON.stringify(data))
 
  fetch("https://apihrms.atwpl.com/feedback",{
    method:"POST",
    headers:{"Content-Type":"application/json",
              Accept:"application/json"},
    body:JSON.stringify(data)
  })
  .then(()=>{
    console.log("item are added")})
    swal("Success", "Feedback saved Successfully", "success").then(() => {
      window.location.reload(true);
  });
  
}

  return (
    <div className="container2">
      <h2>Feedback Of Trainee</h2>
      <hr />
      <form>
      <div className="bg-light">
        <div className="row ">
        
        <div className="col-sm-6">
            <label for="cars" id='label'>Training Name:</label>
            <br />
            <select value={data.trainingName} class="form-select" aria-label="Default select example" name="trainingName" onChange={inputChangeHandler}>
              <option >Choose Training Name</option>
              {itemshow.map(e=>(<option valueType={e.trainingName}>{e.trainingName}</option>))}
              {/* <option value="react js">react js</option>
              <option value="php">php</option>
              <option value="java">java</option> */}
            </select>
          </div>
          <div className="col-sm-6">
            <label for="cars" id='label'>Employee:</label>
            <br />
            <select value={data.employee} class="form-select" aria-label="Default select example" name="employee" onChange={inputChangeHandler}>
              <option selected disabled>Choose Employee</option>
              {show.map(e=>(<option valueType={e.employeeName}>{e.employeeName}</option>))}
              {/* <option value="aman">aman</option>
              <option value="amit">amit</option>
              <option value="saurav">saurav</option> */}
            </select>
          </div>
          <div className="col mt-3">
            <label class="form-label">Feedback:</label>
            <br />
            <textarea placeholder="Write something..." value={data.feedback} className='form-control' id='my box' rows="3" name="feedback" onChange={inputChangeHandler} required></textarea>
          </div>
        </div>
        <button onClick={submitHandler} type="submit" className="btn btn-primary btn-sm my-3 mx-5 ">Save</button>
        </div>
        </form>
        </div>
       
  )
}

export default TrainingToFeedback