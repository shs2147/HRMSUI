import { useState,useEffect} from "react";
import swal from 'sweetalert';

const TrainingMaster = () => {
  const [data,setData]=useState({});
  const [employee,setEmployee]=useState([]);
const [show,setShow]=useState([]);
const [itemshow,setItemshow]=useState([]);
const[train,setTrian]=useState([]);
const[selectedId,setSelectedId]=useState([])


 const inputChangeHandler=(e)=>{
    let newData={...data};
    newData[e.target.name]=e.target.value;
    if(e.target.name=== "employee")
    {
      setEmployee(e.target.value)
    }
    if(e.target.name==="id")
    {
      setSelectedId(e.target.value)
    }
 }

 useEffect(()=>{
  const myData=itemshow?.filter((item)=>item.employeeId==selectedId)
  console.log("my emp",myData[0]?.name);
  setEmployee(myData[0]?.employeeName)
 },[selectedId])


 const submitHandler=(e)=>{
  
  e.preventDefault();
  console.log(JSON.stringify(data))

  fetch("http://localhost:8080/employee/save",{
    method:"POST",
    headers:{"content-Type": "application/json", "Accept": "application/json"},
    body:JSON.stringify(data)
  }).then(()=>{
    console.log("Event are added")})
    swal("Success", "Data Added Successfully", "success").then(()=>{
      window.location.reload(true)
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

 console.log ("itemshow" , itemshow)
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
    <h2>Training Masterghxwd</h2>
    <hr />
    <div className="bg-light" >
      <div className="row ">
      <div className="col-sm-4">
            <label for="cars" id='label'>Employee Id : </label>
            <br />
            <select value={data.id} class="form-select" aria-label="Default select example" name="id" onChange={inputChangeHandler} >
              <option selected disabled>Employee Id</option>
              {itemshow.map(e=>(<option valueType={e.employeeId}>{e.employeeId}</option>))}
            </select>
          </div>
          <div className="col-sm-4">
            <label for="cars" id='label'>Employee Name : </label>
            <br />
            <select value={employee} class="form-select" aria-label="Default select example" name="employee" onChange={inputChangeHandler} >
              <option selected disabled>Select Employee</option>
              {itemshow.map(e=>(<option valueType={e.employeeName}>{e.employeeName}</option>))}
            </select>
          </div>
      
      <div className="col-sm-4">
            <label for="cars" id='label'>Event Name : </label>
            <br />
            <select value={data.eventName} class="form-select" aria-label="Default select example" name="eventName" onChange={inputChangeHandler} >
              <option selected disabled>Event Name</option>
              {show.map(e=>(<option valueType={e.name}>{e.name}</option>))}
            </select>
          </div>
          <div className="col-sm-4">
            <label for="cars" id='label'>Training Name : </label>
            <br />
            <select value={data.trainingName} class="form-select" aria-label="Default select example" name="trainingName" onChange={inputChangeHandler} >
              <option selected disabled>Training Name</option>
                  {train.map(e=>(<option valueType={e.trainingName}>{e.trainingName}</option>))}
            </select>
          </div>
          
      </div>
      <button type="submit" className="btn btn-primary mt-4" onClick={submitHandler}>Save</button>
      </div>
      </div>
  )
}

export default TrainingMaster