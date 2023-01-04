import { useState } from "react";
import { Form } from 'react-bootstrap'
import Edit from "./Edit";
import Form2 from './Form2'


const ViewEmployeeShift = () => {
  const [data, setData] = useState({

  });
  const[displayed,setDisplayed]=useState([]);
  const[value,setValue]=useState([]);
  const inputChangeHandler = (e) => {
    let newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData)
  }
   const submitHandler=(e)=>{
    console.log(JSON.stringify(data))
    console.log(value)
   
   }
   const handleClick =(val) =>{

  setValue(val)
}

const displayHandler=(display)=>{
  setDisplayed(display)
}

  return (
    <div><div className="container2">
      <h2>View Employees Duty</h2>
      <hr />
      <div className="bg-light">
        <div className="row ">

          <div className=" col-sm-3">
            <label>From Date:</label>
            <br />
            <Form.Control value={data.fromDate} type="date" name="fromDate" onChange={inputChangeHandler}></Form.Control>
          </div>

          <div className=" col-sm-3">
            <label>To Date:</label>
            <br />
            <Form.Control value={data.toDate} type="date" name="toDate" onChange={inputChangeHandler}></Form.Control>

          </div>
          <div className="col-sm-3 ">
            <label for="cars" id='label'>Choose Employee:</label>
            <br />
            <select value={data.chooseEmployee} class="form-select" aria-label="Default select example" name="chooseEmployee" onChange={inputChangeHandler}>
              <option selected disabled>Choose Employee</option>
              <option value="aman">abcd</option>
              <option value="amit">defg</option>
              <option value="saurav">hijk</option>
              <option value="saurav">lmno</option>
            </select>
          </div>
        </div>
        <button onClick={submitHandler} className="btn btn-primary btn-sm my-3 mx-5 ">Search</button>

        <br />
        <button onClick={submitHandler} className="btn btn-primary btn-sm my-3 mx-5 ">Export</button>
        <hr />
      </div>
    </div>
    <div>

        {displayed&&<Edit value={value}/>}
    </div>

      <Form2 displayHandler={displayHandler} handleClick={handleClick}  />
    </div>

  )
}

export default ViewEmployeeShift