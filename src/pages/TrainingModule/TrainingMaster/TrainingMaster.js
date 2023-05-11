import { useState,useEffect} from "react";
import swal from 'sweetalert';

const TrainingMaster = () => {
  const [data,setData]=useState({
  
  });
const [show,setShow]=useState([]);
const [itemshow,setItemshow]=useState([]);
const[train,setTrian]=useState([]);

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
 
  fetch("http://localhost:8080/employee/save",{
    method:"POST",
    headers:{"Content-Type":"application/json","Accept":"application/json"},
    body:JSON.stringify(data)
  }).then(()=>{
    console.log("employee added successfuly")})
    swal("Success", "Data Added Successfully", "success").then(()=>{
      window.location.reload(true);
    })
    
}
const fetchData1 = () =>{
  fetch("http://localhost:8080/basic/fetchdata",{
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
  fetchData1();
},[])

// useEffect(() => {
//   const fetchData = async () => {
//     const response = await fetch(
//       "http://localhost:8080/basic/fetchdata"
//     );
//     const result = await response.json();

//     console.log("res", result);
//   };

//   fetchData();
// }, []);

const fetchData2 = () =>{
  fetch("http://localhost:8080/event/fetchdata",{
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
  fetchData2();
 },[])

 const fetchData3 = () =>{
  fetch("http://localhost:8080/training/fetchdata",{
  })
  .then((response) =>{
    return response.json();
  })
  .then((data) =>{
    setTrian(data)
  })
}
useEffect(()=>
{
  fetchData3();
 },[])

  return (
    <div className="container2">
    <h2>Training Master</h2>
    <hr />
    <form className="bg-light" onSubmit={submitHandler}>
      <div className="row ">
      
      <div className="col-sm-4">
            <label for="cars" id='label'>Event Name:</label>
            <br />
            <select value={data.eventName} class="form-select" aria-label="Default select example" name="eventName" onChange={inputChangeHandler} >
              <option selected disabled>Event Name</option>
              {show.map(e=>(<option valueType={e.name}>{e.name}</option>))}
            </select>
          </div>
          <div className="col-sm-4">
            <label for="cars" id='label'>Training Name: </label>
            <br />
            <select value={data.trainingName} class="form-select" aria-label="Default select example" name="trainingName" onChange={inputChangeHandler} >
              <option selected disabled>Training Name</option>
                  {train.map(e=>(<option valueType={e.trainingName}>{e.trainingName}</option>))}0
            </select>
          </div>
          <div className="col-sm-4">
            <label for="cars" id='label'>Employee:</label>
            <br />
            <select value={data.employee} class="form-select" aria-label="Default select example" name="employee" onChange={inputChangeHandler} >
              <option selected disabled>Select Employee</option>
              {itemshow.map(e=>(<option valueType={e.employeeName}>{e.employeeName}</option>))}
              {/* <option value="aman">aman</option>
              <option value="amit">amit</option>
              <option value="saurav">saurav</option> */}
            </select>
          </div>
      </div>
      <button  type="submit" className="btn btn-primary btn-sm my-3 mx-5 " value="Submit">Save</button>
      </form>
      </div>
  )
}

export default TrainingMaster