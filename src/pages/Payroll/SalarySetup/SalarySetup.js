import { useState } from 'react';

const SalarySetup = () => {
  const [data, setData] = useState({
   
});
const inputChangeHandler = (e) => {
    let newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData)
    // console.log(JSON.stringify(newData))
}
const submitHandler=(e)=>{
  // e.preventDefault();
  console.log(JSON.stringify(data))
  fetch("http://localhost:8080/salary/salary",{
      method:"POST",
      headers:{"content-Type":"application/json","Accept":"application/json"},
      body:JSON.stringify(data)
    }).then(()=>{
      console.log("payroll are added")
    })
}
  return (
    <div>
    <h2 className='container'>Add Employee Salary <div className='header Button'>
        <button type="button" className="btn btn-outline-primary btn-sm mx-2">+ Salary Details</button>
         </div></h2>
    <div className=' shadow-lg p-2 mb-5 bg-body rounded'>
   
    <div className="container">
    <div className="bg-light">
      <div className="row ">
      <div className=" col-sm-6">
        <label className="form-label">Employee Id:</label><br />
    <input value={data.employeeId} type="text" className="form-control" id="formGroupExampleInput" name='employeeId' onChange={inputChangeHandler} />
          </div>
          {/* <div className=" col-sm-6">
        <label className="form-label">Financial Year:</label><br />
    <input value={data.financialYear} type="text" className="form-control" id="formGroupExampleInput" name='financialYear' onChange={inputChangeHandler} />
          </div> */}
          <div className="col-sm-6 ">
          <label className="form-label" for="cars" id='label'>Financial Year:</label>
           <br />
 <select value={data.financialYear} className="form-select" aria-label="Default select example" name='financialYear' onChange={inputChangeHandler}>
    <option selected disabled>---Select Year---</option>
      <option value="2020-21">2020-21</option>
     <option value="2021-22">2021-22</option>
    <option value="2022-23">2022-23</option>
      <option value="2023-24">2023-24</option>
        <option value="2024-25">2024-25</option>
         <option value="2025-26">2025-26</option>
          <option value="2026-27">2026-27</option>
          
                  </select>
                 </div>
          <div className="col-sm-6 ">
          <label className="form-label" for="cars" id='label'>Month:</label>
           <br />
 <select value={data.month} className="form-select" aria-label="Default select example" name='month' onChange={inputChangeHandler}>
    <option selected disabled>---Select Month---</option>
      <option value="Jan">Jan</option>
     <option value="Fab">Fab</option>
    <option value="Mar">Mar</option>
      <option value="Apr">Apr</option>
        <option value="May">May</option>
         <option value="Jun">Jun</option>
          <option value="Jul">Jul</option>
           <option value="Aug">Aug</option>
             <option value="Sep">Sep</option>
             <option value="Oct">Oct</option>
            <option value="Nov">Nov</option>
               <option value="Dec">Dec</option>
                  </select>
                 </div>
          <div className=" col-sm-6">
        <label className="form-label">Annual Salary:</label><br />
    <input value={data.annualSalary} type="text" className="form-control" id="formGroupExampleInput" name='annualSalary' onChange={inputChangeHandler} />
          </div>



       </div>
        </div>
        <button onClick={submitHandler} type="button" className="btn btn-primary my-4">Save</button>
        </div>
        </div>
        </div>
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