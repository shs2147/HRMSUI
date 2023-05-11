import { useState,useEffect } from "react";
import swal from 'sweetalert';

const AddJobVacancy = () => {
  const [data,setData]=useState({
    jobTitle:'',
    vacancyName:'',
    hiringManager:'',
    numberOfPosition:'',
    jobLocation:'',
    jobDescription:'',
    active:'',

  });
const[show,setShow]=useState([]);
const[itemshow,setItemshow]=useState([])
const[active,setActive]=useState([]);
 const inputChangeHandler=(e)=>{
    let newData={...data};
    newData[e.target.name]=e.target.value;
    setData(newData)
    
 }
 const submitHandler=(e)=>{
  console.log(JSON.stringify(data))
  fetch("http://localhost:8080/vancancies/vacancy", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "appliction/json" },
      body: JSON.stringify(data)
    }).then(() => {
      console.log("Vacancy created")
      swal("Success", "User Added Successfully", "success").then(()=>{
        window.location.reload(true)
      })
    })
}
const fetchData = () =>{
  fetch("http://localhost:8080/addjobtitle/getjob",{
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
  fetchData();
 },[])

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


  return (
    <div className="container2">
      <h4>Add Job Vacancy</h4>
      <hr />
      <div className="bg-light">
        <div className="row ">


          <div className="col-sm-6 mt-2">
            <label for="cars" id='label'>Job Title:</label>
            <br />
            {/* <select class="form-select" aria-label="Default select example"> */}
            <select valueType={data.jobTitle} class="form-select" aria-label="Default select example"name="jobTitle" onChange={inputChangeHandler}>
              <option selected disabled>Select Job Title</option>
              {show.map(e=>(<option valueType={e.jobTitles}>{e.jobTitles}</option>))}
              {/* <option valueType="aman">Aman</option>
              <option valueType="amit">Amit</option>
              <option valueType="ranjan">Ranjan</option>
              <option valueType="saurav">Saurav</option> */}
            </select>
          </div>

          <div className="col-sm-6">
            <label class="form-label">Vacancy Name</label><br />
            {/* <input type="text" class="form-control" id="formGroupExampleInput" /> */}
            <input placeholder="Enter Vacancy Name" value={data.vacancyName} type="text" className="form-control" id="formGroupExampleInput" name="vacancyName" onChange={inputChangeHandler}/>
          </div>

          <div className="col-sm-6 mt-2">
            <label for="cars" id='label'>Hiring Manager:</label>
            <br />
            {/* <select class="form-select" aria-label="Default select example"> */}
            <select valueType={data.hiringManager}class="form-select" aria-label="Default select example" name="hiringManager" onChange={inputChangeHandler}>
              <option selected disabled>Select Hiring Manager</option>
              {itemshow.map(e=>(<option valueType={e.employeeName}>{e.employeeName}</option>))}
              {/* <option valueType="aman">Aman</option>
              <option valueType="amit">Amit</option>
              <option valueType="ranjan">Ranjan</option>
              <option valueType="saurav">Saurav</option> */}
            </select>
          </div>

          <div className="col-sm-6">
            <label class="form-label">Number Of Postion:</label><br />
            {/* <input type="text" class="form-control" id="formGroupExampleInput" /> */}
            <input placeholder="Enter Number of position" value={data.numberOfPosition} type="text" className="form-control" id="formGroupExampleInput" name="numberOfPosition" onChange={inputChangeHandler} />
          </div>
          <div className="col-sm-6">
            <label class="form-label">Job Location:</label><br />
            {/* <input type="text" class="form-control" id="formGroupExampleInput" /> */}
            <input placeholder="Enter Job Location" value={data.jobLocation} type="text" className="form-control" id="formGroupExampleInput" name="jobLocation" onChange={inputChangeHandler} />
          </div>
          <div className="col-sm-6">
            <label class="form-label">Job Description:</label><br />
            <input placeholder="Enter job Description" value={data.jobDescription} type="text" className="form-control" id="formGroupExampleInput" name="jobDescription" onChange={inputChangeHandler}/>
          </div>
        </div>
        {/* <div>
          <label class="form-label">Active:</label><br />
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="active" id="inlineRadio1" value="1" onChange={(e)=> setActive(e.target.value)}/>
            <label class="form-check-label" htmlFor="inlineRadio1">Yes</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="active" id="inlineRadio2" value="0" onChange={(e)=> setActive(e.target.value)} />
            <label class="form-check-label" htmlFor="inlineRadio2">No</label>
          </div>
        </div> */}
        <div> 
          <button onClick={submitHandler} className="btn btn-primary mt-4">Save</button>
          </div>
      </div>
    </div>

  )
}

export default AddJobVacancy