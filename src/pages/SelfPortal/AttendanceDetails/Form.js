import axios from "axios";
import React, { useEffect, useState } from "react";
function Form() {

  const [data, setData] = useState({
 
  });
  const [options,setOptions]=useState([]);
  useEffect(()=>{

  },[])

  function handleInput(e) {
    e.preventDefault();
    const newdata = { ...data };
    newdata[e.target.name] = e.target.value;
    setData(newdata);
    // console.log(JSON.stringify(newdata));
  }
  
  const fetchData = () =>{
    fetch("https://apihrms.atwpl.com/basic/fetchData",{
    })
    .then((response) =>{
      return response.json();
    })
    .then((data) =>{
      setOptions(data)
    })
  }
  useEffect(() =>{
  fetchData();
},[])
console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios
    //   .post(url, {
    //     from_date: data.from_date,
    //     to_date: data.to_date,
    //     employee: data.employee,
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //   });
    
    fetch("https://apihrms.atwpl.com/attendance/save",{
      method:"POST",
      headers:{"Content-Type":"application/json","Accept":"application/json"},
      body:JSON.stringify(data)
    }).then(()=>{
      console.log("Attendance Details Accepted")

    })

     
  };
  
  // const [selected, setSelected] = useState("");

  // const handleChange = (event) => {
  //   setSelected(event.target.value);
  // };
  return (
    <form className="py-2" onSubmit={handleSubmit}>
      <div className="row mb-3 mt-4 justify-content-evenly d-flex ">
        <div className="col-lg-3 mx-1  ">
          <label for="exampleFormControlInput1" className="form-label ">
            From Date:
          </label>
          <br/>
          <input
            onChange={handleInput}
            value={data.fromDate}
            name="fromDate"
            type="Date"
            className="form-control"
            id="Choose Type"
          />
        </div>
        <div className="col-sm-3 mx-3">
          <label for="exampleFormControlInput1" className="form-label">
            To Date:
          </label>
          <input
            onChange={handleInput}
            value={data.toDate}
            name="toDate"
            type="Date"
            className="form-control"
            id="exampleFormControlInput1"
           
          />
        </div>
        <div className="col-sm-3 mx-3">
          <label for="formFile" className="form-label">
            Select
          </label>
          <br />
          <input
           value={data.employeeName}
           type="text"
           className="form-control"
           id="formGroupExampleInput"
           name="employeeName"
           onChange={inputChangeHandler}
           placeholder="Enter Your Name"
           list="employee"
           required

          />

          <datalist id="employee"   >
            {options.map((option) => (
              <option
                // disabled={option.disabled}
                // key={option.value}
                value={option.employeeName}
              >
                {/* {option.text} */}
              </option>
            ))}
          </datalist>
        </div>
        <div className="row">
        <button type="submit" className="btn btn-outline-primary my-4 col-sm-2  mx-5">View Details</button>
        </div>
      </div>
      <table className=" mt-5 pb-5 row main">
      </table>
    </form>
  );
}

export default Form;