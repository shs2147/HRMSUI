import { useEffect, useState } from 'react';

const SalarySetup = () => {
const [data, setData] = useState([]);
const [show,setShow]=useState([]);
const [empName,setEmpName]=useState([]);
const [selectedId,setSelectedId]=useState([]);
//const [current,setCurrent]=useState([]);


console.log(empName,selectedId,"selectedId")
const inputChangeHandler = (e) => {
    let newData = { ...data };
    newData[e.target.name ] = e.target.value;
    if(e.target.name === "employeeName"){
      setEmpName(e.target.value)
    }
    if(e.target.name === "id"){
      setSelectedId(e.target.value);
     
    }
    // if(e.target.name === "financialYear"){
    //   setSelectedId(e.target.value);
     
    // }
    newData[e.target.name] = e.target.value;
    setData(newData)
    // console.log(JSON.stringify(newData))
}
const submitHandler=(e)=>{
  e.preventDefault();
  // console.log(JSON.stringify(data))
  fetch("http://localhost:8080/salary/salary",{
      method:"POST",
      headers:{"content-Type":"application/json","Accept":"application/json"},
      body:JSON.stringify(data)
    }).then(()=>{
      console.log("payroll are added")
    })
}


// const getCurrentFinancialYear = ()=> {
//    const fiscalyear = "";
//   var today = new Date();
//   if ((today.getMonth() + 1) <= 3) {
//     fiscalyear = (today.getFullYear() - 1) + "-" + today.getFullYear()
//   } else {
//     fiscalyear = today.getFullYear() + "-" + (today.getFullYear() + 1)
//   }
//   return fiscalyear
// }
// console.log(fiscalyear);

// document.getElementById("spFY").innerHTML=getCurrentFinancialYear();
const financialYear=()=>{
  function getCurrentFinancialYear() {
      const thisYear = (new Date()).getFullYear();
      const yearArray = [0, 1, 2, 3, 4].map((count) => `${thisYear - count}-${(thisYear - count - 1).toString().slice(-2)}`);
      console.log(yearArray);
      return yearArray.join();
    }
    console.log(getCurrentFinancialYear());
}


const fetchData = () =>{
  fetch("http://localhost:8080/basic/fetchemployee/{?employeeid}",{

  })
  .then((response) =>{
    return response.json();
  })
  .then((data) =>{
    setShow(data)
  })
  console.log(data.id)
}
const fetchData1 = () =>{
  fetch("http://localhost:8080/basic/fetchdata",{
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
  // fetchData();
  fetchData1();

},[])
       
useEffect(()=>{
     const myData = show?.filter((item)=>item.employeeId == selectedId )

   console.log("my emp",myData[0]?.employeeName)
   setEmpName(myData[0]?.employeeName)
},[selectedId])



// console.log(data,"data")

  return (
    
    <form>
    <div>
    <h2 className='container'>Add Employee Salary <div className='header Button'>
        {/* <button type="button" className="btn btn-outline-primary btn-sm mx-2">+ Salary Details</button> */}
         </div></h2>
    <div className=' shadow-lg p-2 mb-5 bg-body rounded'>
   
    <div className="container">
    <div className="bg-light">
      <div className="row ">
      <div className=" col-sm-6">
        <label className="form-label">Employee Id:</label><br />
    {/* <input value={data.id} type="text" className="form-control" id="formGroupExampleInput" name='id' onChange={inputChangeHandler} /> */}
    <select value={data.id } class="form-select" aria-label="Default select example" name="id" onChange={inputChangeHandler}>
    <option selected disabled>select employee</option>
    {show.map(e=>(<option valueType={e.employeeId }>{e.employeeId }</option>))}
  </select>
  </div>
  <div className=" col-sm-6">
        <label className="form-label">Employee Name</label><br />
        <select value={empName} className="form-select" aria-label="Default select example" name="employeeName" onChange={inputChangeHandler}>
    {/* <select value={data.employeeName} type="text" className="form-control" id="formGroupExampleInput" name='employeeName' onChange={inputChangeHandler}> </select> */}
    {show.map(e=>(<option valueType={e.employeeName}>{e.employeeName}</option>))}
    {/* {show.map(e=>(<option value={data.value}>{data.value}</option>))} */}
    </select>
          </div>



          
          {/* <div className=" col-sm-6">
        <label className="form-label">Financial Year:</label><br />
    <input value={data.financialYear} type="text" className="form-control" id="formGroupExampleInput" name='financialYear' onChange={inputChangeHandler} />
          </div> */}
          <div className="col-sm-6 ">
          <label className="form-label" for="cars" id='label' >Financial Year:</label>
           <br /> 
          
 <select value={data.financialYear} className="form-control" aria-label="Default select example" name='financialYear' onChange={financialYear}>
  
    {/* <option selected disabled>---Select Year---</option> */}
      {/* <option value="2020-21">2020-21</option>
     <option value="2021-22">2021-22</option>
    <option value="2022-23">2022-23</option>
      <option value="2023-24">2023-24</option>
        <option value="2024-25">2024-25</option>
         <option value="2025-26">2025-26</option>
          <option value="2026-27">2026-27</option> */}
          
                  </select>
                 </div>
                 
          <div className="col-sm-6 ">
          <label className="form-label" for="cars" id='label'>Month:</label>
           <br />
 <select value={data.month} className="form-select" aria-label="Default select example" name='month' onChange={inputChangeHandler}>
    <option selected disabled>---Select Month---</option>
      <option value="Jan">January</option>
     <option value="Fab">February</option>
    <option value="Mar">March</option>
      <option value="Apr">April</option>
        <option value="May">May</option>
         <option value="Jun">June</option>
          <option value="Jul">July</option>
           <option value="Aug">August</option>
             <option value="Sep">September</option>
             <option value="Oct">October</option>
            <option value="Nov">November</option>
               <option value="Dec">December</option>
                  </select>
                 </div>
          <div className=" col-sm-6">
        <label className="form-label">Annual Salary:</label><br />
    <input value={data.annualSalary} type="text" className="form-control" id="formGroupExampleInput" name='annualSalary' onChange={inputChangeHandler} />
          </div>



       </div>
        </div>
        {/* <button type="button" className="btn btn-primary my-4" onClick={submitHandler}>Save</button> */}
        {/* <button type="submit" class="btn btn-primary mt-4">
            Save
          </button> */}
          <button onClick={submitHandler} className="btn btn-primary mt-4">Save</button>
        </div>
        </div>
        </div>
        </form>
  )
  
}


export default SalarySetup






























// import React from 'react'
// import TableEmployee from './Table'
// import classes from "./EmployeeDetails.module.css"
// import { Form } from 'react-bootstrap'
// function EmployeeDetails() {
//   const data=[
//     {
//       id:1,
//       name:"saurav",
//       type:"Earning",
//       value:"Calculated",
//       salary:"10000",

//     }
//   ]
//   return (
//     <div className={classes.contain}>
//     <div className={classes.header}>
//         <div className='display-5 mb-3'>Salary Setup</div>

//         <div className={classes.headerButton}>
//          <button type="button" class="btn btn-outline-primary btn-sm mx-2">+ Salary Details</button>
//         </div>
//         </div>
//         <div className={classes.datePick}><Form.Control type="date"></Form.Control></div>
//         {data.map(items => {
//           return <TableEmployee id={items.id} name={items.name} type={items.type}  value={items.value} salary={items.salary}  />})}
          
//     </div>)}

// export default EmployeeDetails