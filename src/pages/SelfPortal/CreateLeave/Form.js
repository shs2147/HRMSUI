
import React, { useEffect, useState } from "react";
import swal from 'sweetalert';

function Form() {
  const url = "";
  const [show,setShow]=useState([]);
  const [data, setData] = useState([])
     function handleInput(e) {
    e.preventDefault();
    const newdata = { ...data };
    newdata[e.target.name] = e.target.value;
    setData(newdata);
    
  }

  
  useEffect(() => {
    const fetchData = async () => {
    const response = await fetch('http://localhost:8080/basic/fetchdata')
    const data = await response.json();
    console.log(data);
    setShow(data);
}
fetchData();
}, []);
  const submitHandler=(e)=>{
    e.preventDefault();
  
    fetch("http://localhost:8080/CreateLeaveRequest/post",{
      method:"POST",
      headers:{"Content-Type":"application/json","Accept":"application/json"},
      body:JSON.stringify(data)
    }).then(()=>{
      console.log("Create Leave Accepted")
      swal("Success", "Data Added Successfully", "success");
    })
  };

  const leaveType = [
    { value: "", text: "Choose Leave Type", disabled: false },
    { value: "casual", text: "Casual Leave" },
    { value: "sick", text: "Sick Leave" },
    { value: "annual", text: "Annual Leave" },
  ];
  
  return (
    <form onSubmit={submitHandler} className=" ">
      <p className="h4 py-2">Create Leave Request</p>
      <div className="row mb-1 d-flex justify-content-evenly">
        <div className="col-sm-5 mx-1">
          <label for="formFile" className="form-label">
            Select Employee:
          </label>
          <br />
          
          <select
            className="form-select form-select-lg mb-1 w-75"
            value={data.selectEmployee}
            onChange={handleInput}
            name="selectEmployee"
          >
            <option>select Employee</option>
            {show.map(e=>(<option valueType={e.employeeName}>{e.employeeName}</option>))}
          </select>
          
        </div>
        <div className="col-sm-5 mx-2">
          <label for="formFile" className="form-label">
            Leave Approver:
          </label>
          <br />

          <select
            className="form-select form-select-lg mb-1 w-75"
            value={data.leaveApprover}
            name="leaveApprover"
            onChange={handleInput}
          >
            <option>select Approver</option>
            {show.map(e=>(<option valueType={e.employeeName}>{e.employeeName}</option>))}
          </select>
        </div>
      </div>
      <div className="row mb-1 d-flex justify-content-evenly">
        <div className="col-sm-5 w-50">
          <label for="formFile" className="form-label">
            Leave Type:
          </label>
          <br />

          <select
            className="form-select form-select-lg mb-1 w-75"
            value={data.leave_type}
            onChange={handleInput}
            name="leaveType"
          >
            {leaveType.map((option) => (
              <option
                disabled={option.disabled}
                key={option.value}
                value={option.value}
              >
                {option.text}
              </option>
            ))}
          </select>
        </div>
      </div>
     
      <div className=" row mb-1 d-flex justify-content-around ">
        <div className="col">
          <label for="exampleFormControlInput1" className="form-label ">
            Start Date:
          </label>
          <input
            name="startDate"
            onChange={handleInput}
            value={data.startDate}
            type="Date"
            className="form-control"
            id="Choose Type"
          />
        </div>
        <div className="col">
          <label for="exampleFormControlInput1" className="form-label ">
            End Date:
          </label>
          <input
            name="endDate"
            onChange={handleInput}
            value={data.endDate}
            type="Date"
            className="form-control"
            id="Choose Type"
          />
        </div>
        <div className="col">
          {" "}
          <label for="formFile" className="form-label">
            Days:
          </label>
          <br />
          <input
          className='form-control w-50'
            name="days"
            onChange={handleInput}
            value={data.days}
            type="number"
          />
        </div>
      </div>
      <div className="row d-flex flex-column">
        <label for="exampleInputEmail1" className="form-label mx-5">
          Reason for Leave
        </label>
        <textarea
          name="reasonForLeave"
          onChange={handleInput}
          value={data.reason_for_leave}
          type="text"
          className="form-control col-10 mx-5  w-75"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mt-2 mx-5">
        <button onClick={submitHandler} className="btn btn-outline-primary px-5 btn-lg mb-2 mx-2">
          Submit
        </button>
        
      </div>
    </form>
  );
}

export default Form;
